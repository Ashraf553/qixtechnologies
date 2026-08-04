import React, { useState, useEffect, useRef } from 'react';
import { useAuthStore, AVATARS, getAvatarUri } from '../store/useAuthStore';

export default function ProjectSidebar({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Form (Auth or Project), 2: Loading, 3: Success
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0].id);
  const [errors, setErrors] = useState({});
  const [loadingMessage, setLoadingMessage] = useState('');

  // Project state fields (shown when logged in)
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('Cloud Sandbox');
  const [projectNotes, setProjectNotes] = useState('');

  // Auth store selectors
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);

  const sidebarRef = useRef(null);

  // Reset state when opening/closing
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setName('');
        setEmail('');
        setPassword('');
        setSelectedAvatar(AVATARS[0].id);
        setErrors({});
        setProjectName('');
        setProjectType('Cloud Sandbox');
        setProjectNotes('');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle outside click to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        if (e.target.classList.contains('project-sidebar-overlay')) {
          onClose();
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  // Handle sign up submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(2);
    setLoadingMessage('Connecting to secure auth gateway...');

    setTimeout(() => {
      setLoadingMessage('Creating secure developer profile...');
    }, 600);

    setTimeout(() => {
      setLoadingMessage('Syncing custom avatar identity...');
    }, 1200);

    setTimeout(() => {
      const avatarObj = AVATARS.find(a => a.id === selectedAvatar) || AVATARS[0];
      const avatarUri = getAvatarUri(avatarObj.colors);
      
      // Update global auth store
      login(email, name.trim(), avatarUri);
      
      setStep(3);
    }, 1800);
  };

  // Handle project initialization submission
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(2);
    setLoadingMessage('Provisioning secure cloud sandbox...');

    // Asynchronously dispatch the project details to Web3Forms
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '6b251218-8d3a-4b5f-8227-259b0c552263',
        subject: `🚀 New QIX Project Request: ${projectName}`,
        from_name: 'QIX Technologies Gateway',
        client_name: user ? user.name : 'Authorized Client',
        client_email: user ? user.email : 'Authorized Email',
        workspace_name: `qix-sandbox-${projectName.toLowerCase().replace(/\s+/g, '-')}`,
        engine_type: projectType,
        notes: projectNotes || 'No description notes provided.'
      })
    })
    .catch(err => console.error('Failed to dispatch project notification:', err));

    setTimeout(() => {
      setLoadingMessage(`Deploying cluster context: sandbox-${projectName.toLowerCase().replace(/\s+/g, '-')}`);
    }, 700);

    setTimeout(() => {
      setLoadingMessage('Registering project details with lead architect...');
    }, 1400);

    setTimeout(() => {
      setStep(3);
    }, 2100);
  };

  return (
    <div className={`project-sidebar-overlay ${isOpen ? 'open' : ''}`}>
      <div 
        ref={sidebarRef} 
        className={`project-sidebar ${isOpen ? 'open' : ''}`}
      >
        {/* Close button */}
        <button className="project-sidebar-close" onClick={onClose} aria-label="Close sidebar">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* SIDEBAR MAIN CONTENT */}
        <div className="project-sidebar-inner">
          
          {/* STEP 1: AUTH OR PROJECT FORM */}
          {step === 1 && (
            <>
              {!isLoggedIn ? (
                /* 1A. SIGN UP FORM */
                <div className="sidebar-step-container">
                  <div className="sidebar-decor-icon">✦</div>
                  <h3 className="sidebar-title font-instrument">
                    Establish Identity
                  </h3>
                  <p className="sidebar-subtitle">
                    Create your developer profile and choose an avatar to authorize secure connections.
                  </p>

                  <form onSubmit={handleSignUpSubmit} className="sidebar-form">
                    <div className="input-group">
                      <label htmlFor="auth-name">Full Name</label>
                      <input 
                        type="text" 
                        id="auth-name" 
                        placeholder="Alex Rivera" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && <span className="error-message-text">{errors.name}</span>}
                    </div>

                    <div className="input-group">
                      <label htmlFor="auth-email">Email Address</label>
                      <input 
                        type="email" 
                        id="auth-email" 
                        placeholder="alex@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && <span className="error-message-text">{errors.email}</span>}
                    </div>

                    {/* AVATAR SELECTOR GRID */}
                    <div className="input-group">
                      <label>Choose Avatar Identity</label>
                      <div className="avatar-selection-grid" style={{ marginTop: '8px', marginBottom: '8px' }}>
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
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="auth-pass">Password</label>
                      <input 
                        type="password" 
                        id="auth-pass" 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? 'input-error' : ''}
                      />
                      {errors.password && <span className="error-message-text">{errors.password}</span>}
                    </div>

                    <button type="submit" className="sidebar-submit-btn">
                      <span className="btn-content-inner">
                        <span className="btn-slide-item">
                          <span>Create Account</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>Create Account</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </form>
                </div>
              ) : (
                /* 1B. INITIALIZE PROJECT FORM */
                <div className="sidebar-step-container">
                  <div className="sidebar-profile-header">
                    <img className="sidebar-profile-avatar" src={user.avatar} alt={user.name} />
                    <div>
                      <h4 className="sidebar-profile-name">{user.name}</h4>
                      <p className="sidebar-profile-email">{user.email}</p>
                    </div>
                  </div>
                  
                  <h3 className="sidebar-title font-instrument" style={{ marginTop: '20px' }}>
                    New Workspace
                  </h3>
                  <p className="sidebar-subtitle">
                    Configure and launch a new sandbox environment associated with your developer profile.
                  </p>

                  <form onSubmit={handleProjectSubmit} className="sidebar-form">
                    <div className="input-group">
                      <label htmlFor="proj-name">Workspace Name</label>
                      <input 
                        type="text" 
                        id="proj-name" 
                        placeholder="my-quantum-engine" 
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className={errors.projectName ? 'input-error' : ''}
                      />
                      {errors.projectName && <span className="error-message-text">{errors.projectName}</span>}
                    </div>

                    <div className="input-group">
                      <label htmlFor="proj-type">Environment Engine</label>
                      <select 
                        id="proj-type" 
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '14px 18px',
                          color: '#fff',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                          width: '100%',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Cloud Sandbox" style={{ background: '#0a0a0f' }}>Cloud Sandbox (General)</option>
                        <option value="Quantum Engine" style={{ background: '#0a0a0f' }}>Quantum Simulator Node</option>
                        <option value="AI Synthesis Node" style={{ background: '#0a0a0f' }}>AI LLM Training Kernel</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label htmlFor="proj-notes">Deployment Notes</label>
                      <textarea 
                        id="proj-notes" 
                        placeholder="Briefly outline your architectural goals..." 
                        rows="3"
                        value={projectNotes}
                        onChange={(e) => setProjectNotes(e.target.value)}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '14px 18px',
                          color: '#fff',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                          width: '100%',
                          outline: 'none',
                          resize: 'none'
                        }}
                      />
                    </div>

                    <button type="submit" className="sidebar-submit-btn" style={{ marginTop: '16px' }}>
                      <span className="btn-content-inner">
                        <span className="btn-slide-item">
                          <span>Launch Sandbox</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>Launch Sandbox</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </form>
                </div>
              )}
            </>
          )}

          {/* STEP 2: LOADING */}
          {step === 2 && (
            <div className="sidebar-step-container sidebar-loading-container">
              <div className="loading-spinner-wrap">
                <div className="pulse-loader-ring" />
                <div className="pulse-loader-core" />
              </div>
              <h4 className="loading-title">Establishing Connection</h4>
              <p className="loading-subtitle">{loadingMessage}</p>
            </div>
          )}

          {/* STEP 3: SUCCESS (Auth or Project) */}
          {step === 3 && (
            <>
              {projectName ? (
                /* 3A. PROJECT SUCCESS */
                <div className="sidebar-step-container sidebar-success-container">
                  <div className="success-icon-wrap">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="sidebar-title font-instrument" style={{ marginTop: '24px' }}>
                    Project Initialized!
                  </h3>
                  <p className="sidebar-subtitle">
                    Your sandbox environment has been successfully provisioned and is online.
                  </p>
                  <div className="success-details-card">
                    <div className="success-details-row">
                      <span>Workspace:</span>
                      <strong>qix-sandbox-{projectName.toLowerCase().replace(/\s+/g, '-')}</strong>
                    </div>
                    <div className="success-details-row">
                      <span>Engine:</span>
                      <strong>{projectType}</strong>
                    </div>
                    <div className="success-details-row">
                      <span>Status:</span>
                      <strong className="status-badge-active">Active</strong>
                    </div>
                  </div>
                  <p className="success-footer-text">
                    Our lead software architect will contact you within 30 minutes to schedule your technical consultation. Thank you for your trust!
                  </p>
                  <button className="sidebar-close-btn" onClick={onClose}>
                    Close Panel
                  </button>
                </div>
              ) : (
                /* 3B. SIGN UP SUCCESS */
                <div className="sidebar-step-container sidebar-success-container">
                  <div className="success-icon-wrap">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="sidebar-title font-instrument" style={{ marginTop: '24px' }}>
                    Access Granted!
                  </h3>
                  <p className="sidebar-subtitle">
                    Developer profile <strong>{name}</strong> has been successfully authorized and registered locally.
                  </p>
                  <div className="success-details-card">
                    <div className="success-details-row" style={{ alignItems: 'center' }}>
                      <span>Identity:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img className="sidebar-profile-avatar" src={getAvatarUri(AVATARS.find(a => a.id === selectedAvatar)?.colors || AVATARS[0].colors)} alt={name} style={{ width: '24px', height: '24px', margin: 0 }} />
                        <strong>{name}</strong>
                      </div>
                    </div>
                    <div className="success-details-row">
                      <span>Access:</span>
                      <strong className="status-badge-active">Authorized</strong>
                    </div>
                  </div>
                  <p className="success-footer-text" style={{ marginBottom: '24px' }}>
                    You can now proceed to initialize your first project workspace.
                  </p>
                  <button 
                    className="sidebar-close-btn" 
                    onClick={() => {
                      setStep(1); // Return to step 1 (which will now display the Project Form because user is logged in!)
                      setErrors({});
                    }}
                    style={{
                      background: '#fff',
                      color: '#0a0a0f',
                      border: 'none'
                    }}
                  >
                    Proceed to Workspace
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
