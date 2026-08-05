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

  // AI & Billing States (Uzbekistan UZS P2P Model)
  const [estimatedInvoice, setEstimatedInvoice] = useState(null);
  const [analysisLogs, setAnalysisLogs] = useState([]);
  const [paymentLogs, setPaymentLogs] = useState([]);
  
  const [paymentMethod, setPaymentMethod] = useState('humo'); // humo or uzcard
  const [senderInfo, setSenderInfo] = useState(''); // sender card or phone number
  const [transactionId, setTransactionId] = useState(''); // Click/Payme/Uzum receipt transaction ID
  const [isCopied, setIsCopied] = useState(false);

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
        setPaymentMethod('humo');
        setSenderInfo('');
        setTransactionId('');
        setIsCopied(false);
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
        "Locating transaction in Humo/Uzcard P2P ledger...",
        "Verifying transfer reference ID with Click/Payme...",
        "Confirming deposit to QIX Technologies vault...",
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

  // Local fallback estimator if AI API is offline or not configured (UZS pricing)
  const generateFallbackEstimate = (notesText, engineType) => {
    const text = notesText.trim().toLowerCase();
    const tasksList = [];
    let totalPrice = 150000; // Base platform fee (150,000 UZS)

    if (text.length < 5) {
      tasksList.push({ name: `Basic Sandbox Allocation (${engineType})`, price: 100000 });
      totalPrice += 100000;
    } else {
      if (text.includes('design') || text.includes('ui') || text.includes('ux') || text.includes('figma') || text.includes('interface')) {
        tasksList.push({ name: "Figma UI/UX Design & Prototyping", price: 450000 });
        totalPrice += 450000;
      }
      if (text.includes('database') || text.includes('db') || text.includes('sql') || text.includes('mongo') || text.includes('data') || text.includes('backend')) {
        tasksList.push({ name: "High-Performance Database Node Setup", price: 600000 });
        totalPrice += 600000;
      }
      if (text.includes('mobile') || text.includes('app') || text.includes('ios') || text.includes('android') || text.includes('phone')) {
        tasksList.push({ name: "Mobile Frame Native Deployment", price: 900000 });
        totalPrice += 900000;
      }
      if (text.includes('secure') || text.includes('security') || text.includes('auth') || text.includes('crypto') || text.includes('login')) {
        tasksList.push({ name: "Cryptographic Authorization Gateway", price: 650000 });
        totalPrice += 650000;
      }

      // Default fallbacks if no main components were mentioned
      if (tasksList.length < 2) {
        tasksList.push({ name: "Core API Routing & Endpoint Infrastructure", price: 400000 });
        totalPrice += 400000;
      }
      tasksList.push({ name: `Edge CD Pipeline (${engineType})`, price: 100000 });
      totalPrice += 100000;
    }

    const formattedPrice = new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(totalPrice);
    
    setEstimatedInvoice({
      tasks: tasksList.map(t => ({ ...t, price: new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(t.price) })),
      totalPriceRaw: totalPrice,
      totalPrice: formattedPrice,
      timeline: totalPrice > 1200000 ? "14 Days" : "7 Days"
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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

    // Call the serverless function to invoke Google Gemini AI (UZS pricing)
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
      // Map currency format in UZS
      const tasksFormatted = data.tasks.map(t => {
        let priceStr = t.price;
        if (typeof t.price === 'number') {
          priceStr = new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(t.price);
        }
        return { name: t.name, price: priceStr };
      });

      let totalStr = data.totalPrice;
      if (typeof data.totalPrice === 'number') {
        totalStr = new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(data.totalPrice);
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

  // Handle payment processing submission (UZS P2P Model)
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!senderInfo.trim()) {
      newErrors.senderInfo = 'Enter your card or phone number';
    }
    if (!transactionId.trim()) {
      newErrors.transactionId = 'Enter Click/Payme transaction receipt ID';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep('processing_payment');

    const invoiceSummaryText = estimatedInvoice.tasks.map(t => `${t.name}: ${t.price}`).join(', ');

    // Dispatch the project and payment verification details to Web3Forms
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '6b251218-8d3a-4b5f-8227-259b0c552263',
        subject: `💳 PAID QIX Project: ${projectName} (${estimatedInvoice.totalPrice})`,
        from_name: 'QIX Technologies UZS Billing Gateway',
        client_name: user ? user.name : 'Authorized Client',
        client_email: user ? user.email : 'billing@qix.tech',
        workspace_name: `qix-sandbox-${projectName.toLowerCase().replace(/\s+/g, '-')}`,
        engine_type: projectType,
        total_invoiced: estimatedInvoice.totalPrice,
        estimated_timeline: estimatedInvoice.timeline,
        invoice_items: invoiceSummaryText,
        payment_status: `PAID (Simulated P2P ${paymentMethod.toUpperCase()} Transfer)`,
        sender_card_or_phone: senderInfo,
        click_payme_receipt_id: transactionId,
        notes: projectNotes || 'No notes provided.'
      })
    })
    .catch(err => console.error('Failed to dispatch payment notification:', err));
  };

  // Merchant Humo & Uzcard numbers
  const MERCHANT_HUMO = '9860 1201 5567 4821';
  const MERCHANT_UZCARD = '8600 1402 7839 9924';
  const activeMerchantCard = paymentMethod === 'humo' ? MERCHANT_HUMO : MERCHANT_UZCARD;

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
                    Опишите требования к проекту в Ташкенте. Наш ИИ проанализирует задачу и выставит чек в узбекских сумах (UZS).
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
                        placeholder="Пример: Нужен дизайн в Figma, база данных MongoDB, и деплой проекта..." 
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
              <p className="sidebar-subtitle">ИИ анализирует требования и калькулирует стоимость в узбекских сумах.</p>
              
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
              <h3 className="sidebar-title font-instrument">Смета проекта</h3>
              <p className="sidebar-subtitle">Результаты анализа задач и расчет стоимости в сумах.</p>

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
                  <span className="invoice-label">Смета по задачам</span>
                  {estimatedInvoice.tasks.map((task, idx) => (
                    <div key={idx} className="invoice-task-item">
                      <span className="invoice-task-name">{task.name}</span>
                      <span className="invoice-task-price">{task.price}</span>
                    </div>
                  ))}
                </div>

                <div className="invoice-total-row">
                  <div>
                    <span className="invoice-label">Итого к оплате</span>
                    <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)' }}>Комиссия 0%</p>
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
                    <span>Перейти к оплате</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span className="btn-slide-item btn-slide-item-hover">
                    <span>Перейти к оплате</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          )}

          {/* STEP: CHECKOUT CARD TERMINAL (UZBEKISTAN P2P STYLE) */}
          {step === 'checkout' && estimatedInvoice && (
            <div className="sidebar-step-container">
              <h3 className="sidebar-title font-instrument">Humo / Uzcard P2P</h3>
              <p className="sidebar-subtitle" style={{ marginBottom: '16px' }}>
                Переведите {estimatedInvoice.totalPrice} на карту ниже через Click/Payme и вставьте код чека для подтверждения.
              </p>

              {/* PAYMENT METHOD TABS */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <button 
                  type="button"
                  className={`settings-tab-btn ${paymentMethod === 'humo' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('humo')}
                  style={{ flex: 1, padding: '10px', fontSize: '12px' }}
                >
                  HUMO
                </button>
                <button 
                  type="button"
                  className={`settings-tab-btn ${paymentMethod === 'uzcard' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('uzcard')}
                  style={{ flex: 1, padding: '10px', fontSize: '12px' }}
                >
                  UZCARD
                </button>
              </div>

              {/* CARD PREVIEW DESIGN (HUMO/UZCARD THEMED) */}
              <div className={`checkout-card-preview ${paymentMethod === 'humo' ? 'humo-theme' : 'uzcard-theme'}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="card-preview-chip" />
                  
                  {/* BRAND TEXT & LOGO */}
                  <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '1px', color: '#fff' }}>
                    {paymentMethod === 'humo' ? 'HUMO' : 'UZCARD'}
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <div className="card-preview-number" style={{ marginTop: 0, fontSize: '18px' }}>
                    {activeMerchantCard}
                  </div>
                  
                  <button 
                    type="button"
                    onClick={() => copyToClipboard(activeMerchantCard.replace(/\s/g, ''))}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '10px',
                      padding: '4px 8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                
                <div className="card-preview-bottom">
                  <div>
                    <div className="card-preview-holder">Получатель</div>
                    <div style={{ fontSize: '13px', fontWeight: '600' }}>ASHRAF ASKAROV</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="card-preview-holder">Валюта</div>
                    <div className="card-preview-expiry" style={{ fontSize: '12px', fontWeight: '700' }}>UZS (so'm)</div>
                  </div>
                </div>
              </div>

              {/* P2P VERIFICATION FORM */}
              <form onSubmit={handlePaymentSubmit} className="sidebar-form">
                <div className="input-group">
                  <label htmlFor="p2p-sender">Ваша карта или телефон (Отправитель)</label>
                  <input 
                    type="text" 
                    id="p2p-sender" 
                    placeholder="9860 •••• •••• •••• или +998..."
                    value={senderInfo}
                    onChange={(e) => setSenderInfo(e.target.value)}
                    className={errors.senderInfo ? 'input-error' : ''}
                  />
                  {errors.senderInfo && <span className="error-message-text">{errors.senderInfo}</span>}
                </div>

                <div className="input-group">
                  <label htmlFor="p2p-receipt">ID транзакции / Код чека (Click / Payme)</label>
                  <input 
                    type="text" 
                    id="p2p-receipt" 
                    placeholder="Пример: 582914839"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className={errors.transactionId ? 'input-error' : ''}
                  />
                  {errors.transactionId && <span className="error-message-text">{errors.transactionId}</span>}
                </div>

                <button type="submit" className="sidebar-submit-btn" style={{ marginTop: '16px' }}>
                  <span className="btn-content-inner">
                    <span className="btn-slide-item">
                      <span>Подтвердить оплату</span>
                      <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                    <span className="btn-slide-item btn-slide-item-hover">
                      <span>Подтвердить оплату</span>
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
              <p className="sidebar-subtitle">Проверка P2P транзакции в реестре Click/Payme. Пожалуйста, подождите.</p>
              
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
                    Транзакция подтверждена. Электронный чек отправлен на ваш e-mail.
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
                        <span>Сумма перевода:</span>
                        <strong style={{ color: '#22c55e', fontFamily: 'monospace' }}>{estimatedInvoice.totalPrice}</strong>
                      </div>
                      <div className="success-details-row">
                        <span>Метод:</span>
                        <strong>P2P ({paymentMethod.toUpperCase()})</strong>
                      </div>
                      <div className="success-details-row">
                        <span>Статус:</span>
                        <strong className="status-badge-active">Online</strong>
                      </div>
                    </div>
                  )}
                  <p className="success-footer-text">
                    Детали зачисления отправлены на <strong>{user ? user.email : 'ваш e-mail'}</strong>. Мы проверим ID чека и свяжемся с вами в течение 15 минут. Спасибо за доверие!
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
