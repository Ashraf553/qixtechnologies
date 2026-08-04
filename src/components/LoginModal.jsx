import React, { useState, useEffect } from 'react';
import { useAuthStore, AVATARS, getAvatarUri } from '../store/useAuthStore';

const PHRASE_LETTERS = "THANKYOUFORCHOOSINGUS";
const TOTAL_LETTERS = PHRASE_LETTERS.length; // 21 letters

export default function LoginModal({ isOpen, onClose }) {
  const login = useAuthStore((state) => state.login);
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].id);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Cubes grid state (21 letters)
  const [revealed, setRevealed] = useState(Array(TOTAL_LETTERS).fill(false));
  const [gameWon, setGameWon] = useState(false);

  // Interactive mouse tracking positions for 3D tilt & glowing orb
  const [orbPos, setOrbPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setEmail('');
      setPassword('');
      setSelectedAvatar(AVATARS[0].id);
      setError('');
      setRevealed(Array(TOTAL_LETTERS).fill(false));
      setGameWon(false);
      setOrbPos({ x: -1000, y: -1000 });
      setIsHovered(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const isFinished = revealed.every(rev => rev);
      if (isFinished && !gameWon) {
        setGameWon(true);
      }
    }
  }, [revealed, isOpen, gameWon]);

  if (!isOpen) return null;

  const handleCubeHover = (index) => {
    if (revealed[index]) return;
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);
  };

  const handleMouseMovePanel = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setOrbPos({ x, y });

    // Calculate grid 3D tilt angles based on cursor distance from panel center
    const gridX = e.clientX - rect.left - rect.width / 2;
    const gridY = e.clientY - rect.top - rect.height / 2;
    const tiltX = (gridY / (rect.height / 2)) * -9; // Tilt up to 9 degrees
    const tiltY = (gridX / (rect.width / 2)) * 9;  // Tilt up to 9 degrees

    const gridEl = e.currentTarget.querySelector('.cubes-grid-matrix');
    if (gridEl) {
      gridEl.style.setProperty('--tilt-x', `${tiltX}deg`);
      gridEl.style.setProperty('--tilt-y', `${tiltY}deg`);
    }
  };

  const handleMouseLeavePanel = (e) => {
    setIsHovered(false);
    const gridEl = e.currentTarget.querySelector('.cubes-grid-matrix');
    if (gridEl) {
      gridEl.style.setProperty('--tilt-x', '0deg');
      gridEl.style.setProperty('--tilt-y', '0deg');
    }
  };

  const handleMouseEnterPanel = () => {
    setIsHovered(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validations
    if (isSignUp && !name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 5) {
      setError('Password must be at least 5 characters long.');
      return;
    }

    setIsLoading(true);

    // Mock API call to simulate authorization
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      const userEmail = email.trim();
      let userName = isSignUp ? name.trim() : userEmail.split('@')[0];
      userName = userName.charAt(0).toUpperCase() + userName.slice(1);
      
      const avatarObj = AVATARS.find(a => a.id === selectedAvatar) || AVATARS[0];
      const avatarUri = getAvatarUri(avatarObj.colors);

      setTimeout(() => {
        login(userEmail, userName, avatarUri);
        setSuccess(false);
        onClose();
      }, 1200);
    }, 1500);
  };

  const revealedCount = revealed.filter(Boolean).length;
  const remainingLetters = TOTAL_LETTERS - revealedCount;

  return (
    <div className="auth-fullscreen-overlay">
      {/* Close button */}
      <button className="auth-fullscreen-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="auth-fullscreen-container">
        {/* LEFT: AUTH FORM PANEL */}
        <div className="auth-left-panel">
          <div className="auth-left-content">
            {!success ? (
              <>
                <div className="auth-logo-area">
                  <span className="auth-decor-bullet">✦</span>
                  <h3 className="auth-panel-title">
                    {isSignUp ? 'CREATE ACCOUNT' : 'ESTABLISH SESSION'}
                  </h3>
                  <p className="auth-panel-subtitle">
                    {isSignUp 
                      ? 'Register your developer identity to access QIX nodes.' 
                      : 'Connect with your credentials to resume your session.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-panel-form">
                  {error && <div className="auth-panel-error">{error}</div>}
                  
                  {isSignUp && (
                    <div className="auth-input-group">
                      <label className="auth-input-label">Full Name</label>
                      <input 
                        type="text" 
                        className="auth-input-field" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Rivera"
                        disabled={isLoading}
                      />
                    </div>
                  )}

                  <div className="auth-input-group">
                    <label className="auth-input-label">User Email</label>
                    <input 
                      type="email" 
                      className="auth-input-field" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@gmail.com"
                      disabled={isLoading}
                    />
                  </div>

                  {isSignUp && (
                    /* AVATAR SELECTION COMPONENT */
                    <div className="auth-input-group">
                      <label className="auth-input-label">Select Avatar Identity</label>
                      <div className="avatar-selection-grid">
                        {AVATARS.map((avatar) => {
                          const gradientStyle = {
                            background: `linear-gradient(135deg, ${avatar.colors[0]} 0%, ${avatar.colors[1]} 100%)`
                          };
                          return (
                            <button
                              key={avatar.id}
                              type="button"
                              className={`avatar-option-btn ${selectedAvatar === avatar.id ? 'active' : ''}`}
                              style={gradientStyle}
                              onClick={() => setSelectedAvatar(avatar.id)}
                              aria-label={avatar.name}
                              title={avatar.name}
                              disabled={isLoading}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="auth-input-group">
                    <label className="auth-input-label">Password</label>
                    <input 
                      type="password" 
                      className="auth-input-field" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                  </div>

                  <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                    {isLoading ? (
                      <span className="auth-spinner" />
                    ) : (
                      isSignUp ? 'Create Profile & Connect' : 'Authorize Connection'
                    )}
                  </button>

                  <div className="auth-switch-prompt">
                    <span>
                      {isSignUp ? 'Already registered? ' : 'New developer? '}
                    </span>
                    <button 
                      type="button" 
                      className="auth-switch-link"
                      onClick={() => {
                        setIsSignUp(!isSignUp);
                        setError('');
                      }}
                      disabled={isLoading}
                    >
                      {isSignUp ? 'Log In' : 'Sign Up'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="auth-success-screen">
                <div className="auth-success-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="auth-panel-title" style={{ marginTop: '24px' }}>ACCESS GRANTED</h3>
                <p className="auth-panel-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px' }}>
                  Welcome back, {isSignUp ? name.trim() : email.split('@')[0]}
                </p>
                <p className="auth-panel-subtitle" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.3)', marginTop: '8px' }}>
                  Decrypting user credentials & authorization keys...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: CUBES MATRIX GAME PANEL */}
        <div 
          className="auth-right-panel"
          onMouseMove={handleMouseMovePanel}
          onMouseEnter={handleMouseEnterPanel}
          onMouseLeave={handleMouseLeavePanel}
        >
          {/* Holographic Mouse Following Orb */}
          <div 
            className="auth-hover-orb"
            style={{
              left: `${orbPos.x}px`,
              top: `${orbPos.y}px`,
              opacity: isHovered ? 1 : 0
            }}
          />

          <div className="auth-game-container">
            <h4 className="game-title">DEVELOPER AUTHENTICATION GRID</h4>
            <p className="game-subtitle">
              {gameWon 
                ? 'Grid fully decrypted. Secure channel verified!' 
                : `Hover your mouse over the cybernetic cubes to decrypt the access key. (${remainingLetters} cubes remaining)`}
            </p>

            <div className={`cubes-grid-matrix ${gameWon ? 'won-glow' : ''}`}>
              {PHRASE_LETTERS.split('').map((char, index) => {
                return (
                  <div 
                    key={index}
                    className={`cube-container ${revealed[index] ? 'revealed' : ''}`}
                    onMouseEnter={() => handleCubeHover(index)}
                    style={{ 
                      animationDelay: `${index * 0.035}s`,
                      '--cube-idx': index
                    }}
                  >
                    <div className="cube-card">
                      <div className="cube-front">
                        <span className="cube-front-dot" />
                      </div>
                      <div className="cube-back">
                        <span className="cube-letter">{char}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {gameWon && (
              <div className="game-congrats-banner">
                <span className="congrats-pulse" />
                <span>THANK YOU FOR CHOOSING US</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
