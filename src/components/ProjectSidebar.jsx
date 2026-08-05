import React, { useState, useEffect, useRef } from 'react';
import { useAuthStore, AVATARS, getAvatarUri } from '../store/useAuthStore';

export default function ProjectSidebar({ isOpen, onClose }) {
  const [step, setStep] = useState(1); 
  // steps: 1 (Form), 'ai_analysis' (scanning), 'invoice' (bill details), 'checkout' (card form), 'processing_payment' (paying), 2 (auth loading), 3 (success)
  
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

  // AI & Billing States
  const [estimatedInvoice, setEstimatedInvoice] = useState(null);
  const [analysisLogs, setAnalysisLogs] = useState([]);
  const [paymentLogs, setPaymentLogs] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardName, setCardName] = useState('');

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
        setEstimatedInvoice(null);
        setAnalysisLogs([]);
        setPaymentLogs([]);
        setCardNumber('');
        setCardExpiry('');
        setCardCvc('');
        setCardName('');
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

  // Simulating AI analysis logs
  useEffect(() => {
    if (step === 'ai_analysis') {
      setAnalysisLogs([]);
      const logs = [
        "Initializing QIX Intelligence Engine...",
        "Parsing architectural description notes...",
        "Scanning specifications for core components...",
        `Keywords matched for [${projectType}] node...`,
        "Running deep workload analysis on edge cluster...",
        "Compiling microservices and compute resource cost...",
        "AI Analysis complete! Generating invoice..."
      ];
      
      let index = 0;
      const interval = setInterval(() => {
        if (index < logs.length) {
          setAnalysisLogs(prev => [...prev, logs[index]]);
          index++;
        } else {
          clearInterval(interval);
          // Wait for the invoice data to be available (fetched from Gemini AI API) before proceeding
          const checkInvoiceInterval = setInterval(() => {
            if (estimatedInvoice) {
              clearInterval(checkInvoiceInterval);
              setStep('invoice');
            }
          }, 100);
        }
      }, 600);
      
      return () => clearInterval(interval);
    }
  }, [step, projectType, estimatedInvoice]);

  // Simulating secure ledger payment logs
  useEffect(() => {
    if (step === 'processing_payment') {
      setPaymentLogs([]);
      const logs = [
        "Connecting to secure payment gateway...",
        "Encrypting card credentials via SSL node...",
        "Verifying transaction validation token...",
        "Simulating secure ledger gas transfer...",
        "Disbursing funds to QIX contract vault...",
        "Payment authorized. Transmitting invoice copy...",
        "Initializing Sandbox container deploy context..."
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < logs.length) {
          setPaymentLogs(prev => [...prev, logs[index]]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setStep(3);
          }, 600);
        }
      }, 600);

      return () => clearInterval(interval);
    }
  }, [step]);

  // Local fallback estimator if AI API is offline or not configured
  const generateFallbackEstimate = (notesText, engineType) => {
    const text = notesText.trim().toLowerCase();
    const tasksList = [];
    let totalPrice = 12; // Base platform fee

    if (text.length < 5) {
      tasksList.push({ name: `Basic Sandbox Allocation (${engineType})`, price: 8 });
      totalPrice += 8;
    } else {
      if (text.includes('design') || text.includes('ui') || text.includes('ux') || text.includes('figma') || text.includes('interface')) {
        tasksList.push({ name: "Figma UI/UX Design & Prototyping", price: 35 });
        totalPrice += 35;
      }
      if (text.includes('database') || text.includes('db') || text.includes('sql') || text.includes('mongo') || text.includes('data') || text.includes('backend')) {
        tasksList.push({ name: "High-Performance Database Node Setup", price: 45 });
        totalPrice += 45;
      }
      if (text.includes('mobile') || text.includes('app') || text.includes('ios') || text.includes('android') || text.includes('phone')) {
        tasksList.push({ name: "Mobile Frame Native Deployment", price: 70 });
        totalPrice += 70;
      }
      if (text.includes('secure') || text.includes('security') || text.includes('auth') || text.includes('crypto') || text.includes('login')) {
        tasksList.push({ name: "Cryptographic Authorization Gateway", price: 50 });
        totalPrice += 50;
      }

      // Default fallbacks if no main components were mentioned
      if (tasksList.length < 2) {
        tasksList.push({ name: "Core API Routing & Endpoint Infrastructure", price: 30 });
        totalPrice += 30;
      }
      tasksList.push({ name: `Edge CD Pipeline (${engineType})`, price: 8 });
      totalPrice += 8;
    }

    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice);
    
    setEstimatedInvoice({
      tasks: tasksList.map(t => ({ ...t, price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(t.price) })),
      totalPriceRaw: totalPrice,
      totalPrice: formattedPrice,
      timeline: totalPrice > 120 ? "14 Days" : "7 Days"
    });
  };

  // Card input helpers
  const handleCardNumberChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').substring(0, 16);
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    setCardNumber(parts.length > 0 ? parts.join(' ') : val);
  };

  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2);
    }
    setCardExpiry(val);
  };

  const handleCvcChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').substring(0, 3);
    setCardCvc(val);
  };

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

  // Handle project submit (moves to AI estimation analysis)
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
    setStep('ai_analysis');
    setEstimatedInvoice(null);

    // Call the serverless function to invoke Google Gemini AI
    fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectName,
        projectType,
        projectNotes
      })
    })
    .then(res => res.json())
    .then(data => {
      // Map currency format if not already mapped
      const tasksFormatted = data.tasks.map(t => {
        let priceStr = t.price;
        if (typeof t.price === 'number') {
          priceStr = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(t.price);
        }
        return { name: t.name, price: priceStr };
      });

      let totalStr = data.totalPrice;
      if (typeof data.totalPrice === 'number') {
        totalStr = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.totalPrice);
      }

      setEstimatedInvoice({
        tasks: tasksFormatted,
        totalPriceRaw: typeof data.totalPrice === 'number' ? data.totalPrice : parseFloat(String(data.totalPrice).replace(/[^0-9.]/g, '')),
        totalPrice: totalStr,
        timeline: data.timeline || "7 Days"
      });
    })
    .catch(err => {
      console.error("AI Analysis API failed, using fallback:", err);
      // Fallback local estimation
      generateFallbackEstimate(projectNotes, projectType);
    });
  };

  // Handle payment processing submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const cleanCard = cardNumber.replace(/\s/g, '');
    if (cleanCard.length < 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (cardExpiry.length < 5) {
      newErrors.cardExpiry = 'Expiry must be MM/YY';
    }
    if (cardCvc.length < 3) {
      newErrors.cardCvc = 'CVC must be 3 digits';
    }
    if (!cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep('processing_payment');

    const invoiceSummaryText = estimatedInvoice.tasks.map(t => `${t.name}: ${t.price}`).join(', ');

    // Asynchronously dispatch the project details to Web3Forms
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '6b251218-8d3a-4b5f-8227-259b0c552263',
        subject: `💳 PAID QIX Project: ${projectName} (${estimatedInvoice.totalPrice})`,
        from_name: 'QIX Technologies Billing Gateway',
        client_name: user ? user.name : cardName,
        client_email: user ? user.email : 'billing@qix.tech',
        workspace_name: `qix-sandbox-${projectName.toLowerCase().replace(/\s+/g, '-')}`,
        engine_type: projectType,
        total_invoiced: estimatedInvoice.totalPrice,
        estimated_timeline: estimatedInvoice.timeline,
        invoice_items: invoiceSummaryText,
        payment_status: 'PAID (Simulated Neural Transaction Completed)',
        cardholder_name: cardName,
        notes: projectNotes || 'No notes provided.'
      })
    })
    .catch(err => console.error('Failed to dispatch payment notification:', err));
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
                    Outline the requirements and specify features for your sandbox project. Our AI will analyze your specifications and generate an estimate.
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
                      <label htmlFor="proj-notes">Project Requirements (AI Analysis)</label>
                      <textarea 
                        id="proj-notes" 
                        placeholder="Ex: Need UI design, figma layout, MongoDB database cluster, and email authorization..." 
                        rows="4"
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
                          <span>Analyze Requirements</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>Analyze Requirements</span>
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

          {/* STEP: AI ANALYSIS RADAR */}
          {step === 'ai_analysis' && (
            <div className="sidebar-step-container">
              <h3 className="sidebar-title font-instrument">Neural Assessment</h3>
              <p className="sidebar-subtitle">Our neural interpreter is analyzing requirements and estimating resources.</p>
              
              <div className="ai-analysis-radar">
                <div className="radar-ring" />
                <div className="radar-sweep" />
                <div className="radar-core" />
              </div>

              <div className="analysis-log-container">
                {analysisLogs.map((log, idx) => (
                  <div key={idx} className="analysis-log-line">
                    <span style={{ color: '#a855f7', marginRight: '6px' }}>&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP: INVOICE GENERATED */}
          {step === 'invoice' && estimatedInvoice && (
            <div className="sidebar-step-container">
              <h3 className="sidebar-title font-instrument">AI Cost Breakdown</h3>
              <p className="sidebar-subtitle">Based on your requirements, the AI has compiled the following invoice quote.</p>

              <div className="invoice-container">
                <div className="invoice-header-row">
                  <div>
                    <span className="invoice-label">Project Target</span>
                    <div className="invoice-val">{projectName}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="invoice-label">Timeline</span>
                    <div className="invoice-val">{estimatedInvoice.timeline}</div>
                  </div>
                </div>

                <div className="invoice-task-list">
                  <span className="invoice-label">Itemized Tasks</span>
                  {estimatedInvoice.tasks.map((task, idx) => (
                    <div key={idx} className="invoice-task-item">
                      <span className="invoice-task-name">{task.name}</span>
                      <span className="invoice-task-price">{task.price}</span>
                    </div>
                  ))}
                </div>

                <div className="invoice-total-row">
                  <div>
                    <span className="invoice-label">Invoiced Total</span>
                    <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>Tax & fees included</p>
                  </div>
                  <div className="invoice-total-price">{estimatedInvoice.totalPrice}</div>
                </div>
              </div>

              <button 
                className="sidebar-submit-btn" 
                onClick={() => setStep('checkout')}
              >
                <span className="btn-content-inner">
                  <span className="btn-slide-item">
                    <span>Proceed to Checkout</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span className="btn-slide-item btn-slide-item-hover">
                    <span>Proceed to Checkout</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          )}

          {/* STEP: CHECKOUT CARD TERMINAL */}
          {step === 'checkout' && estimatedInvoice && (
            <div className="sidebar-step-container">
              <h3 className="sidebar-title font-instrument">Secure Checkout</h3>
              <p className="sidebar-subtitle">Submit card details to complete payment and deploy workspace sandbox.</p>

              {/* CARD PREVIEW DESIGN */}
              <div className="checkout-card-preview">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="card-preview-chip" />
                  <span style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.7, fontWeight: '700' }}>QIX TRANSACT</span>
                </div>
                <div className="card-preview-number">
                  {cardNumber || '•••• •••• •••• ••••'}
                </div>
                <div className="card-preview-bottom">
                  <div>
                    <div className="card-preview-holder">CARDHOLDER</div>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>{cardName || 'YOUR FULL NAME'}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="card-preview-holder">EXPIRES</div>
                    <div className="card-preview-expiry">{cardExpiry || 'MM/YY'}</div>
                  </div>
                </div>
              </div>

              {/* CARD FORM */}
              <form onSubmit={handlePaymentSubmit} className="sidebar-form">
                <div className="input-group">
                  <label htmlFor="card-owner">Cardholder Name</label>
                  <input 
                    type="text" 
                    id="card-owner" 
                    placeholder="Alex Rivera"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value.toUpperCase())}
                    className={errors.cardName ? 'input-error' : ''}
                  />
                  {errors.cardName && <span className="error-message-text">{errors.cardName}</span>}
                </div>

                <div className="input-group">
                  <label htmlFor="card-num">Card Number</label>
                  <input 
                    type="text" 
                    id="card-num" 
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    className={errors.cardNumber ? 'input-error' : ''}
                  />
                  {errors.cardNumber && <span className="error-message-text">{errors.cardNumber}</span>}
                </div>

                <div className="checkout-inputs-row">
                  <div className="input-group">
                    <label htmlFor="card-exp">Expiry</label>
                    <input 
                      type="text" 
                      id="card-exp" 
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      className={errors.cardExpiry ? 'input-error' : ''}
                    />
                    {errors.cardExpiry && <span className="error-message-text">{errors.cardExpiry}</span>}
                  </div>

                  <div className="input-group">
                    <label htmlFor="card-sec">CVC</label>
                    <input 
                      type="password" 
                      id="card-sec" 
                      placeholder="•••"
                      value={cardCvc}
                      onChange={handleCvcChange}
                      className={errors.cardCvc ? 'input-error' : ''}
                    />
                    {errors.cardCvc && <span className="error-message-text">{errors.cardCvc}</span>}
                  </div>
                </div>

                <button type="submit" className="sidebar-submit-btn" style={{ marginTop: '16px' }}>
                  <span className="btn-content-inner">
                    <span className="btn-slide-item">
                      <span>Authorize {estimatedInvoice.totalPrice}</span>
                      <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                    <span className="btn-slide-item btn-slide-item-hover">
                      <span>Authorize {estimatedInvoice.totalPrice}</span>
                      <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  </span>
                </button>
              </form>
            </div>
          )}

          {/* STEP: PROCESSING PAYMENT */}
          {step === 'processing_payment' && (
            <div className="sidebar-step-container">
              <h3 className="sidebar-title font-instrument">Payment Transfer</h3>
              <p className="sidebar-subtitle">Securing ledger credentials. Please do not close this panel.</p>
              
              <div className="sidebar-loading-container" style={{ margin: '16px 0 32px' }}>
                <div className="loading-spinner-wrap">
                  <div className="pulse-loader-ring" style={{ borderColor: 'rgba(168, 85, 247, 0.4) transparent' }} />
                  <div className="pulse-loader-core" style={{ background: '#a855f7' }} />
                </div>
              </div>

              <div className="analysis-log-container" style={{ color: '#22c55e' }}>
                {paymentLogs.map((log, idx) => (
                  <div key={idx} className="analysis-log-line">
                    <span style={{ color: '#22c55e', marginRight: '6px' }}>✓</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: REGISTER AUTH LOADING */}
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
                /* 3A. PROJECT SUCCESS & PURCHASE RECEIPT */
                <div className="sidebar-step-container sidebar-success-container">
                  <div className="success-icon-wrap">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="sidebar-title font-instrument" style={{ marginTop: '24px' }}>
                    Workspace Active!
                  </h3>
                  <p className="sidebar-subtitle">
                    Deployment completed. A billing copy of your receipt has been dispatched to your email.
                  </p>
                  
                  {estimatedInvoice && (
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
                        <span>Amount Paid:</span>
                        <strong style={{ color: '#22c55e', fontFamily: 'monospace' }}>{estimatedInvoice.totalPrice}</strong>
                      </div>
                      <div className="success-details-row">
                        <span>Status:</span>
                        <strong className="status-badge-active">Online</strong>
                      </div>
                    </div>
                  )}
                  <p className="success-footer-text">
                    An confirmation mail with details is sent to <strong>{user ? user.email : 'your developer profile'}</strong>. Our engineering lead will review your sandbox parameters and establish connection shortly.
                  </p>
                  <button className="sidebar-close-btn" onClick={onClose}>
                    Return to Home
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
                      setStep(1); 
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
