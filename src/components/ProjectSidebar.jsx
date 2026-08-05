import React, { useState, useEffect, useRef } from 'react';
import { useAuthStore, AVATARS, getAvatarUri } from '../store/useAuthStore';
import { useLangStore, translations } from '../store/useLangStore';

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

  // Language selectors
  const lang = useLangStore((state) => state.lang);
  const t = translations[lang];

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
      const logs = {
        en: [
          "Initializing QIX Intelligence Engine...",
          "Parsing architectural description notes...",
          "Scanning specifications for core components...",
          `Keywords matched for [${projectType}] node...`,
          "Running deep workload analysis on edge cluster...",
          "Compiling microservices and compute resource cost...",
          "AI Analysis complete! Generating invoice..."
        ],
        ru: [
          "Инициализация интеллектуального движка QIX...",
          "Парсинг примечаний по архитектуре проекта...",
          "Сканирование спецификаций для ключевых компонентов...",
          `Ключевые слова сопоставлены для узла [${projectType}]...`,
          "Глубокий анализ нагрузок на пограничный кластер...",
          "Компиляция стоимости микросервисов и ресурсов...",
          "Анализ завершен! Создание сметы..."
        ],
        uz: [
          "QIX sun'iy intellekt tizimi yuklanmoqda...",
          "Loyiha arxitekturasi tahlil qilinmoqda...",
          "Asosiy komponentlar spetsifikatsiyasi o'rganilmoqda...",
          `[${projectType}] tuguni uchun kalit so'zlar mos keldi...`,
          "Klasterdagi yuklamaning chuqur tahlili boshlandi...",
          "Mikroxizmatlar va resurslar narxi hisoblanmoqda...",
          "Tahlil yakunlandi! Smeta shakllantirilmoqda..."
        ]
      }[lang];
      
      let index = 0;
      const interval = setInterval(() => {
        if (index < logs.length) {
          setAnalysisLogs(prev => [...prev, logs[index]]);
          index++;
        } else {
          clearInterval(interval);
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
  }, [step, projectType, estimatedInvoice, lang]);

  // Simulating secure ledger payment logs
  useEffect(() => {
    if (step === 'processing_payment') {
      setPaymentLogs([]);
      const logs = {
        en: [
          "Connecting to secure payment gateway...",
          "Locating transaction in Humo/Uzcard P2P ledger...",
          "Verifying transfer reference ID with Click/Payme...",
          "Confirming deposit to QIX Technologies vault...",
          "Payment authorized. Transmitting invoice copy...",
          "Initializing Sandbox container deploy context..."
        ],
        ru: [
          "Подключение к шлюзу авторизации платежей...",
          "Поиск транзакции в реестре Humo/Uzcard...",
          "Проверка ID перевода в базе Click/Payme...",
          "Подтверждение зачисления на счет QIX Technologies...",
          "Платеж авторизован. Отправка копии чека...",
          "Инициализация контейнера песочницы..."
        ],
        uz: [
          "To'lov shlyuziga ulanish o'rnatilmoqda...",
          "Tranzaksiyani Humo/Uzcard reestridan izlash...",
          "Click/Payme bazasida o'tkazma ID-sini tekshirish...",
          "QIX Technologies hisobiga pul kelganini tasdiqlash...",
          "To'lov tasdiqlandi. Elektron chekni yuborish...",
          "Loyiha konteyneri ishga tushirilmoqda..."
        ]
      }[lang];

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
  }, [step, lang]);

  // Local fallback estimator if AI API is offline or not configured (UZS pricing)
  const generateFallbackEstimate = (notesText, engineType) => {
    const text = notesText.trim().toLowerCase();
    const tasksList = [];
    let totalPrice = 150000; 

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
      newErrors.name = lang === 'en' ? 'Full name is required' : lang === 'uz' ? 'To\'liq ism kiritilishi shart' : 'Имя обязательно';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = lang === 'en' ? 'Email is required' : lang === 'uz' ? 'Email kiritilishi shart' : 'Email обязателен';
    } else if (!emailRegex.test(email)) {
      newErrors.email = lang === 'en' ? 'Invalid email format' : lang === 'uz' ? 'Email formati noto\'g\'ri' : 'Неверный формат email';
    }

    if (!password) {
      newErrors.password = lang === 'en' ? 'Password is required' : lang === 'uz' ? 'Parol kiritilishi shart' : 'Пароль обязателен';
    } else if (password.length < 6) {
      newErrors.password = lang === 'en' ? 'At least 6 characters' : lang === 'uz' ? 'Kamida 6 ta belgi' : 'Не менее 6 символов';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(2);
    setLoadingMessage(t.connectingAuth);

    setTimeout(() => {
      setLoadingMessage(t.creatingProfile);
    }, 600);

    setTimeout(() => {
      setLoadingMessage(t.syncingAvatar);
    }, 1200);

    setTimeout(() => {
      const avatarObj = AVATARS.find(a => a.id === selectedAvatar) || AVATARS[0];
      const avatarUri = getAvatarUri(avatarObj.colors);
      
      login(email, name.trim(), avatarUri);
      
      setStep(3);
    }, 1800);
  };

  // Handle project submit (moves to AI estimation analysis)
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!projectName.trim()) {
      newErrors.projectName = lang === 'en' ? 'Project name is required' : lang === 'uz' ? 'Loyiha nomi kiritilishi shart' : 'Имя проекта обязательно';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep('ai_analysis');
    setEstimatedInvoice(null);

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
      generateFallbackEstimate(projectNotes, projectType);
    });
  };

  // Handle payment processing submission (UZS P2P Model)
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!senderInfo.trim()) {
      newErrors.senderInfo = lang === 'en' ? 'Enter sender info' : lang === 'uz' ? 'Yuboruvchi ma\'lumotini kiriting' : 'Введите данные отправителя';
    }
    if (!transactionId.trim()) {
      newErrors.transactionId = lang === 'en' ? 'Enter receipt ID' : lang === 'uz' ? 'Chek kodi kiritilishi shart' : 'Введите код чека';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep('processing_payment');

    const invoiceSummaryText = estimatedInvoice.tasks.map(t => `${t.name}: ${t.price}`).join(', ');

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

  const MERCHANT_HUMO = import.meta.env.VITE_MERCHANT_HUMO || '9860 1201 5567 4821';
  const MERCHANT_UZCARD = import.meta.env.VITE_MERCHANT_UZCARD || '8600 1402 7839 9924';
  const activeMerchantCard = paymentMethod === 'humo' ? MERCHANT_HUMO : MERCHANT_UZCARD;

  return (
    <div className={`project-sidebar-overlay ${isOpen ? 'open' : ''}`}>
      <div 
        ref={sidebarRef} 
        className={`project-sidebar ${isOpen ? 'open' : ''}`}
      >
        <button className="project-sidebar-close" onClick={onClose} aria-label="Close sidebar">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="project-sidebar-inner">
          
          {/* STEP 1: AUTH OR PROJECT FORM */}
          {step === 1 && (
            <>
              {!isLoggedIn ? (
                /* 1A. SIGN UP FORM */
                <div className="sidebar-step-container">
                  <div className="sidebar-decor-icon">✦</div>
                  <h3 className="sidebar-title font-instrument">
                    {t.establishIdentity}
                  </h3>
                  <p className="sidebar-subtitle">
                    {t.authSubtitle}
                  </p>

                  <form onSubmit={handleSignUpSubmit} className="sidebar-form">
                    <div className="input-group">
                      <label htmlFor="auth-name">{t.fullName}</label>
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
                      <label htmlFor="auth-email">{t.emailAddr}</label>
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
                      <label>{t.chooseAvatar}</label>
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
                      <label htmlFor="auth-pass">{t.password}</label>
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
                          <span>{t.createAccount}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>{t.createAccount}</span>
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
                    {t.newWorkspace}
                  </h3>
                  <p className="sidebar-subtitle">
                    {t.workspaceSubtitle}
                  </p>

                  <form onSubmit={handleProjectSubmit} className="sidebar-form">
                    <div className="input-group">
                      <label htmlFor="proj-name">{t.workspaceName}</label>
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
                      <label htmlFor="proj-type">{t.envEngine}</label>
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
                      <label htmlFor="proj-notes">{t.projRequirements}</label>
                      <textarea 
                        id="proj-notes" 
                        placeholder={lang === 'en' ? 'Example: I need Figma UI/UX, MongoDB, and deployment pipeline...' : lang === 'uz' ? 'Namuna: Figma UI/UX dizayn, MongoDB va deploy quvuri kerak...' : 'Пример: Нужен дизайн в Figma, база данных MongoDB, и деплой проекта...'} 
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
                          <span>{t.analyzeReqs}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>{t.analyzeReqs}</span>
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
              <h3 className="sidebar-title font-instrument">{t.neuralAssessment}</h3>
              <p className="sidebar-subtitle">{t.radarSubtitle}</p>
              
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
              <h3 className="sidebar-title font-instrument">{t.aiCostBreakdown}</h3>
              <p className="sidebar-subtitle">{t.aiSubtitle}</p>

              <div className="invoice-container">
                <div className="invoice-header-row">
                  <div>
                    <span className="invoice-label">{t.projectTarget}</span>
                    <div className="invoice-val">{projectName}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="invoice-label">{t.timeline}</span>
                    <div className="invoice-val">{estimatedInvoice.timeline}</div>
                  </div>
                </div>

                <div className="invoice-task-list">
                  <span className="invoice-label">{t.itemizedTasks}</span>
                  {estimatedInvoice.tasks.map((task, idx) => (
                    <div key={idx} className="invoice-task-item">
                      <span className="invoice-task-name">{task.name}</span>
                      <span className="invoice-task-price">{task.price}</span>
                    </div>
                  ))}
                </div>

                <div className="invoice-total-row">
                  <div>
                    <span className="invoice-label">{t.invoicedTotal}</span>
                    <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)' }}>{lang === 'en' ? 'Commission 0%' : lang === 'uz' ? 'Komissiya 0%' : 'Комиссия 0%'}</p>
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
                    <span>{t.proceedCheckout}</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span className="btn-slide-item btn-slide-item-hover">
                    <span>{t.proceedCheckout}</span>
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
                {lang === 'en' ? 'Transfer ' : lang === 'uz' ? 'O\'tkazing: ' : 'Переведите '}
                <strong>{estimatedInvoice.totalPrice}</strong>
                {lang === 'en' ? ' to the card below via local mobile banking (Humo/Uzcard) and paste your transaction receipt code.' : lang === 'uz' ? ' quyidagi kartaga va tasdiqlash uchun chek ID-sini kiriting.' : ' на карту ниже через Click/Payme и вставьте код чека для подтверждения.'}
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
                    <div className="card-preview-holder">
                      {lang === 'en' ? 'Recipient' : lang === 'uz' ? 'Qabul qiluvchi' : 'Получатель'}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600' }}>ASHRAF ASKAROV</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="card-preview-holder">
                      {lang === 'en' ? 'Currency' : lang === 'uz' ? 'Valyuta' : 'Валюта'}
                    </div>
                    <div className="card-preview-expiry" style={{ fontSize: '12px', fontWeight: '700' }}>UZS (so'm)</div>
                  </div>
                </div>
              </div>

              {/* P2P VERIFICATION FORM */}
              <form onSubmit={handlePaymentSubmit} className="sidebar-form">
                <div className="input-group">
                  <label htmlFor="p2p-sender">{t.p2pSender}</label>
                  <input 
                    type="text" 
                    id="p2p-sender" 
                    placeholder={lang === 'en' ? '9860 •••• •••• •••• or phone number' : lang === 'uz' ? '9860 •••• •••• •••• yoki telefon' : '9860 •••• •••• •••• или +998...'}
                    value={senderInfo}
                    onChange={(e) => setSenderInfo(e.target.value)}
                    className={errors.senderInfo ? 'input-error' : ''}
                  />
                  {errors.senderInfo && <span className="error-message-text">{errors.senderInfo}</span>}
                </div>

                <div className="input-group">
                  <label htmlFor="p2p-receipt">{t.p2pReceipt}</label>
                  <input 
                    type="text" 
                    id="p2p-receipt" 
                    placeholder={lang === 'en' ? 'Example: 582914839' : lang === 'uz' ? 'Namuna: 582914839' : 'Пример: 582914839'}
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className={errors.transactionId ? 'input-error' : ''}
                  />
                  {errors.transactionId && <span className="error-message-text">{errors.transactionId}</span>}
                </div>

                <button type="submit" className="sidebar-submit-btn" style={{ marginTop: '16px' }}>
                  <span className="btn-content-inner">
                    <span className="btn-slide-item">
                      <span>{t.confirmPayment}</span>
                      <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                    <span className="btn-slide-item btn-slide-item-hover">
                      <span>{t.confirmPayment}</span>
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
              <h3 className="sidebar-title font-instrument">
                {lang === 'en' ? 'Payment Verification' : lang === 'uz' ? 'To\'lovni tekshirish' : 'Проверка платежа'}
              </h3>
              <p className="sidebar-subtitle">
                {lang === 'en' ? 'Verifying your P2P receipt in Click/Payme network registry...' : lang === 'uz' ? 'Tranzaksiyani Click/Payme tarmog\'ida tekshirmoqdamiz...' : 'Проверка P2P транзакции в реестре Click/Payme. Пожалуйста, подождите.'}
              </p>
              
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
              <h4 className="loading-title">
                {lang === 'en' ? 'Establishing Connection' : lang === 'uz' ? 'Ulanish o\'rnatilmoqda' : 'Установка соединения'}
              </h4>
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
                    {t.workspaceActive}
                  </h3>
                  <p className="sidebar-subtitle">
                    {t.receiptEmailed}
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
                        <span>{t.amountPaid}</span>
                        <strong style={{ color: '#22c55e', fontFamily: 'monospace' }}>{estimatedInvoice.totalPrice}</strong>
                      </div>
                      <div className="success-details-row">
                        <span>{t.method}</span>
                        <strong>P2P ({paymentMethod.toUpperCase()})</strong>
                      </div>
                      <div className="success-details-row">
                        <span>{t.status}</span>
                        <strong className="status-badge-active">{t.online}</strong>
                      </div>
                    </div>
                  )}
                  <p className="success-footer-text">
                    {t.successFooter}
                  </p>
                  <button className="sidebar-close-btn" onClick={onClose}>
                    {t.returnHome}
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
                    {t.accessGranted}
                  </h3>
                  <p className="sidebar-subtitle">
                    {lang === 'en' 
                      ? `Developer profile ${name} has been successfully registered.` 
                      : lang === 'uz' 
                      ? `Dasturchi profili ${name} muvaffaqiyatli ro'yxatdan o'tdi.` 
                      : `Профиль разработчика ${name} был успешно зарегистрирован.`
                    }
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
                      <strong className="status-badge-active">{t.authorized}</strong>
                    </div>
                  </div>
                  <p className="success-footer-text" style={{ marginBottom: '24px' }}>
                    {t.authPrompt}
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
                    {t.connectWorkspace}
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
