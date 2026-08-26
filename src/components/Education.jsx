import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

/* ─────────────────────────── Sub-page Components ─────────────────────────── */

function DepartmentInfo({ title, subtitle, imageSrc, description }) {
  return (
    <div>
      {/* Title Box */}
      <div style={{ 
        backgroundColor: '#f8fafc', 
        borderLeft: '4px solid #cc0000', 
        padding: '24px 32px', 
        borderRadius: '0 8px 8px 0',
        marginBottom: '40px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', marginBottom: '8px', margin: 0 }}>{title}</h3>
        <p style={{ fontSize: '15px', color: '#555', margin: 0 }}>{subtitle}</p>
      </div>

      {/* Card News (Horizontal) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        border: '1px solid #eee', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        boxShadow: '0 10px 20px -5px rgba(0,0,0,0.05)',
        marginBottom: '48px',
        gap: '32px'
      }}>
        <div style={{ width: '45%', flexShrink: 0 }}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            minHeight: '260px',
            backgroundImage: `url(${imageSrc})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} />
        </div>
        <div style={{ padding: '32px 32px 32px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#cc0000', marginBottom: '16px', margin: 0 }}>사역 소개</h4>
          <div style={{ fontSize: '15px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
            {description}
          </div>
        </div>
      </div>

      {/* Custom Content Section (빈 공간) */}
      <div style={{
        backgroundColor: '#fafafa',
        border: '2px dashed #ddd',
        borderRadius: '16px',
        padding: '60px',
        textAlign: 'center',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        fontSize: '15px'
      }}>
        자유롭게 추가하실 수 있는 빈 공간입니다. <br/>(사진 갤러리, 표, 조직도, 게시판 등을 넣을 수 있습니다)
      </div>
    </div>
  );
}

function Kids() {
  return <DepartmentInfo 
    title="유초등부" 
    subtitle="말씀 안에서 쑥쑥 자라나는 다음 세대" 
    imageSrc="https://images.unsplash.com/photo-1519340333755-56e9c1d04079?w=800&q=80"
    description={<>
      평화교회 유초등부는 어린이들이 하나님의 사랑을 배우고, 예수님의 성품을 닮아가는 건강한 공동체입니다. <br/><br/>
      매주 신나는 찬양과 재미있는 성경 이야기, 그리고 다양한 공과 활동을 통해 믿음의 기초를 튼튼하게 다집니다.
    </>}
  />;
}

function Youth() {
  return <DepartmentInfo 
    title="중고등부" 
    subtitle="세상의 빛과 소금으로 세워지는 청소년" 
    imageSrc="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
    description={<>
      사춘기의 고민과 학업의 부담 속에서도 하나님 안에서 참된 비전을 발견하도록 돕습니다. <br/><br/>
      진실한 예배와 깊이 있는 제자훈련을 통해 세상을 이길 믿음의 세대로 양육합니다.
    </>}
  />;
}

function YoungAdult() {
  return <DepartmentInfo 
    title="청년부" 
    subtitle="진리와 사랑으로 하나 되는 청년 공동체" 
    imageSrc="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
    description={<>
      열정적으로 하나님을 예배하며, 일상 속에서 그리스도의 향기를 발하는 청년부입니다. <br/><br/>
      서로의 삶을 나누는 소그룹 모임과 국내외 선교 활동을 통해 실천하는 신앙을 배웁니다.
    </>}
  />;
}

function Womens() {
  return <DepartmentInfo 
    title="여선교회" 
    subtitle="기도와 섬김으로 교회를 세우는 어머니들의 모임" 
    imageSrc="https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=800&q=80"
    description={<>
      교회의 든든한 기도의 기둥이자, 소외된 이웃을 향한 따뜻한 섬김을 실천하는 여선교회입니다. <br/><br/>
      정기적인 기도 모임과 다양한 구제 활동, 교회 내 행사 지원 등을 통해 그리스도의 사랑을 나눕니다.
    </>}
  />;
}

function Mens() {
  return <DepartmentInfo 
    title="남선교회" 
    subtitle="말씀 위에 굳게 서서 헌신하는 아버지들의 공동체" 
    imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
    description={<>
      가정과 교회의 영적 리더로서 든든히 서가기 위해 함께 모여 말씀을 나누고 기도하는 남선교회입니다. <br/><br/>
      교회의 굵직한 사역들을 앞장서서 감당하며, 지역 사회를 위한 봉사와 선교 활동에 힘쓰고 있습니다.
    </>}
  />;
}

/* ─────────────────────────── Main Education Layout ─────────────────────────── */

const MENU_ITEMS = [
  { path: '/education/kids', label: '유초등부' },
  { path: '/education/youth', label: '중고등부' },
  { path: '/education/young-adult', label: '청년부' },
  { path: '/education/womens', label: '여선교회' },
  { path: '/education/mens', label: '남선교회' },
];

export default function Education() {
  const location = useLocation();
  const currentPath = location.pathname === '/education' ? '/education/kids' : location.pathname;
  const currentMenu = MENU_ITEMS.find(item => item.path === currentPath) || MENU_ITEMS[0];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      
      {/* ── Full Width Top Banner ── */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        {/* Semi-transparent overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 700, letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            교육과선교
          </h1>
        </div>
      </div>

      {/* ── Body: Sidebar + Content ── */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
        display: 'flex',
        gap: '60px',
        alignItems: 'flex-start'
      }}>
        
        {/* ── Sidebar (LNB) ── */}
        <nav style={{
          width: '240px',
          flexShrink: 0
        }}>
          {/* LNB Header */}
          <div style={{
            background: '#2a4358',
            color: '#fff',
            textAlign: 'center',
            padding: '18px 0',
            fontSize: '20px',
            fontWeight: 500
          }}>
            교육과선교
          </div>
          
          {/* LNB Menu */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #eee' }}>
            {MENU_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.path} style={{ borderBottom: '1px solid #eee' }}>
                  <Link 
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 20px',
                      fontSize: '15px',
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? '#e64835' : '#444',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#e64835';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#444';
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && <ChevronRight size={16} color="#e64835" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Main Content ── */}
        <div style={{
          flex: 1,
          minWidth: 0
        }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#888', marginBottom: '16px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#888', textDecoration: 'none' }} title="홈으로 이동" onMouseEnter={(e) => e.currentTarget.style.color = '#333'} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
              <Home size={12} />
            </Link>
            <ChevronRight size={12} color="#ccc" />
            <Link to="/education" style={{ color: '#888', textDecoration: 'none' }} title="교육과선교로 이동" onMouseEnter={(e) => e.currentTarget.style.color = '#333'} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
              교육과선교
            </Link>
            <ChevronRight size={12} color="#ccc" />
            <span style={{ color: '#333' }}>{currentMenu.label}</span>
          </div>

          {/* Page Title */}
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'normal', 
            color: '#333', 
            paddingBottom: '20px', 
            borderBottom: '1px solid #999',
            marginBottom: '40px'
          }}>
            {currentMenu.label}
          </h2>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Routes>
                <Route path="/" element={<Kids />} />
                <Route path="kids" element={<Kids />} />
                <Route path="youth" element={<Youth />} />
                <Route path="young-adult" element={<YoungAdult />} />
                <Route path="womens" element={<Womens />} />
                <Route path="mens" element={<Mens />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
