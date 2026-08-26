import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, MapPin } from 'lucide-react';

/* ─────────────────────────── Sub-page Components ─────────────────────────── */

function Vision() {
  return (
    <div>
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#cc0000', marginBottom: '16px' }}>
        교회비전과 목표
      </h3>
      <div style={{ fontSize: '15px', color: '#444', lineHeight: 1.8, wordBreak: 'keep-all' }}>
        평화교회는 예수 그리스도의 복음을 전하고, 하나님 나라를 이 땅에 실현하기 위해 세워진 교회입니다.
      </div>
    </div>
  );
}

function Pastor() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#111', marginBottom: '16px', lineHeight: 1.4 }}>
          "그리스도의 평화가 머무는 교회,<br/>세상에 그 평화를 전하는 교회"
        </h3>
      </div>

      <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Left Side: Photo & Profile */}
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ 
            width: '100%', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/pastor-profile.jpg" 
              alt="장성진 담임목사" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          
          <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#222', borderBottom: '2px solid #cc0000', paddingBottom: '12px', marginBottom: '16px' }}>PROFILE</h4>
            <div style={{ fontSize: '15px', color: '#444', lineHeight: 1.8 }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#111', marginBottom: '12px' }}>장성진 담임목사</div>
              <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: '#555' }}>
                <li>감리교신학교 신학과 졸업</li>
                <li>감리교신학교 대학원 졸업 (조직신학 전공)</li>
                <li>Wesley University of Washington D.C.<br/><span style={{ fontSize: '13px', color: '#888' }}>D.Min. Asian Track (2011–2013)</span></li>
                <li>필리핀 이주 노동자 목회 (2004–현재)</li>
                <li>평화감리교회 담임 (2016–현재)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Greeting Text */}
        <div style={{ flex: '1', minWidth: '300px', fontSize: '16px', color: '#333', lineHeight: 1.9, wordBreak: 'keep-all' }}>
          <p style={{ marginBottom: '20px' }}>
            평화교회 홈페이지를 찾아주신 여러분을 주님의 이름으로 환영합니다.<br/>
            평화교회를 섬기고 있는 담임목사 <strong style={{ color: '#111' }}>장성진</strong>입니다.
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            교회는 단순히 사람들이 모여 예배드리는 장소가 아니라, 하나님의 사랑을 배우고 그 사랑을 삶으로 살아내는 공동체라고 믿습니다.
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            저는 목회의 길을 걸어오면서 다양한 삶의 자리에서 사람들을 만나왔습니다. 특히 2004년부터 필리핀 이주 노동자들을 섬기며, 낯선 땅에서 살아가는 이들의 기쁨과 아픔, 외로움과 소망을 가까이에서 함께해 왔습니다.
          </p>

          <p style={{ marginBottom: '20px' }}>
            그 시간을 통해 한 가지를 더욱 깊이 깨닫게 되었습니다.
          </p>

          <div style={{ 
            padding: '24px', 
            backgroundColor: '#fff', 
            borderLeft: '4px solid #cc0000',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            marginBottom: '24px',
            fontSize: '17px',
            fontWeight: '600',
            color: '#111'
          }}>
            복음은 말에만 머무는 것이 아니라 한 사람의 삶 곁으로 다가가 함께 울고, 함께 기뻐하며, 함께 걸어가는 사랑이어야 한다는 것입니다.
          </div>

          <p style={{ marginBottom: '20px' }}>
            2016년부터 평화교회를 섬기면서도 이 마음을 잊지 않으려고 노력해 왔습니다.
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            우리 교회가 예배의 기쁨이 살아 있는 교회, 말씀을 통해 삶의 방향을 발견하는 교회, 다음 세대가 믿음 안에서 꿈을 키우는 교회가 되기를 소망합니다. 또한 교회 안에만 머무르지 않고 이웃의 아픔을 돌아보며, 지역사회와 세상을 향해 예수 그리스도의 사랑과 평화를 나누는 교회가 되기를 기도합니다.
          </p>

          <p style={{ marginBottom: '20px' }}>
            신앙생활을 처음 시작하시는 분도, 오랫동안 교회를 떠나 계셨던 분도, 삶의 어려움 가운데 위로와 새로운 길을 찾고 계신 분도 평화교회에서는 모두 소중한 한 사람입니다.
          </p>

          <p style={{ marginBottom: '20px' }}>
            누구든 편안한 마음으로 찾아오십시오.<br/>
            함께 예배하고, 함께 말씀을 배우며, 서로의 삶을 나누면서 하나님께서 우리에게 허락하신 믿음의 길을 함께 걸어가고 싶습니다.
          </p>

          <p style={{ marginBottom: '32px' }}>
            평화교회가 여러분의 삶에 따뜻한 쉼이 되고, 다시 일어설 수 있는 소망이 되며, 하나님의 평화를 세상으로 전하는 믿음의 공동체가 되기를 소망합니다.<br/><br/>
            여러분과 평화교회에서 만나 뵙기를 기다리겠습니다.<br/>
            하나님의 은혜와 평화가 여러분의 가정과 삶 가운데 늘 함께하시기를 기도합니다.
          </p>

          <div style={{ textAlign: 'right', fontSize: '18px', fontWeight: 'bold', color: '#111' }}>
            평화교회 담임목사 장 성 진 드림
          </div>
        </div>
      </div>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '48px' }}>
        <StaffCard name="김목사" role="부목사" department="교구 총괄" />
        <StaffCard name="이전도사" role="전도사" department="유초등부 담당" />
        <StaffCard name="박전도사" role="전도사" department="청년부 담당" />
        <StaffCard name="최전도사" role="전도사" department="중고등부 담당" />
      </div>

      {/* ── 장로 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px', marginBottom: '24px' }}>장로</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '48px' }}>
        <StaffCard name="최장로" role="시무장로" />
        <StaffCard name="정장로" role="시무장로" />
        <StaffCard name="강장로" role="시무장로" />
      </div>

      {/* ── 사역자 ── */}
      <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px', marginBottom: '24px' }}>사역자</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '48px' }}>
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
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
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
function Offering() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px' }}>온라인 헌금안내</h3>
      </div>
      
      {/* ── Banner + Card Container ── */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        padding: '80px 20px',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '480px'
      }}>
        {/* Background Image (Offering / Donation vibe) */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop")', // Donation/Giving image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>

        {/* Info Card */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#fff',
          padding: '48px 40px',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          textAlign: 'center',
          maxWidth: '480px',
          width: '100%'
        }}>
          <div style={{ fontSize: '14px', color: '#cc0000', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '3px' }}>OFFERING</div>
          <h4 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111', marginBottom: '24px', lineHeight: 1.4 }}>
            마음을 담아 드리는<br/>온라인 헌금 안내
          </h4>
          <div style={{ width: '40px', height: '3px', backgroundColor: '#cc0000', margin: '0 auto 32px auto' }}></div>
          
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '28px', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ fontSize: '15px', color: '#64748b', marginBottom: '8px', fontWeight: '500' }}>농협은행</div>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#0f172a', letterSpacing: '1px' }}>123-4567-8901-23</div>
            <div style={{ fontSize: '15px', color: '#475569', marginTop: '12px' }}>예금주 : 평화교회</div>
          </div>
          
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, wordBreak: 'keep-all' }}>
            * 헌금 송금 시 이름과 헌금 종류<br/>(예: 홍길동십일조)를 꼭 기재해 주시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
function Facility() {
  const facilities = [
    { floor: '4F', title: '청소년실 / 하늘정원', desc: '중·고등부 예배실 및 다음 세대를 위한 야외 휴게 옥상 정원입니다.' },
    { floor: '3F', title: '비전홀 / 유아실', desc: '유치·아동부 예배 및 다양한 모임이 진행되며, 영유아를 동반한 부모님들을 위한 쾌적한 유아실이 마련되어 있습니다.' },
    { floor: '2F', title: '소예배실 / 목양실 / 교역자실', desc: '새벽기도회 및 소규모 집회가 열리는 소예배실과, 담임목사님 집무실 및 교역자 사무 공간입니다.' },
    { floor: '1F', title: '로비 / 사무실 / 카페 만남', desc: '교회 출입구이자 성도들의 따뜻한 친교 공간인 카페, 그리고 행정 업무를 지원하는 사무실이 있습니다.' },
    { floor: 'B1', title: '글로리아홀 (본당) / 새가족실', desc: '주일 대예배 및 주요 집회가 드려지는 웅장하고 은혜로운 본당 공간과 새가족을 환영하는 곳입니다.' },
    { floor: 'B2', title: '주차장 / 기계실', desc: '성도님들의 편리한 주차를 돕는 넓은 지하 주차 공간입니다.' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px' }}>층별 시설안내</h3>
      </div>
      
      <div style={{ borderTop: '2px solid #333' }}>
        {facilities.map((item, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            borderBottom: '1px solid #e5e7eb',
            padding: '36px 0',
            alignItems: 'center'
          }}>
            {/* ── Left: Floor Number ── */}
            <div style={{ 
              width: '140px', 
              flexShrink: 0, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '2px dashed #e2e8f0',
              paddingRight: '32px',
              marginRight: '40px'
            }}>
              <span style={{ fontSize: '36px', fontWeight: '900', color: '#cc0000', letterSpacing: '2px' }}>{item.floor}</span>
              <span style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>FLOOR</span>
            </div>
            
            {/* ── Right: Description ── */}
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111', marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.6, wordBreak: 'keep-all', margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function LocationPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#222', borderLeft: '4px solid #cc0000', paddingLeft: '12px' }}>오시는 길</h3>
      </div>
      
      {/* ── Top: Map Placeholder ── */}
      <div style={{ 
        width: '100%', 
        height: '400px', 
        backgroundColor: '#eef1f5', 
        borderRadius: '12px',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '40px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ 
          width: '64px', height: '64px', backgroundColor: '#fbbf24', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <MapPin size={32} color="#111" />
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>카카오맵 API 연동 영역</div>
        <div style={{ fontSize: '14px', color: '#666' }}>실제 서비스 시 카카오맵 스크립트를 삽입하여 동적 지도가 표시됩니다.</div>
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
            <div style={{ fontSize: '16px', color: '#333', marginBottom: '6px' }}>서울특별시 중구 평화로 1004</div>
            <div style={{ fontSize: '14px', color: '#666' }}>(지번: 서울특별시 중구 평화동 1-1)</div>
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

const MENU_ITEMS = [
  { path: '/about/vision', label: '교회비전과 목표' },
  { path: '/about/pastor', label: '담임목사 소개' },
  { path: '/about/staff', label: '섬기는 분' },
  { path: '/about/worship', label: '예배안내' },
  { path: '/about/bulletin', label: '교회주보' },
  { path: '/about/offering', label: '온라인헌금' },
  { path: '/about/facility', label: '시설안내' },
  { path: '/about/location', label: '찾아오시는 길' },
];

export default function About() {
  const location = useLocation();
  const currentPath = location.pathname === '/about' ? '/about/vision' : location.pathname;
  const currentMenu = MENU_ITEMS.find(item => item.path === currentPath) || MENU_ITEMS[0];

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
            교회소개
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
            <Link to="/about/vision" style={{ color: '#888', textDecoration: 'none' }} title="교회소개로 이동" onMouseEnter={(e) => e.currentTarget.style.color = '#333'} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
              교회소개
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
