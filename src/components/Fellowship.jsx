import React from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Home, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type, Palette, Image as ImageIcon, Link2, List, ListOrdered, Settings2, Paperclip, UploadCloud } from 'lucide-react';

/* ─────────────────────────── Sub-page Components ─────────────────────────── */

function GraceDetail() {
  const { id } = useParams();
  
  return (
    <div>
      <div style={{ borderTop: '2px solid #333', borderBottom: '1px solid #eee', padding: '24px 16px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', margin: '0 0 16px 0' }}>
          [나눔] 이번 주일 말씀을 듣고 받은 은혜를 나눕니다
        </h3>
        <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#666' }}>
          <span>작성자: 김평화</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span>등록일: 2026.08.25</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span>조회수: 45</span>
        </div>
      </div>
      
      <div style={{ padding: '40px 16px', minHeight: '300px', fontSize: '16px', color: '#333', lineHeight: '1.8', borderBottom: '1px solid #eee' }}>
        <p>할렐루야, 평화교회 성도 여러분.</p>
        <p>이번 주일 목사님의 말씀을 듣고 제 삶을 다시 돌아보게 되었습니다.</p>
        <p>우리가 일상 속에서 무심코 지나쳤던 작은 은혜들이 얼마나 소중한지 깨닫는 귀한 시간이었습니다.</p>
        <br />
        <p>주님께서 언제나 우리와 함께 하심을 믿으며, 이번 한 주간도 주님 안에서 평안하시길 기도합니다.</p>
        <p>감사합니다.</p>
      </div>
      
      <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <Link to="/fellowship/grace" style={{ padding: '10px 24px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', borderRadius: '6px', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}>
          목록으로
        </Link>
      </div>
    </div>
  );
}

function GraceList() {
  const dummyPosts = Array.from({ length: 8 }).map((_, i) => ({
    id: 108 - i,
    title: `[나눔] 이번 주일 말씀을 듣고 받은 은혜를 나눕니다 ${i > 0 ? `(${i})` : ''}`,
    author: ['김평화', '이믿음', '박소망', '최사랑'][i % 4],
    date: `2026.08.${String(25 - i).padStart(2, '0')}`,
    views: Math.floor(Math.random() * 50) + 10
  }));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ color: '#666', margin: 0 }}>총 <span style={{ color: '#cc0000', fontWeight: 'bold' }}>108</span>건의 게시물이 있습니다.</p>
        <Link to="/fellowship/grace/write" style={{ padding: '10px 20px', backgroundColor: '#2a4358', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d2f3d'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2a4358'}>글쓰기</Link>
      </div>
      
      <div className="w-full">
        <table className="w-full border-t-[2px] border-[#333] border-collapse text-center text-[15px]">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
              <th className="hidden sm:table-cell py-4 px-2 w-[80px] font-semibold text-[#475569]">번호</th>
              <th className="py-4 px-2 font-semibold text-[#475569]">제목</th>
              <th className="hidden sm:table-cell py-4 px-2 w-[120px] font-semibold text-[#475569]">작성자</th>
              <th className="hidden sm:table-cell py-4 px-2 w-[120px] font-semibold text-[#475569]">등록일</th>
              <th className="hidden sm:table-cell py-4 px-2 w-[80px] font-semibold text-[#475569]">조회</th>
            </tr>
          </thead>
          <tbody>
            {dummyPosts.map(post => (
              <tr key={post.id} className="border-b border-[#f1f5f9] group">
                <td className="hidden sm:table-cell py-4 px-2 text-[#94a3b8]">{post.id}</td>
                <td className="py-4 px-2 text-left">
                  <Link to={`/fellowship/grace/${post.id}`} className="block no-underline text-inherit group-hover:text-[#cc0000] transition-colors mb-1 sm:mb-0">
                    {post.title}
                  </Link>
                  {/* Mobile only info stack */}
                  <div className="flex sm:hidden items-center gap-2 text-[13px] text-[#94a3b8] mt-2">
                    <span>{post.author}</span>
                    <span className="text-[#e2e8f0]">|</span>
                    <span>{post.date}</span>
                    <span className="text-[#e2e8f0]">|</span>
                    <span>조회 {post.views}</span>
                  </div>
                </td>
                <td className="hidden sm:table-cell py-4 px-2 text-[#64748b]">{post.author}</td>
                <td className="hidden sm:table-cell py-4 px-2 text-[#94a3b8]">{post.date}</td>
                <td className="hidden sm:table-cell py-4 px-2 text-[#94a3b8]">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '6px', cursor: 'pointer', color: '#666', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>&lt;</button>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cc0000', backgroundColor: '#cc0000', borderRadius: '6px', cursor: 'pointer', color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>1</button>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '6px', cursor: 'pointer', color: '#666', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>2</button>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '6px', cursor: 'pointer', color: '#666', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>3</button>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '6px', cursor: 'pointer', color: '#666', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>&gt;</button>
      </div>
    </div>
  );
}

function ToolbarButton({ children, title }) {
  return (
    <button 
      title={title}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '32px', height: '32px', background: 'transparent',
        border: 'none', borderRadius: '6px', color: '#64748b', cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#64748b'; }}
    >
      {children}
    </button>
  );
}

function GraceWrite() {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)', padding: '48px', border: '1px solid #f8fafc' }}>
      
      {/* Title Input */}
      <div style={{ marginBottom: '32px' }}>
        <input 
          type="text" 
          placeholder="제목을 입력하세요..." 
          style={{ 
            width: '100%', 
            padding: '16px 0', 
            border: 'none', 
            borderBottom: '2px solid #e2e8f0', 
            fontSize: '36px', 
            fontWeight: '800', 
            letterSpacing: '-1px',
            color: '#0f172a', 
            outline: 'none', 
            background: 'transparent',
            transition: 'border-color 0.3s ease'
          }} 
          onFocus={(e) => e.target.style.borderBottom = '2px solid #cc0000'} 
          onBlur={(e) => e.target.style.borderBottom = '2px solid #e2e8f0'} 
        />
      </div>

      {/* Editor Toolbar (Mockup) */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        gap: '8px', 
        padding: '12px 20px', 
        backgroundColor: '#f8fafc', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0',
        marginBottom: '24px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '16px', borderRight: '1px solid #cbd5e1' }}>
          <ToolbarButton title="글꼴 설정"><Type size={18} /></ToolbarButton>
          <select style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', color: '#475569', cursor: 'pointer', padding: '0 8px', fontWeight: '500' }}>
            <option>본문 고딕</option>
            <option>본문 명조</option>
            <option>나눔스퀘어</option>
          </select>
          <select style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', color: '#475569', cursor: 'pointer', padding: '0 8px', fontWeight: '500' }}>
            <option>11pt</option>
            <option>12pt</option>
            <option>14pt</option>
            <option>16pt</option>
            <option>20pt</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '16px', borderRight: '1px solid #cbd5e1' }}>
          <ToolbarButton title="굵게"><Bold size={18} /></ToolbarButton>
          <ToolbarButton title="기울임"><Italic size={18} /></ToolbarButton>
          <ToolbarButton title="밑줄"><Underline size={18} /></ToolbarButton>
          <ToolbarButton title="글자 색상"><Palette size={18} /></ToolbarButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '16px', borderRight: '1px solid #cbd5e1' }}>
          <ToolbarButton title="왼쪽 정렬"><AlignLeft size={18} /></ToolbarButton>
          <ToolbarButton title="가운데 정렬"><AlignCenter size={18} /></ToolbarButton>
          <ToolbarButton title="오른쪽 정렬"><AlignRight size={18} /></ToolbarButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '16px', borderRight: '1px solid #cbd5e1' }}>
          <ToolbarButton title="글머리 기호"><List size={18} /></ToolbarButton>
          <ToolbarButton title="번호 매기기"><ListOrdered size={18} /></ToolbarButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '16px', borderRight: '1px solid #cbd5e1' }}>
          <ToolbarButton title="자간 및 줄간격 설정"><Settings2 size={18} /></ToolbarButton>
          <ToolbarButton title="링크 삽입"><Link2 size={18} /></ToolbarButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#475569', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.borderColor = '#94a3b8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#cbd5e1'; }}>
            <ImageIcon size={16} /> 사진 첨부
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#475569', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.borderColor = '#94a3b8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#cbd5e1'; }}>
            <Paperclip size={16} /> 파일 첨부
          </button>
        </div>
      </div>

      {/* Content Editable Area for Rich Text Feel */}
      <div 
        contentEditable={true}
        suppressContentEditableWarning={true}
        style={{ 
          width: '100%', 
          minHeight: '500px', 
          padding: '32px', 
          border: '1px solid #e2e8f0', 
          borderRadius: '16px', 
          fontSize: '16px', 
          lineHeight: '1.8', 
          color: '#334155',
          outline: 'none', 
          backgroundColor: '#fff',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          boxSizing: 'border-box',
          position: 'relative'
        }} 
        onFocus={(e) => { e.target.style.borderColor = '#cc0000'; e.target.style.boxShadow = '0 0 0 4px rgba(204,0,0,0.05)'; }} 
        onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
      />
      
      {/* Footer Buttons */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '32px' }}>
        <Link to="/fellowship/grace" style={{ padding: '16px 48px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', color: '#475569', borderRadius: '12px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}>
          작성 취소
        </Link>
        <Link to="/fellowship/grace" style={{ padding: '16px 64px', background: 'linear-gradient(135deg, #cc0000 0%, #a30000 100%)', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 10px 20px -5px rgba(204,0,0,0.4)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(204,0,0,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(204,0,0,0.4)'; }}>
          글 등록하기
        </Link>
      </div>
    </div>
  );
}

function Grace() {
  return (
    <Routes>
      <Route path="/" element={<GraceList />} />
      <Route path="write" element={<GraceWrite />} />
      <Route path=":id" element={<GraceDetail />} />
    </Routes>
  );
}

function GalleryDetail() {
  const { id } = useParams();
  
  const imageIdx = parseInt(id) || 0;
  const images = [
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80',
    'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=1200&q=80',
    'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80',
    'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&q=80',
    'https://images.unsplash.com/photo-1519340333755-56e9c1d04079?w=1200&q=80'
  ];
  const imgSrc = images[imageIdx % images.length];

  return (
    <div>
      <div style={{ borderTop: '2px solid #333', borderBottom: '1px solid #eee', padding: '24px 16px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', margin: '0 0 16px 0' }}>
          2026년 평화교회 행사 스케치
        </h3>
        <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#666' }}>
          <span>작성자: 미디어팀</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span>등록일: 2026.08.20</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span>조회수: 124</span>
        </div>
      </div>
      
      <div style={{ padding: '40px 0', minHeight: '300px', fontSize: '16px', color: '#333', lineHeight: '1.8', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <img src={imgSrc} alt="행사 사진" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
        </div>
        <p style={{ textAlign: 'left', padding: '0 16px' }}>이번 주일에 있었던 특별 행사 및 예배 스케치입니다.</p>
        <p style={{ textAlign: 'left', padding: '0 16px' }}>함께 웃고 은혜 나누는 성도님들의 모습 속에서 참된 기쁨을 발견합니다.</p>
      </div>
      
      <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <Link to="/fellowship/gallery" style={{ padding: '10px 24px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', borderRadius: '6px', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}>
          목록으로
        </Link>
      </div>
    </div>
  );
}

function GalleryWrite() {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)', padding: '48px', border: '1px solid #f8fafc' }}>
      
      <div style={{ marginBottom: '32px' }}>
        <input 
          type="text" 
          placeholder="앨범 제목을 입력하세요..." 
          style={{ 
            width: '100%', 
            padding: '16px 0', 
            border: 'none', 
            borderBottom: '2px solid #e2e8f0', 
            fontSize: '36px', 
            fontWeight: '800', 
            letterSpacing: '-1px',
            color: '#0f172a', 
            outline: 'none', 
            background: 'transparent',
            transition: 'border-color 0.3s ease'
          }} 
          onFocus={(e) => e.target.style.borderBottom = '2px solid #cc0000'} 
          onBlur={(e) => e.target.style.borderBottom = '2px solid #e2e8f0'} 
        />
      </div>

      <div 
        style={{ 
          width: '100%', 
          height: '250px', 
          border: '2px dashed #cbd5e1', 
          borderRadius: '16px', 
          backgroundColor: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginBottom: '32px'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#cc0000'; e.currentTarget.style.backgroundColor = '#fff0f0'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.backgroundColor = '#f8fafc'; }}
      >
        <UploadCloud size={48} color="#94a3b8" />
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 'bold', color: '#334155' }}>사진을 이곳에 드래그하거나 클릭하여 추가하세요</p>
          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>최대 20장, 장당 10MB 이하의 JPG, PNG 파일</p>
        </div>
      </div>

      <textarea 
        placeholder="사진에 대한 설명이나 행사 내용을 간단히 적어주세요 (선택사항)" 
        style={{ 
          width: '100%', 
          minHeight: '200px', 
          padding: '24px', 
          border: '1px solid #e2e8f0', 
          borderRadius: '16px', 
          fontSize: '16px', 
          lineHeight: '1.8', 
          color: '#334155',
          outline: 'none', 
          backgroundColor: '#fff',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          boxSizing: 'border-box',
          resize: 'vertical'
        }} 
        onFocus={(e) => { e.target.style.borderColor = '#cc0000'; e.target.style.boxShadow = '0 0 0 4px rgba(204,0,0,0.05)'; }} 
        onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
      />
      
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '32px' }}>
        <Link to="/fellowship/gallery" style={{ padding: '16px 48px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', color: '#475569', borderRadius: '12px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}>
          취소
        </Link>
        <Link to="/fellowship/gallery" style={{ padding: '16px 64px', background: 'linear-gradient(135deg, #cc0000 0%, #a30000 100%)', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 10px 20px -5px rgba(204,0,0,0.4)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(204,0,0,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(204,0,0,0.4)'; }}>
          사진 올리기
        </Link>
      </div>
    </div>
  );
}

function GalleryList() {
  const images = [
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80',
    'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=500&q=80',
    'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80',
    'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=500&q=80',
    'https://images.unsplash.com/photo-1519340333755-56e9c1d04079?w=500&q=80'
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <p style={{ color: '#666', margin: 0 }}>총 <span style={{ color: '#cc0000', fontWeight: 'bold' }}>24</span>개의 앨범이 있습니다.</p>
        <Link to="/fellowship/gallery/write" style={{ padding: '10px 20px', backgroundColor: '#2a4358', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d2f3d'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2a4358'}>사진 올리기</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {images.map((img, i) => (
          <Link to={`/fellowship/gallery/${i}`} key={i} style={{ textDecoration: 'none', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'block' }} className="group">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '70%', overflow: 'hidden' }}>
              <img src={img} alt="갤러리 사진" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="group-hover:scale-110" />
            </div>
            <div style={{ padding: '20px' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 'bold', color: '#1f2937', transition: 'color 0.2s' }} className="group-hover:text-[#cc0000]">
                2026년 평화교회 행사 스케치 {images.length - i}
              </h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>2026.08.{20-i}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px' }}>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '6px', cursor: 'pointer', color: '#666', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>&lt;</button>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cc0000', backgroundColor: '#cc0000', borderRadius: '6px', cursor: 'pointer', color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>1</button>
        <button style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '6px', cursor: 'pointer', color: '#666', fontSize: '14px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>&gt;</button>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <Routes>
      <Route path="/" element={<GalleryList />} />
      <Route path="write" element={<GalleryWrite />} />
      <Route path=":id" element={<GalleryDetail />} />
    </Routes>
  );
}

function BusinessDetail() {
  const { id } = useParams();
  
  const bizIdx = parseInt(id) || 0;
  const businesses = [
    { 
      name: '평화 베이커리', 
      owner: '김평화 집사', 
      desc: '유기농 밀가루로 당일 구워내는 건강한 빵집입니다. 단체 주문 환영합니다.', 
      phone: '02-123-4567', 
      addr: '서울시 구로구 평화로 1길 10', 
      tag: '음식점', 
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
        'https://images.unsplash.com/photo-1555507036-ab1e4006a8a0?w=1200&q=80',
        'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=1200&q=80',
        'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80',
        'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80',
        'https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=1200&q=80'
      ]
    },
    { name: '믿음 플라워', owner: '이믿음 권사', desc: '각종 기념일 꽃바구니, 화환, 실내 공기정화 식물 전문 꽃집입니다.', phone: '02-987-6543', addr: '서울시 구로구 평화로 2길 15', tag: '꽃/식물', img: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&q=80' },
    { name: '소망 인테리어', owner: '박소망 장로', desc: '주거공간 및 상업공간 맞춤형 인테리어 전문. 성실하게 시공해 드립니다.', phone: '010-1111-2222', addr: '서울시 구로구 평화로 3길 20', tag: '인테리어', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80' },
    { name: '사랑 안경원', owner: '최사랑 안수집사', desc: '정확한 시력검사와 트렌디한 안경테를 다수 보유하고 있습니다.', phone: '02-555-7777', addr: '서울시 구로구 평화로 4길 25', tag: '안경/렌즈', img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&q=80' },
  ];
  const biz = businesses[bizIdx % businesses.length];

  const images = biz.gallery || [biz.img];
  const [activeImage, setActiveImage] = React.useState(images[0]);
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)', overflow: 'hidden', border: '1px solid #f8fafc' }}>
      <div className="w-full h-[250px] md:h-[360px] bg-cover bg-center relative transition-all duration-300" style={{ backgroundImage: `url(${activeImage})` }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)' }} />
        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white">
          <span style={{ display: 'inline-block', fontSize: '14px', backgroundColor: '#cc0000', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold', marginBottom: '16px', boxShadow: '0 4px 10px rgba(204,0,0,0.3)' }}>{biz.tag}</span>
          <h2 className="text-[28px] md:text-[42px] font-[900] m-0 mb-2 md:mb-3 tracking-[-1px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{biz.name}</h2>
          <p style={{ fontSize: '18px', margin: 0, opacity: 0.9, fontWeight: '500' }}>대표: {biz.owner}</p>
        </div>
      </div>
      
      <div className="p-6 md:p-12 flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12">
        <div style={{ minWidth: 0 }}>
          
          {images.length > 1 && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>매장 사진</h4>
                {images.length > 4 && (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={scrollLeft} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#64748b'; }}>
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={scrollRight} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#64748b'; }}>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
              <div 
                ref={scrollRef}
                style={{ 
                  display: 'flex', 
                  gap: '12px', 
                  overflowX: 'auto', 
                  scrollBehavior: 'smooth', 
                  paddingBottom: '8px',
                  msOverflowStyle: 'none', 
                  scrollbarWidth: 'none',
                }}
              >
                <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                {images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    style={{ 
                      flexShrink: 0, 
                      width: 'calc(22.22% - 10px)', 
                      aspectRatio: '1', 
                      borderRadius: '16px', 
                      backgroundImage: `url(${img})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center', 
                      cursor: 'pointer',
                      border: activeImage === img ? '3px solid #cc0000' : '3px solid transparent',
                      boxSizing: 'border-box',
                      opacity: activeImage === img ? 1 : 0.6,
                      transition: 'all 0.2s',
                    }} 
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={(e) => { if (activeImage !== img) e.currentTarget.style.opacity = '0.6'; }}
                  />
                ))}
              </div>
            </div>
          )}

          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', borderBottom: '2px solid #e2e8f0', paddingBottom: '16px' }}>사업장 소개</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '32px' }}>
            {biz.desc}
            <br/><br/>
            언제나 정성을 다해 섬기겠습니다. 평화교회 교우 여러분들의 많은 사랑과 관심 부탁드립니다.
          </p>
        </div>
        
        <div>
          <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px', borderBottom: '1px solid #cbd5e1', paddingBottom: '12px' }}>오시는 길 및 문의</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '22px' }}>📞</span>
                <div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>전화번호</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '15px', color: '#334155', fontWeight: '500' }}>{biz.phone}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '22px' }}>📍</span>
                <div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>오시는 길</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '15px', color: '#334155', fontWeight: '500' }}>{biz.addr}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '22px' }}>⏰</span>
                <div>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>영업시간 안내</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '15px', color: '#334155', fontWeight: '500', lineHeight: '1.6' }}>평일 09:00 ~ 20:00<br/>(주일은 예배로 휴무합니다)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ padding: '24px 48px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/fellowship/business" style={{ padding: '14px 32px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', borderRadius: '8px', fontSize: '15px', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}>
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

function BusinessList() {
  const businesses = [
    { name: '평화 베이커리', owner: '김평화 집사', desc: '유기농 밀가루로 당일 구워내는 건강한 빵집입니다. 단체 주문 환영합니다.', phone: '02-123-4567', addr: '서울시 구로구 평화로 1길 10', tag: '음식점', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
    { name: '믿음 플라워', owner: '이믿음 권사', desc: '각종 기념일 꽃바구니, 화환, 실내 공기정화 식물 전문 꽃집입니다.', phone: '02-987-6543', addr: '서울시 구로구 평화로 2길 15', tag: '꽃/식물', img: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80' },
    { name: '소망 인테리어', owner: '박소망 장로', desc: '주거공간 및 상업공간 맞춤형 인테리어 전문. 성실하게 시공해 드립니다.', phone: '010-1111-2222', addr: '서울시 구로구 평화로 3길 20', tag: '인테리어', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
    { name: '사랑 안경원', owner: '최사랑 안수집사', desc: '정확한 시력검사와 트렌디한 안경테를 다수 보유하고 있습니다.', phone: '02-555-7777', addr: '서울시 구로구 평화로 4길 25', tag: '안경/렌즈', img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80' },
  ];

  return (
    <div>
      <div style={{ backgroundColor: '#f8fafc', padding: '24px 32px', borderRadius: '12px', marginBottom: '40px', borderLeft: '4px solid #cc0000' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px', margin: 0 }}>교우 사업장 안내</h3>
            <p style={{ margin: 0, marginTop: '8px', fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
              우리 교회 성도님들이 운영하시는 사업장을 소개합니다.<br/>
              많은 이용과 기도를 부탁드리며, 사업장 등록을 원하시는 성도님은 우측 버튼을 통해 등록해 주시기 바랍니다.
            </p>
          </div>
          <Link to="/fellowship/business/write" style={{ padding: '12px 24px', backgroundColor: '#2a4358', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', textDecoration: 'none', transition: 'background-color 0.2s', whiteSpace: 'nowrap' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d2f3d'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2a4358'}>
            사업장 등록하기
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {businesses.map((biz, idx) => (
          <Link to={`/fellowship/business/${idx}`} key={idx} className="flex flex-col sm:flex-row border border-[#e2e8f0] rounded-[16px] overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 no-underline hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-full sm:w-[160px] h-[200px] sm:h-auto shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${biz.img})` }}>
            </div>
            <div style={{ padding: '24px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#0f172a', transition: 'color 0.2s' }} className="group-hover:text-[#cc0000]">{biz.name}</h4>
                <span style={{ fontSize: '12px', backgroundColor: '#cc0000', color: '#fff', padding: '4px 10px', borderRadius: '12px', fontWeight: '500' }}>{biz.tag}</span>
              </div>
              <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#0f172a', fontWeight: '600' }}>대표: {biz.owner}</p>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#475569', lineHeight: '1.5', wordBreak: 'keep-all' }}>{biz.desc}</p>
              <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ display: 'inline-block', width: '16px', textAlign: 'center' }}>📞</span> {biz.phone}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ display: 'inline-block', width: '16px', textAlign: 'center' }}>📍</span> {biz.addr}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function BusinessWrite() {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)', padding: '48px', border: '1px solid #f8fafc' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a', marginBottom: '32px', borderBottom: '2px solid #e2e8f0', paddingBottom: '16px' }}>사업장 등록하기</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>사업장 이름</label>
          <input type="text" placeholder="예: 평화 베이커리" style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', color: '#334155', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#cc0000'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>대표 성도명 (직분)</label>
          <input type="text" placeholder="예: 김평화 집사" style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', color: '#334155', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#cc0000'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', marginBottom: '24px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>업종 (카테고리)</label>
          <select style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', color: '#334155', boxSizing: 'border-box', outline: 'none', appearance: 'none', backgroundColor: '#fff', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#cc0000'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}>
            <option value="">카테고리 선택</option>
            <option value="음식점">음식점</option>
            <option value="카페/베이커리">카페/베이커리</option>
            <option value="꽃/식물">꽃/식물</option>
            <option value="인테리어/건축">인테리어/건축</option>
            <option value="의료/건강">의료/건강</option>
            <option value="교육/학원">교육/학원</option>
            <option value="안경/렌즈">안경/렌즈</option>
            <option value="서비스/기타">서비스/기타</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>전화번호</label>
          <input type="text" placeholder="예: 02-123-4567" style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', color: '#334155', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#cc0000'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>사업장 주소</label>
        <input type="text" placeholder="예: 서울시 구로구 평화로 1길 10" style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', color: '#334155', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#cc0000'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>간략 소개 및 영업 안내</label>
        <textarea placeholder="사업장에 대한 간단한 소개, 특장점, 영업시간 등을 자유롭게 적어주세요." style={{ width: '100%', minHeight: '120px', padding: '16px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', lineHeight: '1.6', color: '#334155', boxSizing: 'border-box', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#cc0000'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>매장 사진 등록</label>
        <div style={{ width: '100%', height: '200px', border: '2px dashed #cbd5e1', borderRadius: '16px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#cc0000'; e.currentTarget.style.backgroundColor = '#fff0f0'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.backgroundColor = '#f8fafc'; }}>
          <UploadCloud size={40} color="#94a3b8" />
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold', color: '#334155' }}>첫 번째 사진이 대표 이미지로 설정됩니다</p>
            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>이곳을 클릭하거나 사진을 드래그하여 업로드하세요</p>
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '32px' }}>
        <Link to="/fellowship/business" style={{ padding: '16px 48px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', color: '#475569', borderRadius: '12px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}>
          취소
        </Link>
        <Link to="/fellowship/business" style={{ padding: '16px 64px', background: 'linear-gradient(135deg, #cc0000 0%, #a30000 100%)', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 10px 20px -5px rgba(204,0,0,0.4)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(204,0,0,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(204,0,0,0.4)'; }}>
          등록 신청하기
        </Link>
      </div>
    </div>
  );
}

function Business() {
  return (
    <Routes>
      <Route path="/" element={<BusinessList />} />
      <Route path="write" element={<BusinessWrite />} />
      <Route path=":id" element={<BusinessDetail />} />
    </Routes>
  );
}

/* ─────────────────────────── Main Fellowship Layout ─────────────────────────── */



export default function Fellowship() {
  const MENU_ITEMS = useSubMenus('/fellowship');
  const currentMenuItems = MENU_ITEMS.length > 0 ? MENU_ITEMS : [{ path: '/fellowship/grace', label: '은혜의글' }];

  const location = useLocation();
  const currentPath = location.pathname === '/fellowship' ? '/fellowship/grace' : location.pathname;
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
        {/* Semi-transparent overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: '#fff', fontSize: '38px', fontWeight: 700, letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {/* 나눔과교제 */}
          </h1>
        </div>
      </div>

      {/* ── Body: Sidebar + Content ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-5 py-8 md:py-[60px] flex flex-col md:flex-row gap-8 md:gap-[60px] items-start w-full">
        
        {/* ── Sidebar (LNB) ── */}
        <nav className="hidden md:block w-[240px] shrink-0">
          <div style={{ background: '#2a4358', color: '#fff', textAlign: 'center', padding: '18px 0', fontSize: '20px', fontWeight: 500 }}>
            나눔과교제
          </div>
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
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#e64835'; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#444'; }}
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
            <Link to="/fellowship" style={{ color: '#888', textDecoration: 'none' }} title="나눔과교제로 이동" onMouseEnter={(e) => e.currentTarget.style.color = '#333'} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
              나눔과교제
            </Link>
            <ChevronRight size={12} color="#ccc" />
            <span style={{ color: '#333' }}>{currentMenu.label}</span>
          </div>

          {/* Page Title */}
          <h2 className="text-[26px] md:text-[32px] font-normal text-[#333] pb-4 md:pb-5 border-b border-[#999] mb-6 md:mb-10 m-0">
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
                <Route path="/" element={<Grace />} />
                <Route path="grace/*" element={<Grace />} />
                <Route path="gallery/*" element={<Gallery />} />
                <Route path="business/*" element={<Business />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
