import useSubMenus from '../hooks/useSubMenus';
import DynamicSubPage from './DynamicSubPage';
import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, MapPin, BookOpen, Heart, Users, Globe, Flame } from 'lucide-react';

/* ─────────────────────────── Sub-page Components ─────────────────────────── */

function Vision() {
  const coreValues = [
    { num: '01', title: '말씀 위에 바로 서는 교회', desc: '하나님의 말씀을 신앙과 삶의 중심에 두고, 말씀을 배우고 묵상하며 삶으로 실천하는 성도를 세워갑니다.', icon: <BookOpen className="w-8 h-8" /> },
    { num: '02', title: '기도하는 교회', desc: '기도를 통해 하나님의 뜻을 구하며 개인과 가정, 교회와 이웃, 그리고 세상을 위해 함께 기도하는 공동체가 됩니다.', icon: <Flame className="w-8 h-8" /> },
    { num: '03', title: '다음 세대를 세우는 교회', desc: '어린이와 청소년, 청년들이 믿음 안에서 자신의 꿈과 사명을 발견하고 세상을 섬기는 그리스도인으로 성장하도록 돕습니다.', icon: <Users className="w-8 h-8" /> },
    { num: '04', title: '이웃을 사랑하고 섬기는 교회', desc: '도움이 필요한 이웃과 소외된 이들에게 먼저 다가가 예수님의 사랑을 말이 아닌 삶과 행동으로 전합니다.', icon: <Heart className="w-8 h-8" /> },
    { num: '05', title: '세상에 복음을 전하는 교회', desc: '지역사회를 넘어 국내외 선교와 이주민 사역에 동참하며 모든 민족과 세대를 향해 복음과 사랑을 나누는 교회가 됩니다.', icon: <Globe className="w-8 h-8" /> },
  ];

  const goals = [
    { title: '예배가 살아있는 교회', desc: '하나님을 기쁘시게 하는 진실한 예배를 드립니다.' },
    { title: '말씀으로 성장하는 교회', desc: '말씀을 배우고 삶으로 살아내는 성숙한 그리스도인을 세웁니다.' },
    { title: '기도로 하나 되는 교회', desc: '서로를 위해 기도하며 사랑과 믿음으로 하나 되는 공동체를 만듭니다.' },
    { title: '다음 세대와 함께하는 교회', desc: '다음 세대가 교회의 미래가 아니라 오늘의 교회로 함께 서도록 돕습니다.' },
    { title: '지역과 세상을 섬기는 교회', desc: '교회의 문을 세상을 향해 열고 도움이 필요한 곳으로 먼저 찾아갑니다.' },
  ];

  return (
    <div className="flex flex-col space-y-16 md:space-y-24 py-4 md:py-8 px-2 md:px-0">
      {/* 1. 우리의 비전 */}
      <section className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#8DC63F] font-bold tracking-widest text-[12px] md:text-sm mb-3 md:mb-4 block">OUR VISION</span>
          <h2 className="text-[28px] md:text-4xl font-extrabold text-black mb-8 md:mb-10 tracking-tight">우리의 비전</h2>
          <div className="bg-[#f8f9fa] border-l-[4px] md:border-l-[6px] border-[#cc0000] p-6 md:p-14 rounded-r-2xl md:rounded-r-3xl shadow-sm text-left md:text-center relative">
            <h3 className="text-[20px] md:text-[32px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.5] tracking-tight">
              "예수 그리스도의 사랑으로 사람을 세우고,<br className="hidden md:block" /> 세상을 섬기는 교회"
            </h3>
            <div className="text-[15px] md:text-lg text-gray-700 leading-relaxed md:leading-loose break-keep max-w-4xl mx-auto space-y-4 md:space-y-5">
              <p>평화교회는 예수 그리스도를 삶의 유일한 길로 고백하며, 말씀과 기도 위에 굳게 서서 하나님의 사랑을 세상 가운데 나누는 교회를 꿈꿉니다.</p>
              <p>교회 안에서만 머무르는 신앙이 아니라 가정과 일터, 이웃과 지역사회 속에서 그리스도의 사랑을 실천하며, 상처받은 이들을 품고 소외된 이들과 함께하는 것이 우리의 사명입니다.</p>
              <p>한 사람의 변화가 한 가정을 변화시키고, 한 가정의 변화가 지역사회를 변화시키며, 그 변화가 세상을 향한 하나님의 사랑으로 이어지기를 소망합니다.</p>
              <p className="font-semibold text-black mt-6 md:mt-8 text-[16px] md:text-[19px]">
                평화교회는 모든 세대가 믿음 안에서 함께 성장하고 세상 속에서 복음의 빛을 밝히는 <strong className="text-[#cc0000] font-extrabold">건강하고 따뜻한 신앙공동체</strong>를 세워가겠습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. 우리가 세워가는 교회 */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[26px] md:text-4xl font-extrabold text-black tracking-tight">우리가 세워가는 교회</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {coreValues.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(204,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5 md:mb-6">
                <div className="text-[#cc0000] bg-[#cc0000]/10 p-3 md:p-4 rounded-xl group-hover:scale-110 group-hover:bg-[#cc0000] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(value.icon, { className: 'w-6 h-6 md:w-8 md:h-8' })}
                </div>
                <span className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-[#cc0000]/20 transition-colors duration-300">{value.num}</span>
              </div>
              <h3 className="text-[18px] md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">{value.title}</h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed break-keep">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. 우리의 목표 */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[26px] md:text-4xl font-extrabold text-black tracking-tight">우리의 목표</h2>
        </motion.div>

        <div className="bg-black text-white rounded-[24px] md:rounded-3xl p-6 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 md:w-80 h-40 md:h-80 bg-[#cc0000] opacity-10 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10 relative z-10">
            {goals.map((goal, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-center space-x-2.5 md:space-x-3 mb-2 md:mb-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#cc0000] shadow-[0_0_10px_rgba(204,0,0,0.8)]"></div>
                  <h3 className="text-[17px] md:text-[20px] font-bold text-white tracking-tight">{goal.title}</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-gray-400 pl-4 md:pl-5 break-keep leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ONE WAY JESUS */}
      <section>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center overflow-hidden shadow-sm"
        >
          <span className="text-[14px] md:text-[18px] font-black text-[#cc0000] tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 block">ONE WAY JESUS</span>
          <h2 className="text-[22px] md:text-[36px] font-extrabold text-black mb-5 md:mb-8 tracking-tight">
            오직 예수, 사랑으로 세상을 향하여
          </h2>
          
          <p className="text-[14px] md:text-[17px] text-gray-700 leading-relaxed md:leading-relaxed mb-8 md:mb-10 break-keep max-w-2xl mx-auto px-2 md:px-0">
            평화교회는 예수 그리스도를 따라 <strong className="text-black font-bold">예배하고, 배우고, 사랑하며, 섬기고, 전하는 교회</strong>가 되겠습니다.<br className="hidden md:block"/>
            그리고 우리를 통해 한 사람이 살아나고, 한 가정이 회복되며,<br className="hidden md:block"/>
            지역사회와 세상에 하나님의 평화가 흘러가기를 소망합니다.
          </p>

          <div className="inline-block mt-1 md:mt-2 border-t border-[#cc0000] pt-4 md:pt-6">
            <h3 className="text-[14px] md:text-[20px] font-bold text-gray-900 tracking-wider md:tracking-widest">
              평화교회 · Peace Methodist Church
            </h3>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function StaffCard({ name, role, department }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ width: '100%', height: '190px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '14px' }}>사진</div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '13px', color: '#cc0000', fontWeight: '600', marginBottom: '6px' }}>{role}</div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#111', marginBottom: department ? '6px' : '0' }}>{name}</div>
        {department && <div style={{ fontSize: '13px', color: '#6b7280' }}>{department}</div>}
      </div>
    </div>
  );
}

function Staff() {
  return (
    <div>
      {/* ── 목회자 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px', marginBottom: '24px' }}>목회자</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-12">
        <StaffCard name="김목사" role="부목사" department="교구 총괄" />
        <StaffCard name="이전도사" role="전도사" department="유초등부 담당" />
        <StaffCard name="박전도사" role="전도사" department="청년부 담당" />
        <StaffCard name="최전도사" role="전도사" department="중고등부 담당" />
      </div>

      {/* ── 장로 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px', marginBottom: '24px' }}>장로</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-12">
        <StaffCard name="최장로" role="시무장로" />
        <StaffCard name="정장로" role="시무장로" />
        <StaffCard name="강장로" role="시무장로" />
      </div>

      {/* ── 사역자 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px', marginBottom: '24px' }}>사역자</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-12">
        <StaffCard name="윤간사" role="행정간사" department="사무실 및 행정" />
        <StaffCard name="조지휘자" role="지휘자" department="할렐루야 찬양대" />
        <StaffCard name="홍반주자" role="반주자" department="할렐루야 찬양대" />
      </div>
    </div>
  );
}

function WorshipInfo() {
  return (
    <div>
      {/* ── Page Specific Hero Image ── */}
      <div style={{ 
        width: '100%', 
        height: '150px', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop")', // 예배 관련 이미지 (성경/교회)
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#fff',
        marginBottom: '48px',
        position: 'relative'
      }}>
        {/* 텍스트가 잘 보이도록 어두운 오버레이 추가 */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: '28px', letterSpacing: '2px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>예배안내</div>
          <div style={{ fontSize: '13px', letterSpacing: '4px', opacity: 0.9, marginTop: '6px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Regular worship</div>
        </div>
      </div>

      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#cc0000', marginBottom: '16px' }}>
        주일예배안내
      </h3>
      
      <table style={{ width: '100%', borderTop: '2px solid #cc0000', borderBottom: '1px solid #ccc', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px', marginBottom: '48px' }}>
        <thead>
          <tr>
            <th style={{ width: '15%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>예배</th>
            <th style={{ width: '15%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>시간</th>
            <th style={{ width: '25%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>장소</th>
            <th style={{ width: '45%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>예배소개</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#111', fontWeight: '500' }}>1부예배</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#333' }}>오전 7시</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#777' }}>글로리아홀(B1)<br/>-본당-</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e0e0e0', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>주일 낮 예배에 참석하지 못하는 성도들을 위해 아침 일찍<br/>드리는 예배입니다.</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#111', fontWeight: '500' }}>2부예배</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#333' }}>오전 9시</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#777' }}>글로리아홀(B1)<br/>-본당-</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e0e0e0', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>주일 낮 2부 예배입니다.</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 0', color: '#111', fontWeight: '500' }}>3부예배</td>
            <td style={{ padding: '12px 0', color: '#333' }}>오전 11시</td>
            <td style={{ padding: '12px 0', color: '#777' }}>글로리아홀(B1)<br/>-본당-</td>
            <td style={{ padding: '12px 16px', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>주일 낮 3부 예배입니다. (대예배)</td>
          </tr>
        </tbody>
      </table>

      {/* ── 주중예배안내 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#cc0000', marginBottom: '16px' }}>
        주중예배안내
      </h3>
      <table style={{ width: '100%', borderTop: '2px solid #cc0000', borderBottom: '1px solid #ccc', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px', marginBottom: '48px' }}>
        <thead>
          <tr>
            <th style={{ width: '15%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>예배</th>
            <th style={{ width: '15%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>시간</th>
            <th style={{ width: '25%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>장소</th>
            <th style={{ width: '45%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>예배소개</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#111', fontWeight: '500' }}>수요예배</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#333' }}>오후 7시 30분</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#777' }}>글로리아홀(B1)</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e0e0e0', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>한 주간의 삶을 돌아보며 말씀과 기도로 새 힘을 얻는 예배입니다.</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#111', fontWeight: '500' }}>금요기도회</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#333' }}>오후 9시 00분</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#777' }}>글로리아홀(B1)</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e0e0e0', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>뜨거운 찬양과 기도로 성령의 충만함을 간구하는 금요 집회입니다.</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 0', color: '#111', fontWeight: '500' }}>새벽기도회</td>
            <td style={{ padding: '12px 0', color: '#333' }}>평일 오전 5시</td>
            <td style={{ padding: '12px 0', color: '#777' }}>소예배실(2F)</td>
            <td style={{ padding: '12px 16px', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>하루의 첫 시간을 하나님께 드리며 시작하는 경건한 새벽 기도회입니다.</td>
          </tr>
        </tbody>
      </table>

      {/* ── 다음세대 예배안내 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#cc0000', marginBottom: '16px' }}>
        다음세대 예배안내
      </h3>
      <table style={{ width: '100%', borderTop: '2px solid #cc0000', borderBottom: '1px solid #ccc', borderCollapse: 'collapse', textAlign: 'center', fontSize: '14px' }}>
        <thead>
          <tr>
            <th style={{ width: '15%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>예배</th>
            <th style={{ width: '15%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>시간</th>
            <th style={{ width: '25%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>장소</th>
            <th style={{ width: '45%', padding: '14px 0', backgroundColor: '#f9f9f9', borderBottom: '1px solid #e0e0e0', color: '#555', fontWeight: 'bold' }}>예배소개</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#111', fontWeight: '500' }}>유치·아동부</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#333' }}>주일 오전 11시</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#777' }}>비전홀(3F)</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e0e0e0', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>아이들의 눈높이에 맞춘 말씀과 찬양으로 하나님을 알아가는 예배입니다.</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#111', fontWeight: '500' }}>중·고등부</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#333' }}>주일 오전 9시</td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', color: '#777' }}>청소년실(4F)</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid #e0e0e0', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>신앙의 기초를 다지고 비전을 발견하는 청소년 예배입니다.</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 0', color: '#111', fontWeight: '500' }}>청년부 예배</td>
            <td style={{ padding: '12px 0', color: '#333' }}>주일 오후 2시</td>
            <td style={{ padding: '12px 0', color: '#777' }}>글로리아홀(B1)</td>
            <td style={{ padding: '12px 16px', color: '#777', textAlign: 'left', lineHeight: 1.6 }}>열정적인 찬양과 삶에 적용되는 말씀이 선포되는 생동감 넘치는 예배입니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function BulletinCard({ date }) {
  return (
    <div 
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      }}
    >
      <div style={{
        width: '100%',
        height: '240px',
        backgroundColor: '#f8fafc',
        backgroundImage: 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9), linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        fontSize: '14px',
        borderBottom: '1px solid #e2e8f0'
      }}>
        주보 썸네일 이미지
      </div>
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937' }}>{date} 주보</div>
      </div>
    </div>
  );
}

function Bulletin() {
  const dummyBulletins = [
    '8월 23일', '8월 16일', '8월 9일', '8월 2일',
    '7월 26일', '7월 19일', '7월 12일', '7월 5일'
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px' }}>교회주보</h3>
        <span style={{ fontSize: '14px', color: '#666' }}>주보 썸네일을 클릭하면 원본 이미지를 볼 수 있습니다.</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {dummyBulletins.map((date, idx) => (
          <BulletinCard key={idx} date={date} />
        ))}
      </div>

      {/* ── Pagination ── */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px' }}>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer', color: '#666', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>
          {'<'}
        </button>
        
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cc0000', backgroundColor: '#cc0000', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
          1
        </button>
        
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer', color: '#666', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>
          2
        </button>
        
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer', color: '#666', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>
          3
        </button>

        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer', color: '#666', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
function LocationPage() {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao map SDK is not loaded.");
        return;
      }
      
      window.kakao.maps.load(() => {
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
              renderMap(fallbackCoords);
            }
          });
        } else {
          renderMap(fallbackCoords);
        }
      });
    };

    const timer = setTimeout(() => {
      initMap();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px' }}>오시는 길</h3>
      </div>
      
      {/* ── Top: Map Area ── */}
      <div style={{ 
        width: '100%', 
        height: '400px', 
        backgroundColor: '#eef1f5', 
        borderRadius: '12px',
        marginBottom: '40px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
      </div>

      {/* ── Bottom: Location Info ── */}
      <div style={{ borderTop: '2px solid #333' }}>
        
        {/* 연락처 */}
        <div style={{ display: 'flex', padding: '32px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ width: '140px', fontSize: '16px', fontWeight: 'bold', color: '#111', flexShrink: 0 }}>연락처</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', marginBottom: '16px' }}>
              <div style={{ width: '80px', fontSize: '15px', fontWeight: '600', color: '#444' }}>전화번호</div>
              <div style={{ fontSize: '15px', color: '#333' }}>02-123-4567</div>
            </div>
            <div style={{ display: 'flex', marginBottom: '16px' }}>
              <div style={{ width: '80px', fontSize: '15px', fontWeight: '600', color: '#444' }}>팩스</div>
              <div style={{ fontSize: '15px', color: '#333' }}>02-123-4568</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '80px', fontSize: '15px', fontWeight: '600', color: '#444' }}>이메일</div>
              <div style={{ fontSize: '15px', color: '#333' }}>peacechurch@example.com</div>
            </div>
          </div>
        </div>

        {/* 주소 */}
        <div style={{ display: 'flex', padding: '32px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ width: '140px', fontSize: '16px', fontWeight: 'bold', color: '#111', flexShrink: 0 }}>주소</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', color: '#333', marginBottom: '6px' }}>서울 중랑구 봉화산로 120</div>
            <div style={{ fontSize: '14px', color: '#666' }}>(지번: 서울 중랑구 신내동 613)</div>
          </div>
        </div>
        
        {/* 대중교통 */}
        <div style={{ display: 'flex', padding: '32px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ width: '140px', fontSize: '16px', fontWeight: 'bold', color: '#111', flexShrink: 0 }}>대중교통</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', marginBottom: '16px' }}>
              <div style={{ width: '80px', fontSize: '15px', fontWeight: '600', color: '#444' }}>지하철</div>
              <div style={{ fontSize: '15px', color: '#555' }}>1호선 평화역 3번 출구에서 도보 5분</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '80px', fontSize: '15px', fontWeight: '600', color: '#444' }}>버스</div>
              <div style={{ fontSize: '15px', color: '#555', lineHeight: 1.6 }}>
                간선: 100, 200, 300<br />
                지선: 1011, 2022
              </div>
            </div>
          </div>
        </div>

        {/* 주차 안내 */}
        <div style={{ display: 'flex', padding: '32px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ width: '140px', fontSize: '16px', fontWeight: 'bold', color: '#111', flexShrink: 0 }}>주차 안내</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', color: '#333', marginBottom: '6px' }}>교회 본관 지하 주차장 이용 가능 (무료)</div>
            <div style={{ fontSize: '14px', color: '#666' }}>주일에는 혼잡할 수 있으니 대중교통 이용을 권장합니다.</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

/* ─────────────────────────── Main About Layout ─────────────────────────── */



export default function About() {
  const MENU_ITEMS = useSubMenus('/about');
  const currentMenuItems = MENU_ITEMS.length > 0 ? MENU_ITEMS : [{ path: '/about/vision', label: '교회비전과 목표' }];

  const location = useLocation();
  const currentPath = location.pathname === '/about' ? '/about/vision' : location.pathname;
  const currentMenu = currentMenuItems.find(item => item.path === currentPath) || currentMenuItems[0];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      
      {/* ── Full Width Top Banner ── */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundImage: 'url("/sub-header-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        {/* Semi-transparent overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 700, letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {/* 교회소개 */}
          </h1>
        </div>
      </div>

      {/* ── Body: Sidebar + Content ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-5 py-8 md:py-[60px] flex flex-col md:flex-row gap-8 md:gap-[60px] items-start w-full">
        
        {/* ── Sidebar (LNB) ── */}
        <nav className="hidden md:block w-[240px] shrink-0">
          {/* LNB Header */}
          <div style={{
            background: '#2a4358',
            color: '#fff',
            textAlign: 'center',
            padding: '18px 0',
            fontSize: '20px',
            fontWeight: 500
          }}>
            교회소개
          </div>
          
          {/* LNB Menu */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #eee' }}>
            {currentMenuItems.map((item) => {
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
        <div className="flex-1 w-full min-w-0">
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#888', marginBottom: '16px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#888', textDecoration: 'none' }} title="홈으로 이동" onMouseEnter={(e) => e.currentTarget.style.color = '#333'} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
              <Home size={12} />
            </Link>
            <ChevronRight size={12} color="#ccc" />
            <Link to="/about/vision" style={{ color: '#888', textDecoration: 'none' }} title="교회소개로 이동" onMouseEnter={(e) => e.currentTarget.style.color = '#333'} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
              교회소개
            </Link>
            <ChevronRight size={12} color="#ccc" />
            <span style={{ color: '#333' }}>{currentMenu.label}</span>
          </div>

          {/* Page Title */}
          <h2 className="text-[26px] md:text-[32px] font-normal text-[#333] pb-4 md:pb-5 border-b border-[#999] mb-6 md:mb-10">
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
                <Route path="/" element={<Vision />} />
                <Route path="vision" element={<Vision />} />
                <Route path="pastor" element={<Pastor />} />
                <Route path="staff" element={<Staff />} />
                <Route path="worship" element={<WorshipInfo />} />
                <Route path="bulletin" element={<Bulletin />} />
                <Route path="offering" element={<Offering />} />
                <Route path="facility" element={<Facility />} />
                <Route path="location" element={<LocationPage />} />
                <Route path="*" element={<DynamicSubPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
