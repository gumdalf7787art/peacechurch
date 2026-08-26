import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/* ─────────────────────────── Sub-page Components ─────────────────────────── */

function Vision() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        교회비전과 목표
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      
      <div style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        <p style={{ marginBottom: '24px' }}>
          평화교회는 예수 그리스도의 복음을 전하고, 하나님 나라를 이 땅에 실현하기 위해 세워진 교회입니다.
        </p>
        <div style={{ background: '#f0f4ff', borderLeft: '4px solid #2563eb', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: '28px' }}>
          <p style={{ fontSize: '18px', fontWeight: 600, color: '#1e40af', marginBottom: '8px' }}>우리의 비전</p>
          <p style={{ color: '#374151' }}>
            "사랑으로 하나 되어, 세상을 변화시키는 교회"
          </p>
        </div>
        <p style={{ marginBottom: '16px' }}>
          우리는 세상을 섬기는 빛과 소금의 역할을 감당하며, 영혼을 구원하고 제자를 삼는 사명에 헌신합니다.
          성도 한 사람 한 사람이 예수님의 제자로 자라나, 가정과 직장과 이웃 속에서 복음의 능력을 나타내는 것이 우리의 소망입니다.
        </p>
      </div>
    </div>
  );
}

function Pastor() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        담임목사 소개
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>
          <div style={{ 
            width: '220px', height: '280px', background: 'linear-gradient(145deg, #f3f4f6, #e5e7eb)', 
            borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#9ca3af', fontSize: '14px', flexShrink: 0
          }}>
            사진 등록
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1f2937', marginBottom: '6px' }}>홍길동 담임목사</h3>
            <p style={{ fontSize: '15px', fontWeight: 500, color: '#2563eb', marginBottom: '20px', fontStyle: 'italic' }}>
              "진리와 사랑으로 세상을 변화시키는 교회"
            </p>
            <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
              환영합니다. 평화교회 담임목사입니다.<br/><br/>
              우리 교회는 이웃을 내 몸과 같이 사랑하라는 주님의 말씀을 실천하며,
              지역 사회에 선한 영향력을 끼치는 믿음의 공동체로 나아가고 있습니다.
              누구든지 오셔서 참된 평안과 은혜를 누리시길 기도합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Staff() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        섬기는 사람들
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        평화교회를 위해 헌신하며 섬기는 교역자 및 시무장로님들을 소개합니다.
      </p>
    </div>
  );
}

function WorshipInfo() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        예배안내
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        주일예배, 수요예배, 금요철야, 새벽예배 등의 시간과 장소를 안내합니다.
      </p>
    </div>
  );
}

function Bulletin() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        교회주보
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        매주 발행되는 교회 주보를 온라인으로 확인하실 수 있습니다.
      </p>
    </div>
  );
}

function Offering() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        온라인헌금
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        온라인으로 헌금하실 수 있는 계좌번호를 안내해 드립니다.
      </p>
    </div>
  );
}

function Facility() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        시설안내
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        본당, 식당, 교육관 등 교회의 다양한 시설을 안내합니다.
      </p>
    </div>
  );
}

function LocationPage() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px' }}>
        오시는 길
      </h2>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '2px', marginBottom: '32px' }} />
      <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        메인 홈페이지 하단의 [오시는 길] 안내를 참조해주시기 바랍니다.
      </p>
    </div>
  );
}

/* ─────────────────────────── Main About Layout ─────────────────────────── */

const MENU_ITEMS = [
  { path: '/about/vision', label: '교회비전과 목표' },
  { path: '/about/pastor', label: '담임목사 소개' },
  { path: '/about/staff', label: '섬기는 사람들' },
  { path: '/about/worship', label: '예배안내' },
  { path: '/about/bulletin', label: '교회주보' },
  { path: '/about/offering', label: '온라인헌금' },
  { path: '/about/facility', label: '시설안내' },
  { path: '/about/location', label: '오시는길' },
];

export default function About() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f7' }}>
      
      {/* ── Hero Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.15)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '10%',
          width: '140px', height: '140px', borderRadius: '50%',
          background: 'rgba(96, 165, 250, 0.1)'
        }} />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '42px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-1px', position: 'relative', zIndex: 1 }}
        >
          교회소개
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1 }}
        >
          하나님의 사랑과 은혜가 머무는 평화교회입니다
        </motion.p>
      </div>

      {/* ── Body: Sidebar + Content ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '48px 32px 80px',
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start'
      }}>
        
        {/* ── Sidebar ── */}
        <nav style={{
          width: '240px',
          flexShrink: 0,
          position: 'sticky',
          top: '100px'
        }}>
          <h3 style={{
            fontSize: '18px', fontWeight: 700, color: '#111',
            paddingBottom: '16px', marginBottom: '8px',
            borderBottom: '2px solid #111'
          }}>
            교회소개
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {MENU_ITEMS.map((item) => {
              const isActive = location.pathname === item.path || 
                (location.pathname === '/about' && item.path === '/about/vision');
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      fontSize: '15px',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#2563eb' : '#555',
                      background: isActive ? '#eff6ff' : 'transparent',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                      marginBottom: '2px'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#f9fafb';
                        e.currentTarget.style.color = '#111';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#555';
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && <ChevronRight size={16} style={{ color: '#2563eb' }} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Main Content ── */}
        <div style={{
          flex: 1,
          minWidth: 0,
          background: '#fff',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
          border: '1px solid rgba(0,0,0,0.06)',
          minHeight: '500px'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Routes>
                <Route path="/" element={<Vision />} />
                <Route path="vision" element={<Vision />} />
                <Route path="pastor" element={<Pastor />} />
                <Route path="staff" element={<Staff />} />
                <Route path="worship" element={<WorshipInfo />} />
                <Route path="bulletin" element={<Bulletin />} />
                <Route path="offering" element={<Offering />} />
                <Route path="facility" element={<Facility />} />
                <Route path="location" element={<LocationPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
