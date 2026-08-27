import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { Apple, Search, ShoppingBag, Menu, ArrowRight, Sun, Clock, FileText, PlayCircle, MapPin, Users, ChevronRight, X } from 'lucide-react';
import MoltenMetal from './components/MoltenMetal';
import SplitText from './components/SplitText';
import DashboardMockup from './components/DashboardMockup';
import TiltedCard from './components/TiltedCard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Estimate from './components/Estimate';
import MyPage from './components/MyPage';
import KakaoCallback from './components/KakaoCallback';
import NaverCallback from './components/NaverCallback';
import GoogleCallback from './components/GoogleCallback';
import About from './components/About';
import Worship from './components/Worship';
import Education from './components/Education';
import Fellowship from './components/Fellowship';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({ name: '고객' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const saved = localStorage.getItem('userProfile');
      if (saved) {
        setUserProfile(JSON.parse(saved));
      }
    }
  }, [isLoggedIn]);

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full bg-white border-b border-divider-soft">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-8 h-[72px]">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/logo.jpg" alt="평화교회 로고" className="h-10 w-auto object-contain" />
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex items-center h-full space-x-10 text-[16px] font-semibold text-ink-muted-80 relative">
          
          {/* 교회소개 */}
          <div className="relative group h-full flex items-center">
            <Link to="/about" className="hover:text-ink transition-colors py-4 px-2">교회소개</Link>
            <div className="absolute top-[56px] left-1/2 -translate-x-1/2 w-[170px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-lg rounded-[8px] p-1.5 relative">
                {/* Pointer */}
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-t border-l border-gray-100 rotate-45 rounded-tl-[2px] z-0"></div>
                
                <div className="flex flex-col space-y-0.5 relative z-10">
                  <Link to="/about/vision" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>교회비전과 목표</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/pastor" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>담임목사 소개</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/staff" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>섬기는 분</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/worship" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>예배안내</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/bulletin" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>교회주보</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/offering" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>온라인헌금</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/facility" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>시설안내</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/about/location" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>찾아오시는 길</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 예배와찬양 */}
          <div className="relative group h-full flex items-center">
            <Link to="/worship" className="hover:text-ink transition-colors py-4 px-2">예배와찬양</Link>
            <div className="absolute top-[56px] left-1/2 -translate-x-1/2 w-[170px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-lg rounded-[8px] p-1.5 relative">
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-t border-l border-gray-100 rotate-45 rounded-tl-[2px] z-0"></div>
                <div className="flex flex-col space-y-0.5 relative z-10">
                  <Link to="/worship/word" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>예배와말씀</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/worship/choir" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>찬양단</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 교육과선교 */}
          <div className="relative group h-full flex items-center">
            <Link to="/education" className="hover:text-ink transition-colors py-4 px-2">교육과선교</Link>
            <div className="absolute top-[56px] left-1/2 -translate-x-1/2 w-[170px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-lg rounded-[8px] p-1.5 relative">
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-t border-l border-gray-100 rotate-45 rounded-tl-[2px] z-0"></div>
                <div className="flex flex-col space-y-0.5 relative z-10">
                  <Link to="/education/kids" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>유초등부</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/education/youth" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>중고등부</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/education/young-adult" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>청년부</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/education/womens" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>여선교회</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/education/mens" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>남선교회</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 나눔과교제 */}
          <div className="relative group h-full flex items-center">
            <Link to="/fellowship" className="hover:text-ink transition-colors py-4 px-2">나눔과교제</Link>
            <div className="absolute top-[56px] left-1/2 -translate-x-1/2 w-[170px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-lg rounded-[8px] p-1.5 relative">
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-t border-l border-gray-100 rotate-45 rounded-tl-[2px] z-0"></div>
                <div className="flex flex-col space-y-0.5 relative z-10">
                  <Link to="/fellowship/grace" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>은혜의글</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/fellowship/gallery" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>갤러리</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link to="/fellowship/business" className="flex items-center justify-between px-3 py-1.5 text-[13.5px] text-gray-700 hover:text-[#cc0000] hover:bg-[#cc0000]/5 rounded-md transition-all duration-200 font-medium group/item">
                    <span>교우사업장소개</span>
                    <ChevronRight size={13} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          {isLoggedIn ? (
            <button 
              onClick={() => navigate('/mypage')}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 py-1.5 px-3 rounded-full transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#5227FF] to-[#FF9FFC] p-[1.5px]">
                <div className="w-full h-full bg-white rounded-full border border-white flex items-center justify-center bg-gray-100 text-gray-500 font-bold text-[10px]">
                  {userProfile.name.charAt(0)}
                </div>
              </div>
              <span className="text-[13px] font-bold text-gray-700 hidden sm:block">내 정보</span>
            </button>
          ) : (
            <>
              <button 
                onClick={() => navigate('/login')}
                className="text-[15px] font-medium text-ink hover:text-primary transition-colors hidden sm:block"
              >
                로그인
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="btn-secondary !border-divider-hairline !text-ink hover:!bg-surface-parchment !py-2 !px-5 !rounded-lg text-[14px] font-medium shadow-sm bg-surface-canvas"
              >
                회원가입
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-[110] shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <span className="font-bold text-lg">전체메뉴</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-black">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-5 px-5 space-y-5">
                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-2 border-b border-gray-100 pb-4">
                  {isLoggedIn ? (
                    <button 
                      onClick={() => { setIsMobileMenuOpen(false); navigate('/mypage'); }}
                      className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-center font-bold text-gray-700 text-[14px] transition-colors"
                    >
                      내 정보 ({userProfile.name})
                    </button>
                  ) : (
                    <>
                      <button 
                        onClick={() => { setIsMobileMenuOpen(false); navigate('/login'); }}
                        className="w-full py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-center font-bold text-gray-700 text-[14px] transition-colors"
                      >
                        로그인
                      </button>
                      <button 
                        onClick={() => { setIsMobileMenuOpen(false); navigate('/signup'); }}
                        className="w-full py-2 bg-black hover:bg-gray-900 text-[#F6BE00] rounded-lg text-center font-bold text-[14px] transition-colors"
                      >
                        회원가입
                      </button>
                    </>
                  )}
                </div>
                
                <div>
                  <h3 className="text-[#8DC63F] text-[13px] font-bold mb-2 uppercase tracking-wider">교회소개</h3>
                  <div className="grid grid-cols-2 gap-y-2.5 pl-1">
                    <Link to="/about/vision" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">교회비전과 목표</Link>
                    <Link to="/about/pastor" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">담임목사 소개</Link>
                    <Link to="/about/staff" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">섬기는 분</Link>
                    <Link to="/about/worship" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">예배안내</Link>
                    <Link to="/about/bulletin" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">교회주보</Link>
                    <Link to="/about/offering" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">온라인헌금</Link>
                    <Link to="/about/facility" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">시설안내</Link>
                    <Link to="/about/location" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">찾아오시는 길</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#8DC63F] text-[13px] font-bold mb-2 uppercase tracking-wider">예배와찬양</h3>
                  <div className="grid grid-cols-2 gap-y-2.5 pl-1">
                    <Link to="/worship/word" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">예배와말씀</Link>
                    <Link to="/worship/choir" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">찬양단</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#8DC63F] text-[13px] font-bold mb-2 uppercase tracking-wider">교육과선교</h3>
                  <div className="grid grid-cols-2 gap-y-2.5 pl-1">
                    <Link to="/education/kids" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">유초등부</Link>
                    <Link to="/education/youth" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">중고등부</Link>
                    <Link to="/education/young-adult" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">청년부</Link>
                    <Link to="/education/womens" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">여선교회</Link>
                    <Link to="/education/mens" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">남선교회</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#8DC63F] text-[13px] font-bold mb-2 uppercase tracking-wider">나눔과교제</h3>
                  <div className="grid grid-cols-2 gap-y-2.5 pl-1">
                    <Link to="/fellowship/grace" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">은혜의글</Link>
                    <Link to="/fellowship/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">갤러리</Link>
                    <Link to="/fellowship/business" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium text-[14px]">교우사업장소개</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

const HERO_SLIDES = [
  {
    image: "/hero-1-bg.webp",
    topText: "기독교대한감리회",
    main: "평화교회",
    engText: "PEACE METHODIST CHURCH",
    sub: "예수님의 사랑으로 사람을 세우고,\n세상을 섬기는 교회",
    align: "left"
  },
  {
    image: "/hero-2-bg.webp",
    main: "말씀이 삶이 되는\n은혜의 예배",
    sub: "진리와 성령으로 드리는\n참된 예배의 자리",
    align: "left"
  },
  {
    image: "/hero-3-bg.webp",
    main: "세상을 섬기는\n사랑의 공동체",
    sub: "이웃과 함께하며\n세상의 빛과 소금의 역할을 다합니다",
    align: "left"
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[480px] lg:h-[600px] overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img 
            src={HERO_SLIDES[currentSlide].image} 
            alt="Hero Background" 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover z-0 origin-center" 
          />
          
          {/* Text Content */}
          <div className={`relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-8 md:px-12 ${HERO_SLIDES[currentSlide].align === 'left' ? 'items-start text-left md:pl-24 lg:pl-32' : 'items-center text-center'}`}>
            
            {HERO_SLIDES[currentSlide].topText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-bold text-white/95 mb-1 sm:mb-2 drop-shadow-md tracking-tight"
              >
                {HERO_SLIDES[currentSlide].topText}
              </motion.div>
            )}

            <SplitText
              tag="h1"
              textAlign={HERO_SLIDES[currentSlide].align}
              delay={40}
              duration={1.2}
              splitType="chars"
              from={{ opacity: 0, y: 80, rotationX: -30 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              ease="back.out(1.2)"
              className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-black text-white mb-2 sm:mb-4 tracking-tight drop-shadow-lg leading-[1.1] sm:leading-none"
            >
              {HERO_SLIDES[currentSlide].main.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </SplitText>

            {HERO_SLIDES[currentSlide].engText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-[11px] sm:text-[14px] md:text-[20px] font-medium text-white/80 mb-4 sm:mb-6 drop-shadow-md tracking-[0.2em] sm:tracking-[0.35em] uppercase"
              >
                {HERO_SLIDES[currentSlide].engText}
              </motion.div>
            )}

            <SplitText
              tag="p"
              textAlign={HERO_SLIDES[currentSlide].align}
              delay={30}
              duration={1}
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              ease="power3.out"
              className="text-[15px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-white/95 drop-shadow-md font-medium max-w-2xl leading-[1.4] sm:leading-snug break-keep"
            >
              {HERO_SLIDES[currentSlide].sub.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </SplitText>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function QuickMenu() {
  const menus = [
    { name: '예배안내', path: '/about/worship', icon: <Clock className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: '주보', path: '/about/bulletin', icon: <FileText className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: '유튜브채널', path: '/worship/word', icon: <PlayCircle className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: '오시는길', path: '/about/location', icon: <MapPin className="w-8 h-8 md:w-10 md:h-10" /> }
  ];

  return (
    <section className="bg-[#f5f5f7] py-12 md:py-20 px-4 flex flex-col items-center overflow-hidden">
      {/* Motto */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-10 flex flex-col items-center"
      >
        <span className="text-[20px] md:text-[24px] font-semibold text-[#8DC63F] mb-2 tracking-wide">2026년 표어</span>
        <h2 className="text-[32px] md:text-[42px] font-bold text-black tracking-tight leading-snug">
          주 안에서 하나 되는 평화교회
        </h2>
      </motion.div>
      
      {/* Welcome Line */}
      <div className="flex items-center w-full max-w-4xl mb-10 sm:mb-16">
        <div className="flex-1 h-[2px] bg-white shadow-sm hidden sm:block"></div>
        <span className="px-2 sm:px-6 text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-black tracking-wide text-center w-full sm:w-auto break-keep">
          평화교회에 오신 여러분을 환영합니다.
        </span>
        <div className="flex-1 h-[2px] bg-white shadow-sm hidden sm:block"></div>
      </div>
      
      {/* Quick Menus */}
      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-12 w-full max-w-4xl px-2 sm:px-4">
        {menus.map((menu, idx) => (
          <Link key={idx} to={menu.path} className="flex flex-col items-center cursor-pointer group p-4 sm:p-0 bg-white sm:bg-transparent rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
            <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#8DC63F] rounded-full flex items-center justify-center shadow-sm mb-3 sm:mb-4 text-white group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300">
              {React.cloneElement(menu.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' })}
            </div>
            <span className="text-[14px] sm:text-[15px] md:text-[17px] font-bold text-black group-hover:text-[#8DC63F] transition-colors text-center break-keep">
              {menu.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeVideoModal({ video, onClose }) {
  if (!video) return null;
  const vId = video.videoId;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }} onClick={onClose}>
      <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, transition: 'background-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}>
          <X size={24} />
        </button>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
          <iframe 
            src={`https://www.youtube.com/embed/${vId}?autoplay=1`}
            title={video.title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ padding: '24px', backgroundColor: '#fff' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 'bold', color: '#111' }}>{video.title}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{video.date}</p>
        </div>
      </div>
    </div>
  );
}

function WorshipVideos() {
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  React.useEffect(() => {
    const API_KEY = 'AIzaSyB9KDwffH02W8tbqTA4PusVKr8QruVZ08o';
    const playlistId = 'UUruxV-V5vqm44PbLlQkuKcA';
    const maxResults = 5; // 1 latest + 4 recent
    
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          const formattedVideos = data.items.map(item => {
            const snippet = item.snippet;
            const videoId = snippet.resourceId.videoId;
            const dateStr = snippet.publishedAt ? snippet.publishedAt.split('T')[0].replace(/-/g, '.') : '';
            return {
              id: videoId,
              title: snippet.title,
              date: dateStr,
              thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url,
              videoId: videoId
            };
          });
          setVideos(formattedVideos);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch videos', err);
        setLoading(false);
      });
  }, []);

  const latestVideo = videos.length > 0 ? videos[0] : null;
  const recentVideos = videos.length > 1 ? videos.slice(1) : [];

  return (
    <section 
      id="worship-videos" 
      className="text-white relative py-24 md:py-32 px-4 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/korean-bible-bg.webp")' }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* High-end Subtle Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight leading-[1.2]">
            예배영상
          </h2>
        </motion.div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: '#ccc', fontSize: '18px' }}>예배 영상을 불러오는 중입니다...</div>
        ) : (
          <>
            {/* Latest Video - Large */}
            {latestVideo && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 flex justify-center"
              >
                <div className="w-full md:w-[65%]">
                  <div className="relative w-full pb-[56.25%] bg-black rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                    <iframe 
                      src={`https://www.youtube.com/embed/${latestVideo.videoId}`} 
                      title={latestVideo.title}
                      className="absolute top-0 left-0 w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-6 text-center">
                    <span className="inline-block px-3 py-1 bg-[#8DC63F] text-black text-sm font-bold rounded-full mb-3">최신 영상</span>
                    <h3 className="text-[22px] md:text-[28px] font-bold text-white mb-2 leading-tight">{latestVideo.title}</h3>
                    <p className="text-[15px] md:text-[16px] text-white/70">{latestVideo.date}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Recent Videos - Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {recentVideos.map((video, idx) => (
                <motion.div
                  onClick={() => setSelectedVideo(video)}
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-4 bg-gray-900 border border-white/5">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-white mb-2 line-clamp-2 group-hover:text-[#8DC63F] transition-colors leading-snug">
                    {video.title}
                  </h4>
                  <p className="text-[14px] text-white/50">{video.date}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
        
        <div className="mt-16 text-center">
          <a href="https://www.youtube.com/@TV-ue9if" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2 border border-white/20 rounded-full px-8 py-3 text-white hover:bg-white/10 transition-colors">
            <PlayCircle className="w-5 h-5 text-[#8DC63F]" />
            <span className="font-medium text-[15px]">유튜브 채널 바로가기</span>
          </a>
        </div>
      </div>

      <HomeVideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}

function WorshipSchedule() {
  return (
    <section id="worship-schedule" className="bg-white text-[#111] relative min-h-[350px] flex items-center border-t border-black/5 px-4 py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center md:items-start h-full">
        
        {/* Left 1/5: Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/5 flex flex-col justify-start shrink-0 mb-8 md:mb-0 md:pr-8 text-center md:text-left mt-0 md:mt-2"
        >
          <div className="text-[13px] md:text-[14px] font-bold tracking-widest text-[#8DC63F] mb-1 md:mb-2">예배안내</div>
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight text-black leading-tight">
            예배시간
          </h2>
          <div className="w-10 md:w-12 h-1 bg-black mt-3 md:mt-5 mx-auto md:mx-0"></div>
        </motion.div>

        {/* Right 4/5: Content Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-10 md:pl-10 border-l-0 md:border-l border-gray-200"
        >
          {/* Group 1: 주일예배 */}
          <div>
            <h3 className="font-bold text-[16px] md:text-[18px] text-black mb-3 md:mb-5 flex items-center">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#8DC63F] mr-2 md:mr-2.5"></span> 주일 예배
            </h3>
            <ul className="space-y-2 md:space-y-3.5 text-[14px] md:text-[15px]">
              <li className="flex justify-between border-b border-gray-100 pb-1.5 md:pb-2.5"><span className="font-medium text-gray-800">1부 예배</span> <span className="text-gray-500 font-bold">오전 09:00</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-1.5 md:pb-2.5"><span className="font-medium text-gray-800">2부 예배</span> <span className="text-gray-500 font-bold">오전 11:00</span></li>
              <li className="flex justify-between pb-1"><span className="font-medium text-gray-800">오후 예배</span> <span className="text-gray-500 font-bold">오후 02:00</span></li>
            </ul>
          </div>

          {/* Group 2: 주중예배 */}
          <div>
            <h3 className="font-bold text-[16px] md:text-[18px] text-black mb-3 md:mb-5 flex items-center">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-black mr-2 md:mr-2.5"></span> 주중 예배
            </h3>
            <ul className="space-y-2 md:space-y-3.5 text-[14px] md:text-[15px]">
              <li className="flex justify-between border-b border-gray-100 pb-1.5 md:pb-2.5"><span className="font-medium text-gray-800">수요 기도회</span> <span className="text-gray-500 font-bold">오후 07:30</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-1.5 md:pb-2.5"><span className="font-medium text-gray-800">금요 성령집회</span> <span className="text-gray-500 font-bold">오후 08:30</span></li>
              <li className="flex justify-between pb-1"><span className="font-medium text-gray-800">새벽 기도회</span> <span className="text-gray-500 font-bold">오전 05:00</span></li>
            </ul>
          </div>

          {/* Group 3: 다음세대 */}
          <div>
            <h3 className="font-bold text-[16px] md:text-[18px] text-black mb-3 md:mb-5 flex items-center">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-gray-400 mr-2 md:mr-2.5"></span> 다음 세대
            </h3>
            <ul className="space-y-2 md:space-y-3.5 text-[14px] md:text-[15px]">
              <li className="flex justify-between border-b border-gray-100 pb-1.5 md:pb-2.5"><span className="font-medium text-gray-800">유치·아동부</span> <span className="text-gray-500 font-bold">오전 11:00</span></li>
              <li className="flex justify-between border-b border-gray-100 pb-1.5 md:pb-2.5"><span className="font-medium text-gray-800">중·고등부</span> <span className="text-gray-500 font-bold">오전 10:30</span></li>
              <li className="flex justify-between pb-1"><span className="font-medium text-gray-800">청년부 예배</span> <span className="text-gray-500 font-bold">오후 02:00</span></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PastorGreeting() {
  return (
    <section 
      id="pastor-greeting" 
      className="relative flex items-center justify-center min-h-[85vh] pt-32 pb-[378px] px-4 bg-fixed bg-[85%_center] md:bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/pastor-bg.png")' }}
    >
      {/* Gradient Overlay for text readability on left, visibility on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto text-left flex flex-col items-start mt-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[32px] md:text-[48px] font-bold text-white tracking-tight"
        >
          평화 교회에 오신것을 환영합니다.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-16 md:w-20 h-1.5 md:h-2 bg-[#F6BE00] mt-4 mb-5 md:mt-5 md:mb-6 origin-left rounded-full"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col space-y-1.5 md:space-y-2 text-[15px] md:text-[18px] font-medium text-white/90 leading-relaxed tracking-tight break-keep"
        >
          <p>어떠한 어려움 속에서도 믿음의 자리를 지키며 주님의 길을 걷는 교회</p>
          <p>점점 혼탁해져가는 이 시대에 진리를 전하며 거룩함을 세워가는 교회</p>
          <p>주님의 소유된 백성들을 거룩한 제사장으로 세워 이땅에 하나님의 나라를 이루어가는 교회</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 md:mt-10 flex flex-col items-start"
        >
          <p className="text-[17px] md:text-[19px] text-white/80 font-medium mb-1">담임목사</p>
          <p className="text-[28px] md:text-[40px] font-bold text-white tracking-wider mb-5 md:mb-6">장 성 진</p>
          
          <button className="bg-black text-[#F6BE00] px-8 md:px-10 py-2.5 md:py-3 rounded-[10px] text-[15px] md:text-[16px] font-bold hover:bg-gray-800 transition-colors duration-300 shadow-lg border border-white/10">
            목사님 인사말 바로가기
          </button>
        </motion.div>
      </div>

    </section>
  );
}

function PhotoGallery() {
  const photos = [
    { id: 1, title: "2026 전교인 여름 수련회", date: "2026. 08. 15", image: "https://images.unsplash.com/photo-1529070538774-1843cb1611bb?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "청년부 단기 선교 파송 예배", date: "2026. 07. 22", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "부활절 이웃 초청 주일", date: "2026. 04. 12", image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "제1기 제자훈련 수료식", date: "2026. 03. 28", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "유치부 여름 성경학교", date: "2026. 02. 15", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "신년 특별 새벽 기도회", date: "2026. 01. 05", image: "https://images.unsplash.com/photo-1437604537877-09d5dd70ed29?auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "성탄절 축하 찬양제", date: "2025. 12. 25", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "추수감사주일 예배", date: "2025. 11. 15", image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section id="photo-gallery" className="bg-white text-[#111] relative py-20 md:py-24 px-4 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Title Area */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="text-sm font-bold tracking-widest text-[#8DC63F] mb-3">나눔과 교제</div>
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-black">
            사진게시판
          </h2>
        </motion.div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-10">
          {photos.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/9] overflow-hidden relative rounded-xl bg-gray-100 mb-3">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5"></div>
              </div>

              {/* Text Info */}
              <div className="px-1">
                <h3 className="text-[16px] md:text-[17px] font-bold text-black mb-1.5 leading-snug group-hover:text-[#8DC63F] transition-colors truncate">
                  {item.title}
                </h3>
                <div className="text-[13px] md:text-[14px] font-medium text-gray-500 tracking-wide">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button className="bg-transparent border border-gray-300 text-black px-10 py-3 rounded-full text-[15px] font-bold hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300">
            게시판 바로가기
          </button>
        </motion.div>
      </div>
    </section>
  );
}



function Location() {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao map SDK is not loaded.");
        return;
      }
      
      window.kakao.maps.load(() => {
        // Fallback coordinates (서울 중랑구 봉화산로 120)
        const fallbackCoords = new window.kakao.maps.LatLng(37.60533, 127.0924); 
        
        const renderMap = (coords) => {
          const options = { center: coords, level: 3 };
          const map = new window.kakao.maps.Map(mapRef.current, options);
          const marker = new window.kakao.maps.Marker({ map: map, position: coords });
          const content = `<div style="padding:5px 10px; border-radius:8px; background:white; font-size:14px; font-weight:bold; color:#cc0000; border:1px solid #ddd; box-shadow:0 2px 4px rgba(0,0,0,0.1);">평화교회</div>`;
          const customOverlay = new window.kakao.maps.CustomOverlay({
              position: coords,
              content: content,
              yAnchor: 2.3
          });
          customOverlay.setMap(map);
        };

        if (window.kakao.maps.services) {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch('서울 중랑구 봉화산로 120', function(result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              renderMap(coords);
            } else {
              console.warn("Geocoding failed, using fallback coordinates.");
              renderMap(fallbackCoords);
            }
          });
        } else {
          renderMap(fallbackCoords);
        }
      });
    };

    // React가 너무 빨리 렌더링될 경우를 대비해 약간의 지연 후 실행
    const timer = setTimeout(() => {
      initMap();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="location" className="bg-[#f8f9fa] text-[#111] relative py-20 md:py-24 px-4 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-sm font-bold tracking-widest text-[#8DC63F] mb-3">LOCATION</div>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-black">
            오시는 길
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Map Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%] h-[400px] md:h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-md relative"
          >
            <div ref={mapRef} className="w-full h-full"></div>
          </motion.div>

          {/* Info Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[40%] flex flex-col justify-center"
          >
            <div className="h-full flex flex-col justify-center space-y-8 py-4 pl-4 md:pl-8 lg:pl-12">
              
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '10px', textAlign: 'left', alignItems: 'start' }}>
                <h3 className="text-[16px] md:text-[17px] font-bold text-gray-900 pt-0.5">주소</h3>
                <div className="text-[15px] md:text-[16px] text-gray-700 break-keep leading-relaxed font-medium">
                  서울 중랑구 봉화산로 120
                  <span className="text-[14px] text-gray-500 mt-1 block">(지번: 서울 중랑구 신내동 613)</span>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200/80 w-full"></div>

              <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '10px', textAlign: 'left', alignItems: 'start' }}>
                <h3 className="text-[16px] md:text-[17px] font-bold text-gray-900 pt-0.5">대중교통</h3>
                <div className="space-y-3 text-[15px] md:text-[16px] text-gray-700 font-medium">
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '10px', alignItems: 'start' }}>
                    <strong className="text-gray-800">지하철</strong>
                    <p className="break-keep leading-relaxed text-gray-600">1호선 평화역 3번 출구에서 도보 5분</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '10px', alignItems: 'start' }}>
                    <strong className="text-gray-800">버스</strong>
                    <p className="break-keep leading-relaxed text-gray-600">간선: 100, 200, 300<br/>지선: 1011, 2022</p>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200/80 w-full"></div>

              <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '10px', textAlign: 'left', alignItems: 'start' }}>
                <h3 className="text-[16px] md:text-[17px] font-bold text-gray-900 pt-0.5">주차 안내</h3>
                <div className="text-[15px] md:text-[16px] text-gray-700 break-keep leading-relaxed font-medium">
                  교회 본관 지하 주차장 이용 가능 (무료)
                  <span className="text-[14px] text-gray-500 mt-1 block">주일에는 혼잡할 수 있으니 대중교통 이용을 권장합니다.</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0a0a0a] text-[#888] pt-20 pb-12 px-6 border-t border-white/5 text-[14px] font-body">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
          
          {/* Brand & Call to action */}
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-white px-3 py-2 rounded-lg inline-block">
                <img src="/logo.jpg" alt="평화교회 로고" className="h-10 w-auto object-contain" />
              </div>
            </div>
            <p className="text-[16px] text-[#999] mb-8 max-w-[400px] leading-[1.6] break-keep">
              하나님의 사랑과 은혜가 넘치는 진정한 쉼터<br/>
              세상의 빛과 소금이 되는 평화교회입니다.
            </p>
          </div>

          {/* Business Info */}
          <div className="md:w-1/2 flex flex-col md:items-end">
            <div className="space-y-2 text-left md:text-right text-[13px] leading-relaxed mt-4 md:mt-0">
              <p><strong className="text-white font-medium text-[15px]">기독교대한감리회 평화교회</strong></p>
              <p>서울 중랑구 봉화산로 120</p>
              <div className="pt-3 flex flex-col md:flex-row md:justify-end gap-2 md:gap-6">
                <span>Tel: <strong className="text-white font-medium tracking-wider">02-000-0000</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[12px] text-[#666]">
          <p className="mt-4 md:mt-0">© 2026 Peace Methodist Church. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    // 앱 초기 로드 시 백엔드(/api/auth/me)로 요청을 보내 HttpOnly 쿠키(JWT)가 유효한지 검증합니다.
    const checkSession = async () => {
      try {
        const response = await fetch('/api/auth/me');
        const data = await response.json();
        
        if (data.success && data.user) {
          setIsLoggedIn(true);
          // 프론트엔드 UI용으로만 로컬 스토리지에 최신 유저 정보를 업데이트합니다.
          localStorage.setItem('userProfile', JSON.stringify(data.user));
          localStorage.setItem('isLoggedIn', 'true');
        } else {
          // 토큰이 없거나 만료된 경우 모든 로컬 캐시를 지우고 로그아웃 상태로 만듭니다.
          setIsLoggedIn(false);
          localStorage.removeItem('userProfile');
          localStorage.removeItem('isLoggedIn');
        }
      } catch (error) {
        console.error('Session check error:', error);
        setIsLoggedIn(false);
        localStorage.removeItem('userProfile');
        localStorage.removeItem('isLoggedIn');
      } finally {
        setIsCheckingSession(false);
      }
    };

    checkSession();
  }, []);

  if (isCheckingSession) {
    // 세션 확인 중일 때는 아무것도 그리지 않거나 로딩 스피너를 보여줄 수 있습니다.
    return <div className="min-h-screen bg-surface-canvas flex items-center justify-center"></div>;
  }

  return (
    <div className="w-full min-h-screen bg-surface-canvas">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar isLoggedIn={isLoggedIn} />
            <main className="w-full">
              <Hero />
              <QuickMenu />
              <WorshipVideos />
              <WorshipSchedule />
              <PastorGreeting />
              <PhotoGallery />
              <Location />
            </main>
            <Footer />
          </>
        } />
        <Route path="/about/*" element={
          <>
            <Navbar isLoggedIn={isLoggedIn} />
            <About />
            <Footer />
          </>
        } />
        <Route path="/worship/*" element={
          <>
            <Navbar isLoggedIn={isLoggedIn} />
            <Worship />
            <Footer />
          </>
        } />
        <Route path="/education/*" element={
          <>
            <Navbar isLoggedIn={isLoggedIn} />
            <Education />
            <Footer />
          </>
        } />
        <Route path="/fellowship/*" element={
          <>
            <Navbar isLoggedIn={isLoggedIn} />
            <Fellowship />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/mypage" element={<MyPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/auth/naver/callback" element={<NaverCallback setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/auth/google/callback" element={<GoogleCallback setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
