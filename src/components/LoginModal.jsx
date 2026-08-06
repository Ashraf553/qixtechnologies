import React, { useState, useEffect } from 'react';
import { useAuthStore, AVATARS, getAvatarUri } from '../store/useAuthStore';
import { useLangStore, translations } from '../store/useLangStore';

const PHRASE_LETTERS = "THANKYOUFORCHOOSINGUS";
const TOTAL_LETTERS = PHRASE_LETTERS.length; // 21 letters

export default function LoginModal({ isOpen, onClose, isRequiredNotice }) {
  const login = useAuthStore((state) => state.login);
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].id);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [socialProvider, setSocialProvider] = useState(null);

  // Cubes grid state (21 letters)
  const [revealed, setRevealed] = useState(Array(TOTAL_LETTERS).fill(false));
  const [gameWon, setGameWon] = useState(false);

  // Interactive mouse tracking positions for 3D tilt & glowing orb
  const [orbPos, setOrbPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // Language selectors
  const lang = useLangStore((state) => state.lang);
  const t = translations[lang];

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
      setSocialProvider(null);
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
      setError(lang === 'en' ? 'Please enter your name.' : lang === 'uz' ? 'Ismingizni kiriting.' : 'Пожалуйста, введите имя.');
      return;
    }
    if (!email || !password) {
      setError(lang === 'en' ? 'Please fill in all fields.' : lang === 'uz' ? 'Barcha maydonlarni to\'ldiring.' : 'Пожалуйста, заполните все поля.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(lang === 'en' ? 'Please enter a valid email.' : lang === 'uz' ? 'Email noto\'g\'ri.' : 'Введите корректный email.');
      return;
    }
    if (password.length < 5) {
      setError(lang === 'en' ? 'Password must be at least 5 characters.' : lang === 'uz' ? 'Parol kamida 5 ta belgi bo\'lishi shart.' : 'Пароль должен содержать не менее 5 символов.');
      return;
    }

    setIsLoading(true);

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

  const handleSocialLogin = (provider) => {
    if (provider === 'Google') {
      setIsGoogleChooserOpen(true);
    } else if (provider === 'Apple') {
      setIsAppleChooserOpen(true);
    }
  };

  const selectGoogleAccount = (name, email, colors) => {
    setIsGoogleChooserOpen(false);
    setIsLoading(true);
    setSocialProvider('Google');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      const avatarUri = getAvatarUri(colors);
      
      setTimeout(() => {
        login(email, name, avatarUri);
        setSuccess(false);
        setSocialProvider(null);
        onClose();
      }, 1200);
    }, 1200);
  };

  const selectAppleAccount = (name, email) => {
    setIsAppleChooserOpen(false);
    setIsLoading(true);
    setSocialProvider('Apple');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      const colors = ['#000000', '#444444'];
      const avatarUri = getAvatarUri(colors);
      
      setTimeout(() => {
        login(email, name, avatarUri);
        setSuccess(false);
        setSocialProvider(null);
        onClose();
      }, 1200);
    }, 1200);
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
                  {isRequiredNotice && (
                    <div className="premium-auth-notice" style={{ marginTop: 0, marginBottom: '20px' }}>
                      <div className="notice-glow-ring" />
                      <div className="notice-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 15v2m0-8V7m0 11a1 1 0 100-2 1 1 0 000 2zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="notice-text">
                        <span className="notice-tag">
                          {lang === 'en' ? 'Authorization Required' : lang === 'uz' ? 'Avtorizatsiya Zarur' : 'Требуется авторизация'}
                        </span>
                        <p className="notice-description" style={{ fontSize: '12px' }}>
                          {lang === 'en' 
                            ? 'To configure a new workspace and start your project, please register or log in first.' 
                            : lang === 'uz' 
                            ? 'Yangi loyihani boshlash uchun avval tizimga kiring yoki ro\'yxatdan o\'ting.' 
                            : 'Чтобы создать проект, пожалуйста, сначала войдите или зарегистрируйтесь.'}
                        </p>
                      </div>
                    </div>
                  )}

                  <span className="auth-decor-bullet">✦</span>
                  <h3 className="auth-panel-title">
                    {isSignUp ? t.createAccount.toUpperCase() : (lang === 'en' ? 'ESTABLISH SESSION' : lang === 'uz' ? 'TIZIMGA KIRISH' : 'УСТАНОВИТЬ СЕССИЮ')}
                  </h3>
                  <p className="auth-panel-subtitle">
                    {isSignUp 
                      ? (lang === 'en' ? 'Register your developer identity to access QIX nodes.' : lang === 'uz' ? 'QIX tugunlariga kirish uchun dasturchi profilingizni yarating.' : 'Зарегистрируйте профиль разработчика для доступа к узлам QIX.')
                      : (lang === 'en' ? 'Connect with your credentials to resume your session.' : lang === 'uz' ? 'Sessiyangizni tiklash uchun hisob ma\'lumotlaringizni kiriting.' : 'Войдите под своими учетными данными, чтобы возобновить сессию.')}
                  </p>
                </div>

                <div className="auth-social-buttons-wrapper">
                  <div className="auth-social-buttons">
                    <button 
                      type="button" 
                      className="social-btn google-btn" 
                      onClick={handleOfficialGoogleLogin}
                      disabled={isLoading}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="#EA4335" d="M12 5.04c1.67 0 3.2.58 4.38 1.71l3.27-3.27C17.68 1.54 15.02 1 12 1 7.24 1 3.2 3.73 1.25 7.72l3.85 2.99C6.03 7.42 8.78 5.04 12 5.04z" />
                        <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.45h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.69 2.87c2.16-2 3.74-4.94 3.74-8.56z" />
                        <path fill="#FBBC05" d="M5.1 14.71a6.99 6.99 0 010-4.42L1.25 7.3a11.97 11.97 0 000 9.4l3.85-2.99z" />
                        <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.92l-3.69-2.87c-1.1.74-2.52 1.18-4.27 1.18-3.22 0-5.97-2.38-6.9-5.67l-3.85 2.99C3.2 20.27 7.24 23 12 23z" />
                      </svg>
                      Google
                    </button>
                    <button 
                      type="button" 
                      className="social-btn apple-btn" 
                      onClick={handleOfficialAppleLogin}
                      disabled={isLoading}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.27-.56 2.98-1.43z" />
                      </svg>
                      Apple
                    </button>
                  </div>
                  <div className="auth-social-divider">
                    <span>{lang === 'en' ? 'or' : lang === 'uz' ? 'yoki' : 'или'}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="auth-panel-form">
                  {error && <div className="auth-panel-error">{error}</div>}
                  
                  {isSignUp && (
                    <div className="auth-input-group">
                      <label className="auth-input-label">{t.fullName}</label>
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
                    <label className="auth-input-label">{t.emailAddr}</label>
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
                      <label className="auth-input-label">{t.chooseAvatar}</label>
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
                    <label className="auth-input-label">{t.password}</label>
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
                      isSignUp 
                        ? (lang === 'en' ? 'Create Profile & Connect' : lang === 'uz' ? 'Profil yaratish va ulanish' : 'Создать профиль и подключиться') 
                        : (lang === 'en' ? 'Authorize Connection' : lang === 'uz' ? 'Ulanishni tasdiqlash' : 'Авторизовать подключение')
                    )}
                  </button>

                  <div className="auth-switch-prompt">
                    <span>
                      {isSignUp 
                        ? (lang === 'en' ? 'Already registered? ' : lang === 'uz' ? 'Ro\'yxatdan o\'tganmisiz? ' : 'Уже зарегистрированы? ') 
                        : (lang === 'en' ? 'New developer? ' : lang === 'uz' ? 'Yangi dasturchimisiz? ' : 'Новый разработчик? ')}
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
                      {isSignUp ? t.login : (lang === 'en' ? 'Sign Up' : lang === 'uz' ? 'Ro\'yxatdan o\'tish' : 'Регистрация')}
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
                <h3 className="auth-panel-title" style={{ marginTop: '24px' }}>{t.accessGranted}</h3>
                <p className="auth-panel-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px' }}>
                  {lang === 'en' ? 'Welcome' : lang === 'uz' ? 'Xush kelibsiz' : 'Добро пожаловать'}, {socialProvider ? `${socialProvider} Developer` : (isSignUp ? name.trim() : email.split('@')[0])}
                </p>
                <p className="auth-panel-subtitle" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.3)', marginTop: '8px' }}>
                  {socialProvider 
                    ? (lang === 'en' ? `Connecting securely via ${socialProvider} ID...` : lang === 'uz' ? `${socialProvider} ID orqali xavfsiz ulanmoqda...` : `Безопасное подключение через ${socialProvider} ID...`)
                    : (lang === 'en' ? 'Decrypting user credentials & authorization keys...' : lang === 'uz' ? 'Foydalanuvchi ma\'lumotlari va avtorizatsiya kalitlari ochilmoqda...' : 'Дешифрование данных пользователя и ключей авторизации...')}
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
            <h4 className="game-title">
              {lang === 'en' ? 'DEVELOPER AUTHENTICATION GRID' : lang === 'uz' ? 'DASTURCHI AVTORIZATSIYA TO\'RI' : 'СЕТКА АВТОРИЗАЦИИ РАЗРАБОТЧИКА'}
            </h4>
            <p className="game-subtitle">
              {gameWon 
                ? (lang === 'en' ? 'Grid fully decrypted. Secure channel verified!' : lang === 'uz' ? 'Tarmoq to\'liq ochildi. Xavfsiz kanal tasdiqlandi!' : 'Сетка успешно расшифрована. Безопасный канал подтвержден!') 
                : (lang === 'en' ? `Hover your mouse over the cybernetic cubes to decrypt the access key. (${remainingLetters} cubes remaining)` : lang === 'uz' ? `Kirish kalitini ochish uchun kiber kubiklar ustiga kursorni olib boring. (${remainingLetters} ta kubik qoldi)` : `Наведите курсор на кибернетические кубы, чтобы расшифровать ключ доступа. (Осталось кубов: ${remainingLetters})`)}
            </p>

            <div className={`cubes-grid-matrix ${gameWon ? 'won-glow' : ''}`}>
              {PHRASE_LETTERS.split('').map((char, index) => {
                return (
                  <div 
                    key={index}
                    className={`cube-container ${revealed[index] ? 'revealed' : ''}`}
                    onMouseEnter={() => handleCubeHover(index)}
                    onTouchStart={() => handleCubeHover(index)}
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
