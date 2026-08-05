import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import InteractiveDots from './components/InteractiveDots';
import ProjectSidebar from './components/ProjectSidebar';
import ResearchCanvas from './components/ResearchCanvas';
import NumbersCanvas from './components/NumbersCanvas';
import SettingsPanel from './components/SettingsPanel';
import LoginModal from './components/LoginModal';
import Magnetic from './components/Magnetic';
import { useAuthStore } from './store/useAuthStore';
import { useLangStore, translations } from './store/useLangStore';

// React component to handle smooth counting animations when scrolled into viewport
function CountingNumber({ count, suffix }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;
        const start = performance.now();
        
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease out
          setCurrent(Math.floor(eased * count));
          
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count]);
  
  return <span ref={ref}>{current}{suffix}</span>;
}

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProjectSidebarOpen, setIsProjectSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFormation, setActiveFormation] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  // Language selectors
  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);
  const t = translations[lang];

  // Auth store selectors
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Set mount animation flag
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Custom Cursor trailing logic & scroll tracking
  useEffect(() => {
    const cursorCircle = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const dot = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      dot.targetX = e.clientX;
      dot.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const quickTick = () => {
      // Lerp calculations for ultra-smooth organic cursor trailing
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      dot.x += (dot.targetX - dot.x) * 0.45;
      dot.y += (dot.targetY - dot.y) * 0.45;

      if (cursorCircle) {
        cursorCircle.style.transform = `translate3d(${mouse.x - 20}px, ${mouse.y - 20}px, 0)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${dot.x - 3}px, ${dot.y - 3}px, 0)`;
      }

      requestAnimationFrame(quickTick);
    };
    requestAnimationFrame(quickTick);

    // Scroll state tracker for nav blur/solid switch
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Stacking cards parallax scroll mechanics
    const handleCardsScroll = () => {
      if (window.innerWidth < 768) {
        document.querySelectorAll('.portfolio-card-wrapper').forEach(wrapper => {
          const card = wrapper.querySelector('.portfolio-card');
          if (card) {
            card.style.transform = 'none';
            card.style.opacity = '1';
            card.style.filter = 'none';
          }
        });
        return;
      }

      const wrappers = document.querySelectorAll('.portfolio-card-wrapper');
      wrappers.forEach((wrapper, index) => {
        const rect = wrapper.getBoundingClientRect();
        const stickyTop = 120 + index * 30;
        const card = wrapper.querySelector('.portfolio-card');
        if (!card) return;

        if (rect.top <= stickyTop) {
          const nextWrapper = wrappers[index + 1];
          if (nextWrapper) {
            const nextRect = nextWrapper.getBoundingClientRect();
            const nextStickyTop = 120 + (index + 1) * 30;
            const distance = nextRect.top - nextStickyTop;
            
            const scrollRange = 400;
            const progress = Math.max(0, Math.min(1, (scrollRange - distance) / scrollRange));
            
            const scale = 1 - progress * 0.06;
            const opacity = 1 - progress * 0.4;
            const brightness = 1 - progress * 0.45;
            
            card.style.transform = `scale(${scale})`;
            card.style.opacity = `${opacity}`;
            card.style.filter = `brightness(${brightness})`;

            const image = card.querySelector('.portfolio-card-image img');
            if (image) {
              const imageY = -progress * 40;
              image.style.transform = `scale(1.04) translateY(${imageY}px)`;
            }
          } else {
            card.style.transform = 'scale(1)';
            card.style.opacity = '1';
            card.style.filter = 'none';
            const image = card.querySelector('.portfolio-card-image img');
            if (image) image.style.transform = 'none';
          }
        } else {
          card.style.transform = 'scale(1)';
          card.style.opacity = '1';
          card.style.filter = 'none';
          const image = card.querySelector('.portfolio-card-image img');
          if (image) image.style.transform = 'none';
        }
      });
    };
    window.addEventListener('scroll', handleCardsScroll);
    setTimeout(handleCardsScroll, 100);

    // Wire up IntersectionObserver for scroll-revealed elements using correct .visible class
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Cursor hover enlarger triggers
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.user-profile-badge') || 
        target.closest('.settings-toggle') ||
        target.classList.contains('research-item') ||
        target.closest('.research-item')
      ) {
        cursorCircle?.classList.add('expand');
        cursorDot?.classList.add('expand');
      } else {
        cursorCircle?.classList.remove('expand');
        cursorDot?.classList.remove('expand');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleCardsScroll);
      observer.disconnect();
    };
  }, []);

  const animClass = isMounted ? 'anim-in' : '';

  return (
    <>
      <InteractiveDots />

      {/* FLOATING PILL NAV WITH LOGO CENTERED (ROOT LEVEL FIXED) */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''} ${animClass}`}>
        <div className="nav-left nav-links">
          <a href="#services">{t.services}</a>
          <a href="#expertise">{t.expertise}</a>
        </div>
        
        <div className="nav-brand-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="nav-brand-img" src="/logo.jpg" alt="QIX Logo" />
          <span className="nav-brand-text">QIX Technologies</span>
        </div>

        <div className="nav-right nav-links">
          <a href="#scale">{t.scale}</a>

          {/* LANG SWITCHER */}
          <div className="lang-switcher">
            <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>RU</button>
            <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'active' : ''}>UZ</button>
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
          </div>
          
          {/* AUTHORIZATION CONDITIONAL BUTTON OR USER BADGE */}
          {isLoggedIn ? (
            <div className="user-profile-badge">
              <img className="user-profile-avatar" src={user.avatar} alt="User Avatar" />
              <span className="user-profile-name">{user.name}</span>
              <div className="logout-dropdown">
                <button className="logout-btn" onClick={logout}>{t.disconnect}</button>
              </div>
            </div>
          ) : (
            <a 
              href="#login" 
              className="nav-login-link"
              onClick={(e) => { e.preventDefault(); setIsLoginOpen(true); }}
              style={{
                fontSize: '13px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.55)',
                textDecoration: 'none',
                letterSpacing: '0.5px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.55)'}
            >
              {t.login}
            </a>
          )}
          
          <Magnetic>
            <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); setIsProjectSidebarOpen(true); }}>
              <span className="btn-content-inner">
                <span className="btn-slide-item">
                  <span>{t.startProject}</span>
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
                <span className="btn-slide-item btn-slide-item-hover">
                  <span>{t.startProject}</span>
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </span>
            </a>
          </Magnetic>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button 
          className={`nav-hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE RESPONSIVE HAMBURGER OVERLAY (ROOT LEVEL FIXED) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t.services}</a>
        <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)}>{t.expertise}</a>
        <a href="#scale" onClick={() => setIsMobileMenuOpen(false)}>{t.scale}</a>

        {/* MOBILE LANG SWITCHER */}
        <div className="mobile-lang-switcher">
          <button onClick={() => { setLang('ru'); setIsMobileMenuOpen(false); }} className={lang === 'ru' ? 'active' : ''}>RU</button>
          <button onClick={() => { setLang('uz'); setIsMobileMenuOpen(false); }} className={lang === 'uz' ? 'active' : ''}>UZ</button>
          <button onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }} className={lang === 'en' ? 'active' : ''}>EN</button>
        </div>
        
        {isLoggedIn ? (
          <a href="#logout" onClick={(e) => { e.preventDefault(); logout(); setIsMobileMenuOpen(false); }}>
            {t.logout} ({user.name})
          </a>
        ) : (
          <a href="#login" onClick={(e) => { e.preventDefault(); setIsLoginOpen(true); setIsMobileMenuOpen(false); }}>
            {t.login}
          </a>
        )}
        
        <a href="#contact" className="mobile-cta" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setIsProjectSidebarOpen(true); }}>{t.startProject}</a>
      </div>

      {/* BACKGROUND GRAPHICS CONTAINER */}
      <div className="hero-wrapper">

        {/* COMPOSITE LIGHT OVERLAYS */}
        <div className={`hero-fade ${animClass}`} />
        <div className={`hero-fade-top ${animClass}`} />

        {/* HERO LAYOUT BOUNDS */}
        <div id="hero-overlay">
          
          {/* MAIN INTRO HERO CONTENT */}
          <div className="hero-content">
            {isLoggedIn && (
              <div className="hero-welcome-badge">
                <span className="welcome-pulse-dot" />
                <span>
                  {lang === 'en' ? 'Welcome' : lang === 'uz' ? 'Xush kelibsiz' : 'Добро пожаловать'}, {user.name}
                </span>
              </div>
            )}
            <h1 className={`hero-h1 ${animClass}`}>
              {t.heroTitle} <br />
              <span className="thin">{t.heroTitleSub}</span>
            </h1>
            
            <div className="hero-row">
              <p className={`hero-sub ${animClass}`}>
                {t.heroDesc}
              </p>
              <div className={`hero-actions ${animClass}`}>
                <Magnetic>
                  <a href="#services" className="btn-primary">
                    <span className="btn-content-inner">
                      <span className="btn-slide-item">
                        <span>{t.services}</span>
                        <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                      <span className="btn-slide-item btn-slide-item-hover">
                        <span>{t.services}</span>
                        <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); setIsProjectSidebarOpen(true); }}>
                    <span className="btn-content-inner">
                      <span className="btn-slide-item">
                        <span>{lang === 'en' ? 'Get in Touch' : lang === 'uz' ? 'Bog\'lanish' : 'Связаться'}</span>
                        <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                      <span className="btn-slide-item btn-slide-item-hover">
                        <span>{lang === 'en' ? 'Get in Touch' : lang === 'uz' ? 'Bog\'lanish' : 'Связаться'}</span>
                        <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* HERO BOTTOM STATUS BAR */}
          <div className="hero-bottom">
            <div className="hero-stats">
              <div className={`hero-stat ${animClass}`}>
                <span className="hero-stat-val">150+</span>
                <span className="hero-stat-label">{t.heroStatsProjects}</span>
              </div>
              <div className={`hero-stat ${animClass}`}>
                <span className="hero-stat-val">99.9%</span>
                <span className="hero-stat-label">{t.heroStatsUptime}</span>
              </div>
              <div className={`hero-stat ${animClass}`}>
                <span className="hero-stat-val">15M+</span>
                <span className="hero-stat-label">{t.heroStatsUsers}</span>
              </div>
            </div>
            <div className={`hero-scroll ${animClass}`}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35, flexShrink: 0 }}>
                <path d="M6.5 1v11M2 8l4.5 4.5L11 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ letterSpacing: '2px', fontSize: '10px' }}>
                {lang === 'en' ? 'Scroll to explore' : lang === 'uz' ? 'O\'rganish uchun aylantiring' : 'Листайте ниже'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING SYNTHESIZER TOGGLE FAB */}
      <button 
        className="settings-toggle" 
        onClick={() => setIsSettingsOpen(!isSettingsOpen)} 
        aria-label="Synthesizer Settings"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51-1Z" />
        </svg>
      </button>

      {/* SERVICES BLOCK (3D TILT CARDS INCLUDED) */}
      <section className="section section-whatwedo" id="services">
        <div className="section-inner">
          <div className="section-label reveal">{t.whatWeDo}</div>
          <h2 className="section-heading reveal reveal-delay-1">
            {t.engineeredStability} <span className="thin">{t.designedGrowth}</span>
          </h2>
          <div className="features-grid">
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <div className="feature-title">{t.cardWebTitle}</div>
              <div className="feature-desc">{t.cardWebDesc}</div>
            </div>
            
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <div className="feature-title">{t.cardAppTitle}</div>
              <div className="feature-desc">{t.cardAppDesc}</div>
            </div>
            
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <div className="feature-title">{t.cardDesignTitle}</div>
              <div className="feature-desc">{t.cardDesignDesc}</div>
            </div>
            
            <div className="feature-card reveal reveal-delay-4">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>
              </div>
              <div className="feature-title">{t.cardCloudTitle}</div>
              <div className="feature-desc">{t.cardCloudDesc}</div>
            </div>
            
            <div className="feature-card reveal reveal-delay-5">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <div className="feature-title">{t.cardApiTitle}</div>
              <div className="feature-desc">{t.cardApiDesc}</div>
            </div>
            
            <div className="feature-card reveal reveal-delay-6">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <div className="feature-title">{t.cardSupportTitle}</div>
              <div className="feature-desc">{t.cardSupportDesc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE PILLARS */}
      <section className="section section-research" id="expertise">
        <div className="section-inner">
          <div className="research-content">
            <div className="section-label reveal">{t.researchAreas}</div>
            <h2 className="section-heading reveal reveal-delay-1" style={{ marginBottom: '48px' }}>
              {t.threePillars} <span className="thin">{t.scientificExecution}</span>
            </h2>
            <div className="research-list">
              <div className="research-item-wrap reveal reveal-delay-2">
                <div 
                  className={`research-item ${activeFormation === 1 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFormation(1)}
                  onTouchStart={() => setActiveFormation(1)}
                >
                  <div className="research-num">01</div>
                  <div className="research-item-content">
                    <div className="research-item-title">{t.pillar1Title}</div>
                    <div className="research-item-desc">{t.pillar1Desc}</div>
                  </div>
                </div>
              </div>
              
              <div className="research-item-wrap reveal reveal-delay-3">
                <div 
                  className={`research-item ${activeFormation === 2 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFormation(2)}
                  onTouchStart={() => setActiveFormation(2)}
                >
                  <div className="research-num">02</div>
                  <div className="research-item-content">
                    <div className="research-item-title">{t.pillar2Title}</div>
                    <div className="research-item-desc">{t.pillar2Desc}</div>
                  </div>
                </div>
              </div>
              
              <div className="research-item-wrap reveal reveal-delay-4">
                <div 
                  className={`research-item ${activeFormation === 3 ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFormation(3)}
                  onTouchStart={() => setActiveFormation(3)}
                >
                  <div className="research-num">03</div>
                  <div className="research-item-content">
                    <div className="research-item-title">{t.pillar3Title}</div>
                    <div className="research-item-desc">{t.pillar3Desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Particle cloud morphing module */}
          <div className="research-canvas-wrap">
            <ResearchCanvas activeFormation={activeFormation} />
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE SECTION WITH STACKING CARDS */}
      <section className="section section-portfolio" id="work">
        <div className="section-inner">
          <div className="portfolio-header">
            <div className="section-label reveal">{t.selectedWork}</div>
            <h2 className="section-heading reveal reveal-delay-1">
              {t.caseStudies} <span className="thin">{t.builtSolutions}</span>
            </h2>
          </div>

          <div className="portfolio-cards">
            {/* Card 1: HubRecipeCook */}
            <div className="portfolio-card-wrapper reveal reveal-delay-2">
              <div className="portfolio-card">
                <div className="portfolio-card-content">
                  <div className="portfolio-card-tag">
                    {lang === 'en' ? 'Web Application / AI' : lang === 'uz' ? 'Veb-ilova / AI' : 'Веб-приложение / ИИ'}
                  </div>
                  <h3 className="portfolio-card-title">HubRecipeCook</h3>
                  <p className="portfolio-card-desc">
                    {lang === 'en' 
                      ? 'A modern culinary recipe platform featuring category filtering, detailed cooking instructions, user favorites, and an integrated AI Chef Assistant that crafts custom recipes based on ingredients currently in your kitchen.' 
                      : lang === 'uz' 
                      ? 'Kategoriya filtratsiyasi, batafsil pishirish ko\'rsatmalari, sevimli taomlar ro\'yxati va oshxonangizdagi masalliqlar asosida shaxsiy retseptlar yaratadigan Sun\'iy Intellekt oshpaziga ega zamonaviy pazandachilik platformasi.' 
                      : 'Современная кулинарная платформа с фильтрацией по категориям, подробными инструкциями, избранным и встроенным ИИ-шефом, который создает уникальные рецепты из продуктов в вашем холодильнике.'
                    }
                  </p>
                  <div className="portfolio-card-tech">
                    <span>React</span>
                    <span>Vite</span>
                    <span>AI Chef</span>
                    <span>Glassmorphism</span>
                  </div>
                  <Magnetic>
                    <a href="https://hubrecipecook.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <span className="btn-content-inner">
                        <span className="btn-slide-item">
                          <span>{t.visitWebsite}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>{t.visitWebsite}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </Magnetic>
                </div>
                <div className="portfolio-card-image">
                  <img src="/project_recipe.jpg" alt="HubRecipeCook Platform" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Card 2: Analytics */}
            <div className="portfolio-card-wrapper reveal reveal-delay-3">
              <div className="portfolio-card">
                <div className="portfolio-card-content">
                  <div className="portfolio-card-tag">SaaS Platform</div>
                  <h3 className="portfolio-card-title">Aether Analytics Suite</h3>
                  <p className="portfolio-card-desc">
                    {lang === 'en' 
                      ? 'Enterprise performance tracking platform processing millions of API events daily. Features custom 3D data visualization, predictive analytics, and automated alerting.' 
                      : lang === 'uz' 
                      ? 'Har kuni millionlab API so\'rovlarini qayta ishlaydigan korxona samaradorligini kuzatish platformasi. Shaxsiy 3D ma\'lumotlar vizualizatsiyasi, prognozli tahlillar va avtomatlashtirilgan ogohlantirishlarni o\'z ichiga oladi.' 
                      : 'Корпоративная платформа аналитики, обрабатывающая миллионы API-событий ежедневно. Включает 3D-визуализацию данных, предиктивную аналитику и автооповещения.'
                    }
                  </p>
                  <div className="portfolio-card-tech">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Three.js</span>
                    <span>Node.js</span>
                  </div>
                  <Magnetic>
                    <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); setIsProjectSidebarOpen(true); }}>
                      <span className="btn-content-inner">
                        <span className="btn-slide-item">
                          <span>{t.viewCase}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>{t.viewCase}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </Magnetic>
                </div>
                <div className="portfolio-card-image">
                  <img src="/project_analytics.jpg" alt="Aether Analytics Suite" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Card 3: Cloud */}
            <div className="portfolio-card-wrapper reveal reveal-delay-4">
              <div className="portfolio-card">
                <div className="portfolio-card-content">
                  <div className="portfolio-card-tag">DevOps / Cloud</div>
                  <h3 className="portfolio-card-title">Nebula Cloud Console</h3>
                  <p className="portfolio-card-desc">
                    {lang === 'en' 
                      ? 'Fully automated multi-region deployment center. Combines real-time global network mesh maps, cluster load indicators, and secure authorization controls.' 
                      : lang === 'uz' 
                      ? 'To\'liq avtomatlashtirilgan ko\'p mintaqali bulutli serverlar markazi. Haqiqiy vaqtdagi global tarmoq xaritalari, yuklama ko\'rsatkichlari va xavfsiz avtorizatsiyani birlashtiradi.' 
                      : 'Полностью автоматизированный центр развертывания в нескольких облачных регионах. Объединяет глобальные сетевые карты в реальном времени, датчики нагрузки кластеров и средства контроля безопасности.'
                    }
                  </p>
                  <div className="portfolio-card-tech">
                    <span>Vite</span>
                    <span>AWS</span>
                    <span>Kubernetes</span>
                    <span>GraphQL</span>
                  </div>
                  <Magnetic>
                    <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); setIsProjectSidebarOpen(true); }}>
                      <span className="btn-content-inner">
                        <span className="btn-slide-item">
                          <span>{t.viewCase}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                        <span className="btn-slide-item btn-slide-item-hover">
                          <span>{t.viewCase}</span>
                          <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </Magnetic>
                </div>
                <div className="portfolio-card-image">
                  <img src="/project_cloud.jpg" alt="Nebula Cloud Console" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS SCALING DATA */}
      <section className="section section-numbers" id="scale">
        <NumbersCanvas />
        
        <div className="section-inner">
          <div className="numbers-content">
            <div className="section-label reveal">{t.byNumbers}</div>
            <h2 className="section-heading reveal reveal-delay-1">{t.scaleSpeaks} <span className="thin">{t.itself}</span></h2>
            <div className="numbers-grid">
              <div className="number-card reveal reveal-delay-2">
                <div className="number-val">
                  <CountingNumber count={150} suffix="+" />
                </div>
                <div className="number-divider" />
                <div className="number-label">{t.numCardProjects}</div>
              </div>
              <div className="number-card reveal reveal-delay-3">
                <div className="number-val">
                  <CountingNumber count={99} suffix=".9%" />
                </div>
                <div className="number-divider" />
                <div className="number-label">{t.numCardUptime}</div>
              </div>
              <div className="number-card reveal reveal-delay-4">
                <div className="number-val">
                  <CountingNumber count={45} suffix="+" />
                </div>
                <div className="number-divider" />
                <div className="number-label">{t.numCardEngineers}</div>
              </div>
              <div className="number-card reveal reveal-delay-5">
                <div className="number-val">
                  <CountingNumber count={10} suffix="x" />
                </div>
                <div className="number-divider" />
                <div className="number-label">{t.numCardSpeed}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="section section-cta" id="contact">
        <div className="section-inner">
          <div className="section-label reveal">{t.getInvolved}</div>
          <h2 className="cta-heading reveal reveal-delay-1">{t.nextBreakthrough} <span className="thin">{t.startsYou}</span></h2>
          <p className="cta-sub reveal reveal-delay-2">{t.ctaDesc}</p>
          <div className="cta-actions reveal reveal-delay-3">
            <Magnetic>
              <button className="btn-primary" onClick={() => setIsProjectSidebarOpen(true)}>
                <span className="btn-content-inner">
                  <span className="btn-slide-item">
                    <span>{t.startProject}</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span className="btn-slide-item btn-slide-item-hover">
                    <span>{t.startProject}</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </span>
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn-secondary" onClick={() => setIsProjectSidebarOpen(true)}>
                <span className="btn-content-inner">
                  <span className="btn-slide-item">
                    <span>{lang === 'en' ? 'Get in Touch' : lang === 'uz' ? 'Bog\'lanish' : 'Связаться'}</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span className="btn-slide-item btn-slide-item-hover">
                    <span>{lang === 'en' ? 'Get in Touch' : lang === 'uz' ? 'Bog\'lanish' : 'Связаться'}</span>
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="about">
        <div className="section-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="footer-left">
            <img className="footer-img" src="/logo.jpg" alt="QIX Logo" />
            <span className="footer-brand" style={{ marginLeft: '10px' }}>QIX Technologies</span>
          </div>
          <div className="footer-right">
            &copy; 2026 QIX Technologies Inc. {t.footerCopy}
          </div>
        </div>
      </footer>

      {/* SYNTHESIZER SIDE PANEL */}
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* AUTHENTICATION 3D GLASSMOPRHIC LOGIN MODAL */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <ProjectSidebar isOpen={isProjectSidebarOpen} onClose={() => setIsProjectSidebarOpen(false)} />
      {/* Custom cursor trailing elements */}
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <div ref={cursorRef} className="custom-cursor-circle" />
    </>
  );
}
