import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Link as LinkIcon, Type, Plus, Trash2, Edit3, MoveUp, MoveDown, Save, MonitorPlay, MessageSquare, Megaphone, ToggleLeft, ToggleRight, Info, MapPin, Layout, AlignLeft, AlignCenter, AlignRight, ZoomIn, ZoomOut, MousePointer2 } from 'lucide-react';

export default function AdminHomeManager() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isSaving, setIsSaving] = useState(false);

  // Section Toggles
  const [sections, setSections] = useState({
    hero: true,
    quick: true,
    pastor: true,
    location: true,
    footer: true,
    popup: false
  });

  const toggleSection = (key) => setSections(prev => ({ ...prev, [key]: !prev[key] }));

  const tabs = [
    { id: 'hero', label: '메인 슬라이드', icon: <MonitorPlay size={18} /> },
    { id: 'quick', label: '표어 및 바로가기', icon: <LinkIcon size={18} /> },
    { id: 'pastor', label: '담임목사 인사말', icon: <MessageSquare size={18} /> },
    { id: 'location', label: '오시는길', icon: <MapPin size={18} /> },
    { id: 'footer', label: '풋터 설정', icon: <Layout size={18} /> },
    { id: 'popup', label: '팝업 공지', icon: <Megaphone size={18} /> },
  ];

  // Dummy State for Frontend Preview
  const [heroSlides, setHeroSlides] = useState([
    { id: 1, title: '오직 예수,\n진리가 너희를 자유롭게 하리라', subtitle: '요한복음 8:32', image: '/hero-1.jpg', btnText: '교회소개', btnLink: '/about', align: 'center', zoomEffect: 'zoom-in' },
    { id: 2, title: '다음 세대를 세우는\n평화교회', subtitle: '하나님의 비전을 품은 아이들', image: '/hero-2.jpg', btnText: '교육기관', btnLink: '/education', align: 'left', zoomEffect: 'none' },
  ]);

  const [quickSection, setQuickSection] = useState({
    mottoYear: '2026년 표어',
    mottoMain: '주안에서 하나되는 평화교회',
    mottoSub: '평화교회에 오신 여러분을 환영합니다',
    bgImage: '/motto-bg.jpg'
  });

  const [quickLinks, setQuickLinks] = useState([
    { id: 1, title: '예배안내', subtitle: '예배 시간 및 장소', icon: 'Clock', link: '/worship/time' },
    { id: 2, title: '온라인 헌금', subtitle: '계좌 안내', icon: 'CreditCard', link: '/about/offering' },
    { id: 3, title: '찾아오시는 길', subtitle: '오시는 방법', icon: 'MapPin', link: '/about/location' },
    { id: 4, title: '새가족 등록', subtitle: '환영합니다', icon: 'UserPlus', link: '/about/newcomer' },
  ]);

  const [locationFields, setLocationFields] = useState([
    { id: 'phone', label: '연락처', value: '02-123-4567' },
    { id: 'address', label: '주소 (입력 시 지도 자동변동)', value: '서울특별시 평화구 평화로 123' },
    { id: 'transit', label: '대중교통 안내', value: '지하철 1호선 평화역 3번 출구 도보 5분' },
    { id: 'parking', label: '주차 안내', value: '교회 건물 지하 주차장 이용 가능 (주일 무료)' },
  ]);

  const handleAddLocationField = () => {
    setLocationFields([...locationFields, { id: Date.now().toString(), label: '새 입력항목', value: '' }]);
  };

  const handleFakeSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('저장되었습니다. (현재는 프론트엔드 UI 프리뷰 모드입니다)');
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl space-y-6 pb-20"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-[24px] font-bold text-black flex items-center">
            <MonitorPlay className="mr-3 text-[#5227FF]" size={28} /> 
            메인 페이지 (홈 화면) 설정
          </h2>
          <p className="text-gray-500 text-[15px] mt-2 flex items-center">
            <Info size={16} className="mr-1 text-gray-400" />
            각 섹션의 내용과 보이기/숨기기 상태를 관리할 수 있습니다.
          </p>
        </div>
        <button 
          onClick={handleFakeSave}
          disabled={isSaving}
          className="bg-black text-white px-8 py-3 rounded-xl font-bold flex items-center hover:bg-gray-800 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] disabled:opacity-50"
        >
          <Save size={20} className="mr-2" />
          {isSaving ? '저장 중...' : '모든 변경사항 적용'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 bg-gray-100 p-1.5 rounded-2xl mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap flex-1 py-3 px-4 rounded-xl flex items-center justify-center font-bold text-[14px] transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-500 hover:text-black hover:bg-gray-200/50'
            }`}
          >
            <span className={`mr-2 ${activeTab === tab.id ? 'text-[#5227FF]' : ''}`}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Section Enable/Disable Header */}
          <div className="flex items-center justify-between bg-[#f8f9fa] border border-gray-200 rounded-2xl px-6 py-4 mb-6">
            <div>
              <span className="font-bold text-[15px] text-black">섹션 노출 설정</span>
              <p className="text-[13px] text-gray-500">이 섹션을 실제 홈페이지에 보이도록 켤지 결정합니다.</p>
            </div>
            <button 
              onClick={() => toggleSection(activeTab)}
              className={`flex items-center font-bold ${sections[activeTab] ? 'text-[#5227FF]' : 'text-gray-400'}`}
            >
              <span className="mr-2">{sections[activeTab] ? '사용 중 (ON)' : '숨김 (OFF)'}</span>
              {sections[activeTab] ? <ToggleRight size={36} /> : <ToggleLeft size={36} />}
            </button>
          </div>

          <div className={`transition-opacity ${!sections[activeTab] ? 'opacity-50 pointer-events-none' : ''}`}>
            {/* HERO SLIDER SETTINGS */}
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-[18px] font-bold text-gray-900">메인 슬라이드 관리</h3>
                      <p className="text-[13px] text-gray-500 mt-1">드래그하여 순서를 변경할 수 있습니다.</p>
                    </div>
                    <button className="text-[#5227FF] bg-[#5227FF]/10 hover:bg-[#5227FF]/20 px-4 py-2 rounded-lg text-[14px] font-bold flex items-center transition-colors">
                      <Plus size={16} className="mr-2" /> 슬라이드 추가
                    </button>
                  </div>

                  <div className="space-y-6">
                    {heroSlides.map((slide, idx) => (
                      <div key={slide.id} className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 flex flex-col md:flex-row">
                        {/* Image Preview & Upload */}
                        <div className="w-full md:w-[280px] h-[200px] md:h-auto bg-gray-200 relative group shrink-0 border-r border-gray-200">
                          <img src={slide.image} alt="배너" className="w-full h-full object-cover absolute inset-0" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white text-black text-[12px] font-bold px-3 py-1.5 rounded-lg flex items-center shadow-md">
                              <ImageIcon size={14} className="mr-1" /> 이미지 변경
                            </button>
                          </div>
                        </div>

                        {/* Content Form */}
                        <div className="flex-1 p-6 space-y-4">
                          {/* Layout Controls */}
                          <div className="flex space-x-6 pb-4 border-b border-gray-200">
                            <div>
                              <label className="block text-[12px] font-bold text-gray-500 mb-2">텍스트/버튼 정렬</label>
                              <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
                                <button className={`p-1.5 rounded-md ${slide.align === 'left' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}><AlignLeft size={16}/></button>
                                <button className={`p-1.5 rounded-md ${slide.align === 'center' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}><AlignCenter size={16}/></button>
                                <button className={`p-1.5 rounded-md ${slide.align === 'right' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}><AlignRight size={16}/></button>
                              </div>
                            </div>
                            <div>
                              <label className="block text-[12px] font-bold text-gray-500 mb-2">배경 줌(Zoom) 효과</label>
                              <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
                                <button className={`px-3 py-1.5 rounded-md text-[12px] font-bold flex items-center ${slide.zoomEffect === 'zoom-in' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}><ZoomIn size={14} className="mr-1"/> 줌인</button>
                                <button className={`px-3 py-1.5 rounded-md text-[12px] font-bold flex items-center ${slide.zoomEffect === 'zoom-out' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}><ZoomOut size={14} className="mr-1"/> 줌아웃</button>
                                <button className={`px-3 py-1.5 rounded-md text-[12px] font-bold flex items-center ${slide.zoomEffect === 'none' ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}><MousePointer2 size={14} className="mr-1"/> 없음</button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <label className="block text-[12px] font-bold text-gray-500 mb-1 flex items-center"><Type size={14} className="mr-1"/> 메인 카피 (큰 글씨)</label>
                              <textarea defaultValue={slide.title} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] font-bold focus:border-black outline-none resize-none h-16" />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-[12px] font-bold text-gray-500 mb-1">서브 카피 (작은 글씨)</label>
                              <input type="text" defaultValue={slide.subtitle} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px] focus:border-black outline-none" />
                            </div>
                            <div>
                              <label className="block text-[12px] font-bold text-gray-500 mb-1">버튼 텍스트</label>
                              <input type="text" defaultValue={slide.btnText} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[13px] focus:border-black outline-none" />
                            </div>
                            <div>
                              <label className="block text-[12px] font-bold text-gray-500 mb-1">버튼 연결 주소</label>
                              <input type="text" defaultValue={slide.btnLink} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[13px] focus:border-black outline-none" />
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="w-full md:w-[60px] flex flex-row md:flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 bg-white p-2">
                          <button className="p-2 text-gray-400 hover:text-black" title="위로 이동"><MoveUp size={18} /></button>
                          <button className="p-2 text-gray-400 hover:text-black" title="아래로 이동"><MoveDown size={18} /></button>
                          <div className="w-[1px] md:w-[60%] h-[20px] md:h-[1px] bg-gray-200 mx-2 md:mx-0 md:my-2"></div>
                          <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg" title="삭제"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* QUICK LINKS SETTINGS */}
            {activeTab === 'quick' && (
              <div className="space-y-6">
                <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                  {/* Motto Settings */}
                  <div className="flex-1 space-y-5 border-r border-gray-100 pr-8">
                    <h3 className="text-[18px] font-bold text-gray-900 mb-4">올해의 표어 설정</h3>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1">표어 연도 및 타이틀</label>
                      <input type="text" defaultValue={quickSection.mottoYear} className="w-full px-4 py-2 border border-gray-200 rounded-xl text-[14px] font-bold focus:border-black outline-none" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1">표어 내용 (큰 글씨)</label>
                      <input type="text" defaultValue={quickSection.mottoMain} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[18px] font-black focus:border-black outline-none text-[#5227FF]" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1">서브 표어 (작은 글씨)</label>
                      <input type="text" defaultValue={quickSection.mottoSub} className="w-full px-4 py-2 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                    </div>
                  </div>

                  {/* Background Image Upload */}
                  <div className="w-1/3 shrink-0">
                    <h3 className="text-[18px] font-bold text-gray-900 mb-4">섹션 배경 사진 설정</h3>
                    <div className="aspect-video bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-gray-50">
                      {quickSection.bgImage ? (
                        <div className="w-full h-full bg-blue-900 flex items-center justify-center text-white/50">(배경 이미지 미리보기)</div>
                      ) : (
                        <ImageIcon color="gray" size={32} className="opacity-50" />
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                        <ImageIcon color="white" size={32} className="mb-2" />
                        <span className="text-white font-bold text-[13px]">배경 사진 변경</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Link Cards */}
                <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-[18px] font-bold text-gray-900 mb-1">바로가기 아이콘 메뉴</h3>
                  <p className="text-[13px] text-gray-500 mb-6">메인 화면 중앙에 배치되는 4개의 빠른 이동 버튼입니다.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickLinks.map((link, idx) => (
                      <div key={link.id} className="border border-gray-200 p-5 rounded-xl flex gap-4 bg-gray-50 relative group hover:border-black transition-colors">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                          <span className="text-[24px]">📌</span>
                          <span className="text-[10px] text-gray-400 font-bold mt-1">아이콘 변경</span>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <label className="block text-[11px] font-bold text-gray-500 mb-1">메뉴명 (타이틀)</label>
                            <input type="text" defaultValue={link.title} className="w-full px-3 py-1.5 border border-gray-200 rounded-md text-[14px] font-bold" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-gray-500 mb-1">설명 (서브 타이틀)</label>
                            <input type="text" defaultValue={link.subtitle} className="w-full px-3 py-1.5 border border-gray-200 rounded-md text-[13px]" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-gray-500 mb-1">연결할 페이지 URL</label>
                            <input type="text" defaultValue={link.link} className="w-full px-3 py-1.5 border border-gray-200 rounded-md text-[12px] font-mono text-blue-600 bg-blue-50/50" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PASTOR SECTION SETTINGS */}
            {activeTab === 'pastor' && (
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <label className="block text-[14px] font-bold text-gray-700 mb-2">목사님 프로필 이미지</label>
                  <div className="aspect-[3/4] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-gray-50">
                    <img src="/pastor.png" alt="목사님" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                      <ImageIcon color="white" size={32} className="mb-2" />
                      <span className="text-white font-bold text-[13px]">사진 업로드</span>
                    </div>
                  </div>
                  <p className="text-[12px] text-gray-400 mt-2 text-center">권장 사이즈: 600 x 800px</p>
                </div>

                <div className="flex-1 space-y-5">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">인사말 큰 제목</label>
                    <input type="text" defaultValue="환영합니다. 평화교회에 오신 것을 환영합니다." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-[18px] focus:bg-white focus:border-black outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">인사말 소제목</label>
                    <input type="text" defaultValue="하나님의 사랑과 은혜가 충만한 곳" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[15px] focus:bg-white focus:border-black outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">인사말 본문 내용</label>
                    <textarea 
                      defaultValue="평화교회는 이웃과 함께하며 그리스도의 사랑을 실천하는 공동체입니다. 여러분을 주님의 이름으로 축복하고 환영합니다. 홈페이지를 통해 교회의 다양한 소식과 은혜를 나누시길 바랍니다."
                      className="w-full h-[200px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[14px] leading-relaxed focus:bg-white focus:border-black outline-none resize-none"
                    />
                  </div>
                  <div className="flex justify-end pt-4">
                    <button className="text-black font-bold text-[14px] underline underline-offset-4 hover:text-[#5227FF]">
                      전체 인사말 페이지(서브페이지) 편집하러 가기 &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* LOCATION SETTINGS */}
            {activeTab === 'location' && (
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-gray-900">오시는 길 정보 설정</h3>
                    <p className="text-[13px] text-gray-500 mt-1">입력하신 주소를 기반으로 지도가 <strong className="text-[#5227FF]">자동으로 생성 및 변경</strong>됩니다.</p>
                  </div>
                  <button onClick={handleAddLocationField} className="text-[#5227FF] bg-[#5227FF]/10 hover:bg-[#5227FF]/20 px-4 py-2 rounded-lg text-[14px] font-bold flex items-center transition-colors">
                    <Plus size={16} className="mr-2" /> 입력창 추가
                  </button>
                </div>

                <div className="space-y-4">
                  {locationFields.map((field) => (
                    <div key={field.id} className="flex space-x-4 items-start">
                      <div className="w-[150px]">
                        <input type="text" defaultValue={field.label} className="w-full px-3 py-2.5 bg-gray-100 border-none rounded-lg text-[13px] font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5227FF]/50" />
                      </div>
                      <div className="flex-1 flex space-x-2">
                        <input type="text" defaultValue={field.value} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-[14px] focus:border-black outline-none" />
                        {!['phone', 'address', 'transit', 'parking'].includes(field.id) && (
                          <button className="px-3 py-2 text-gray-400 hover:text-red-500 bg-gray-50 rounded-lg border border-gray-200">
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FOOTER SETTINGS */}
            {activeTab === 'footer' && (
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                <h3 className="text-[18px] font-bold text-gray-900 mb-6">풋터(하단 영역) 정보 설정</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">교회(기관)명</label>
                    <input type="text" defaultValue="대한예수교장로회 평화교회" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">대표자명 (선택)</label>
                    <input type="text" defaultValue="" placeholder="홍길동 목사" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">주소</label>
                    <input type="text" defaultValue="서울특별시 평화구 평화로 123 평화빌딩 1층" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">대표 전화번호</label>
                    <input type="text" defaultValue="02-123-4567" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">팩스번호 (선택)</label>
                    <input type="text" defaultValue="02-123-4568" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">이메일 주소 (선택)</label>
                    <input type="text" defaultValue="peace@peacechurch.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] focus:border-black outline-none" />
                  </div>
                  <div className="col-span-2 mt-4">
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">카피라이트 (Copyright)</label>
                    <input type="text" defaultValue="Copyright © 2026 Peace Church. All rights reserved." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-[13px] text-gray-500 focus:border-black outline-none" />
                  </div>
                </div>
              </div>
            )}

            {/* POPUP NOTICES */}
            {activeTab === 'popup' && (
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">팝업 이미지 등록</label>
                    <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 hover:text-gray-600 transition-colors">
                      <ImageIcon size={48} className="mb-3 opacity-50" />
                      <span className="font-bold text-[14px]">클릭하여 포스터 업로드</span>
                      <span className="text-[11px] mt-1">JPG, PNG 형식 (최대 5MB)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">팝업 클릭 시 이동할 링크 주소</label>
                      <input type="text" placeholder="예: /about/notice/1" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-mono text-blue-600 focus:bg-white focus:border-black outline-none" />
                      <p className="text-[12px] text-gray-400 mt-1">비워두면 이미지만 표시되고 클릭되지 않습니다.</p>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">팝업 표시 기간 (선택사항)</label>
                      <div className="flex items-center space-x-2">
                        <input type="date" className="flex-1 px-4 py-2 border border-gray-200 rounded-xl text-[13px]" />
                        <span className="text-gray-400">~</span>
                        <input type="date" className="flex-1 px-4 py-2 border border-gray-200 rounded-xl text-[13px]" />
                      </div>
                    </div>

                    <div className="bg-[#fff5f5] text-[#d63d3d] p-4 rounded-xl text-[13px] font-medium border border-[#ffe0e0] flex items-start">
                      <Info size={16} className="mr-2 shrink-0 mt-0.5" />
                      "오늘 하루 이 창을 열지 않음" 체크박스는 사용자 편의를 위해 자동으로 생성됩니다.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
