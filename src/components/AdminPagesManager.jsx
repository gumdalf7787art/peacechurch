import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Plus, Save, Trash2, Image as ImageIcon, 
  Settings2, Eye, EyeOff, LayoutTemplate, UploadCloud,
  ChevronRight, ArrowLeft
} from 'lucide-react';

export default function AdminPagesManager() {
  const [pages, setPages] = useState([]);
  const [menus, setMenus] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Editor state
  const [formData, setFormData] = useState({
    slug: '',
    menu_id: '',
    title: '',
    subtitle: '',
    banner_image: '',
    content: '',
    is_published: 1
  });

  const fileInputRef = useRef(null);

  // Fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [pagesRes, menusRes] = await Promise.all([
        fetch('/api/pages'),
        fetch('/api/menus')
      ]);
      const pagesData = await pagesRes.json();
      const menusData = await menusRes.json();
      
      if (pagesData.success) setPages(pagesData.pages);
      if (menusData.success) {
        // Flatten menus for select box
        const flatMenus = [];
        menusData.menus.forEach(m => {
          if (!m.parent_id) {
            flatMenus.push(m);
            const children = menusData.menus.filter(child => child.parent_id === m.id);
            children.forEach(c => {
              flatMenus.push({ ...c, name: `└ ${c.name}` });
            });
          }
        });
        setMenus(flatMenus);
      }
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  const handleSelectPage = (page) => {
    setSelectedPage(page);
    setFormData({
      slug: page.slug,
      menu_id: page.menu_id || '',
      title: page.title,
      subtitle: page.subtitle || '',
      banner_image: page.banner_image || '',
      content: page.content || '',
      is_published: page.is_published
    });
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    setSelectedPage(null);
    setFormData({
      slug: '',
      menu_id: '',
      title: '',
      subtitle: '',
      banner_image: '',
      content: '',
      is_published: 1
    });
    setIsCreating(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('file', file);
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData
      });
      const data = await res.json();
      if (data.url) {
        setFormData(prev => ({ ...prev, banner_image: data.url }));
      }
    } catch (err) {
      alert('이미지 업로드에 실패했습니다.');
    }
  };

  const handleSave = async () => {
    if (!formData.slug || !formData.title) {
      alert('주소(Slug)와 제목은 필수 항목입니다.');
      return;
    }

    setIsLoading(true);
    try {
      const isUpdate = !!selectedPage && !isCreating;
      const url = isUpdate ? `/api/pages/${selectedPage.slug}` : '/api/pages';
      const method = isUpdate ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        alert(isUpdate ? '저장되었습니다.' : '생성되었습니다.');
        await fetchData();
        if (isCreating) {
          setIsCreating(false);
          const newPage = await fetch('/api/pages').then(r => r.json()).then(d => d.pages.find(p => p.slug === formData.slug));
          if (newPage) setSelectedPage(newPage);
        }
      } else {
        alert(data.message || '오류가 발생했습니다.');
      }
    } catch (err) {
      alert('네트워크 오류가 발생했습니다.');
    }
    setIsLoading(false);
  };

  const handleDelete = async () => {
    if (!selectedPage) return;
    if (!window.confirm('정말 이 페이지를 삭제하시겠습니까? 복구할 수 없습니다.')) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/pages/${selectedPage.slug}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        alert('삭제되었습니다.');
        setSelectedPage(null);
        await fetchData();
      } else {
        alert('삭제 실패');
      }
    } catch (err) {
      alert('오류가 발생했습니다.');
    }
    setIsLoading(false);
  };

  // -------------------------------------------------------------
  // VERY BASIC WYSIWYG EXEC COMMAND
  const execCmd = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      
      {/* LEFT PANEL: PAGE LIST */}
      <div className="w-64 border-r border-gray-100 bg-gray-50/50 flex flex-col h-full shrink-0">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
          <h2 className="font-bold text-gray-800 text-[15px] flex items-center">
            <FileText size={16} className="mr-2 text-indigo-500" />
            서브페이지
          </h2>
          <button 
            onClick={handleCreateNew}
            className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
            title="새 페이지 추가"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
          {pages.length === 0 ? (
            <p className="text-center text-gray-400 text-[13px] py-4">등록된 페이지가 없습니다.</p>
          ) : (
            pages.map(page => (
              <button
                key={page.id}
                onClick={() => handleSelectPage(page)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                  selectedPage?.id === page.id && !isCreating
                    ? 'bg-white shadow-sm border border-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'
                }`}
              >
                <div className="flex flex-col truncate pr-2">
                  <span className="font-semibold text-[14px] truncate">{page.title}</span>
                  <span className="text-[11px] text-gray-400 font-mono truncate">/{page.slug}</span>
                </div>
                {!page.is_published && <EyeOff size={14} className="text-gray-400 shrink-0" />}
              </button>
            ))
          )}
        </div>
      </div>

      {/* RIGHT PANEL: EDITOR */}
      <div className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
        {(!selectedPage && !isCreating) ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <LayoutTemplate size={48} className="mb-4 opacity-20" />
            <p className="text-[15px]">왼쪽에서 페이지를 선택하거나 새 페이지를 만드세요.</p>
          </div>
        ) : (
          <>
            {/* Editor Header */}
            <div className="h-16 px-6 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
              <h3 className="font-bold text-[18px] text-gray-800">
                {isCreating ? '새 페이지 작성' : '페이지 수정'}
              </h3>
              <div className="flex items-center gap-2">
                {!isCreating && (
                  <button 
                    onClick={handleDelete}
                    disabled={isLoading}
                    className="px-4 py-2 text-[13px] font-bold text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex items-center"
                  >
                    <Trash2 size={14} className="mr-1.5" /> 삭제
                  </button>
                )}
                <button 
                  onClick={handleSave}
                  disabled={isLoading}
                  className="px-5 py-2 text-[13px] font-bold text-white bg-black hover:bg-gray-800 rounded-lg transition-colors flex items-center shadow-sm"
                >
                  <Save size={14} className="mr-1.5" /> 저장하기
                </button>
              </div>
            </div>

            {/* Editor Body */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide bg-[#f8fafc]">
              <div className="max-w-4xl mx-auto space-y-8">
                
                {/* 1. Basic Settings */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-[14px] font-bold text-gray-800 mb-4 flex items-center">
                    <Settings2 size={16} className="mr-2 text-gray-400" />
                    기본 설정
                  </h4>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1.5">페이지 주소 (Slug) *</label>
                      <input 
                        type="text" 
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        disabled={!isCreating}
                        placeholder="예: intro, worship-time" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:bg-white focus:border-indigo-500 outline-none transition-colors"
                      />
                      <p className="text-[11px] text-gray-400 mt-1">도메인/sub/[slug] 형태로 접속됩니다.</p>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1.5">연결할 메뉴 (선택)</label>
                      <select 
                        name="menu_id"
                        value={formData.menu_id}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:bg-white focus:border-indigo-500 outline-none transition-colors"
                      >
                        <option value="">-- 연결 안 함 --</option>
                        {menus.map(m => (
                          <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                      </select>
                      <p className="text-[11px] text-gray-400 mt-1">어떤 메뉴를 눌렀을 때 연결될지 선택합니다.</p>
                    </div>
                  </div>
                </div>

                {/* 2. Banner Settings */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-[14px] font-bold text-gray-800 mb-4 flex items-center">
                    <ImageIcon size={16} className="mr-2 text-gray-400" />
                    상단 배너 및 제목
                  </h4>
                  <div className="space-y-5">
                    
                    {/* Banner Preview & Upload */}
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1.5">배경 이미지</label>
                      <div 
                        onClick={() => fileInputRef.current.click()}
                        className="w-full h-[180px] rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group hover:border-indigo-300 transition-colors"
                      >
                        {formData.banner_image ? (
                          <>
                            <img src={formData.banner_image} alt="배너" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <UploadCloud size={24} className="text-white mb-2" />
                              <span className="text-white text-[13px] font-bold">이미지 변경</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <UploadCloud size={32} className="text-gray-300 mb-2 group-hover:text-indigo-400 transition-colors" />
                            <p className="text-[14px] font-bold text-gray-500 group-hover:text-indigo-500 transition-colors">이미지 업로드</p>
                            <p className="text-[11px] text-gray-400 mt-1">권장 사이즈: 1920x400 (가로형)</p>
                          </>
                        )}
                      </div>
                      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 mb-1.5">메인 제목 (Title) *</label>
                        <input 
                          type="text" 
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="예: 교회 소개" 
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] font-bold focus:bg-white focus:border-indigo-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 mb-1.5">소제목 (Subtitle)</label>
                        <input 
                          type="text" 
                          name="subtitle"
                          value={formData.subtitle}
                          onChange={handleInputChange}
                          placeholder="예: 평화교회에 오신 것을 환영합니다." 
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:bg-white focus:border-indigo-500 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Content Editor */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                    <h4 className="text-[14px] font-bold text-gray-800 flex items-center">
                      <LayoutTemplate size={16} className="mr-2 text-gray-400" />
                      본문 내용 (HTML)
                    </h4>
                  </div>
                  
                  {/* HTML raw editor for now, could be upgraded to full WYSIWYG later */}
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="<div>여기에 HTML 태그를 사용하여 본문 내용을 구성합니다.</div>"
                    className="w-full h-[400px] p-6 text-[14px] font-mono leading-relaxed bg-white outline-none resize-y"
                    style={{ minHeight: '300px' }}
                  />
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-[12px] text-gray-500 flex justify-between">
                    <span>* 현재는 직접 HTML/Tailwind 코드를 입력하는 방식을 지원합니다. 향후 시각적 에디터로 업그레이드 가능합니다.</span>
                  </div>
                </div>

                {/* 4. Publish Settings */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-800">페이지 공개 상태</h4>
                    <p className="text-[12px] text-gray-500 mt-1">비공개 처리 시 방문자에게 보이지 않습니다.</p>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        name="is_published"
                        className="sr-only" 
                        checked={formData.is_published === 1}
                        onChange={handleInputChange}
                      />
                      <div className={`block w-14 h-8 rounded-full transition-colors ${formData.is_published ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
                      <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${formData.is_published ? 'transform translate-x-6' : ''}`}></div>
                    </div>
                  </label>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
