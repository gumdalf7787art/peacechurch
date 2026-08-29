import React, { useEffect, useState, useRef } from 'react';
import { Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, List, Type, Highlighter, X } from 'lucide-react';

export default function FloatingToolbar() {
  const [position, setPosition] = useState({ top: 0, left: 0, visible: false });
  const [activeFormats, setActiveFormats] = useState({});
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);
  const toolbarRef = useRef(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        if (!showColorPicker && !showBgColorPicker) {
          setPosition(prev => ({ ...prev, visible: false }));
        }
        return;
      }

      // Check if the selection is inside our EditableText
      const range = selection.getRangeAt(0);
      let container = range.commonAncestorContainer;
      if (container.nodeType === 3) container = container.parentNode;

      const isEditable = container.closest('[contenteditable="true"]');
      if (!isEditable) {
        setPosition(prev => ({ ...prev, visible: false }));
        return;
      }

      // Calculate position
      const rect = range.getBoundingClientRect();
      
      // Check active formats
      setActiveFormats({
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        strikethrough: document.queryCommandState('strikeThrough'),
        justifyLeft: document.queryCommandState('justifyLeft'),
        justifyCenter: document.queryCommandState('justifyCenter'),
        justifyRight: document.queryCommandState('justifyRight'),
      });

      setPosition({
        top: rect.top - 50,
        left: rect.left + rect.width / 2,
        visible: true
      });
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    // Hide when clicking outside
    const handleMouseDown = (e) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target) && !e.target.closest('[contenteditable="true"]')) {
        setPosition(prev => ({ ...prev, visible: false }));
        setShowColorPicker(false);
        setShowBgColorPicker(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [showColorPicker, showBgColorPicker]);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    // Force re-check formats
    setActiveFormats({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      strikethrough: document.queryCommandState('strikeThrough'),
      justifyLeft: document.queryCommandState('justifyLeft'),
      justifyCenter: document.queryCommandState('justifyCenter'),
      justifyRight: document.queryCommandState('justifyRight'),
    });
  };

  if (!position.visible) return null;

  const colors = ['#000000', '#555555', '#888888', '#cc0000', '#e64835', '#8DC63F', '#0066cc', '#ffffff'];

  return (
    <div 
      ref={toolbarRef}
      className="fixed z-50 flex items-center bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-200 p-1 gap-1 -translate-x-1/2 transition-opacity"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onMouseDown={(e) => e.preventDefault()} // Keep selection
    >
      <ToolbarButton 
        icon={<Bold size={16} />} 
        active={activeFormats.bold} 
        onClick={() => execCommand('bold')} 
        title="굵게"
      />
      <ToolbarButton 
        icon={<Italic size={16} />} 
        active={activeFormats.italic} 
        onClick={() => execCommand('italic')} 
        title="이탤릭"
      />
      <ToolbarButton 
        icon={<Underline size={16} />} 
        active={activeFormats.underline} 
        onClick={() => execCommand('underline')} 
        title="밑줄"
      />
      <ToolbarButton 
        icon={<Strikethrough size={16} />} 
        active={activeFormats.strikethrough} 
        onClick={() => execCommand('strikeThrough')} 
        title="취소선"
      />
      
      <div className="w-[1px] h-5 bg-gray-300 mx-1"></div>
      
      <div className="relative">
        <ToolbarButton 
          icon={<Type size={16} />} 
          active={showColorPicker} 
          onClick={() => { setShowColorPicker(!showColorPicker); setShowBgColorPicker(false); }} 
          title="글자색"
        />
        {showColorPicker && (
          <div className="absolute top-full left-0 mt-2 p-2 bg-white rounded-lg shadow-lg border border-gray-200 grid grid-cols-4 gap-2 z-50">
            {colors.map(c => (
              <button 
                key={c}
                className="w-6 h-6 rounded-full border border-gray-300 hover:scale-110 transition-transform"
                style={{ backgroundColor: c }}
                onClick={() => { execCommand('foreColor', c); setShowColorPicker(false); }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <ToolbarButton 
          icon={<Highlighter size={16} />} 
          active={showBgColorPicker} 
          onClick={() => { setShowBgColorPicker(!showBgColorPicker); setShowColorPicker(false); }} 
          title="배경색"
        />
        {showBgColorPicker && (
          <div className="absolute top-full left-0 mt-2 p-2 bg-white rounded-lg shadow-lg border border-gray-200 grid grid-cols-4 gap-2 z-50">
            {colors.map(c => (
              <button 
                key={c}
                className="w-6 h-6 rounded-full border border-gray-300 hover:scale-110 transition-transform"
                style={{ backgroundColor: c }}
                onClick={() => { execCommand('hiliteColor', c); setShowBgColorPicker(false); }}
              />
            ))}
            <button 
              className="col-span-4 py-1 text-[11px] bg-gray-100 rounded text-gray-600 hover:bg-gray-200"
              onClick={() => { execCommand('hiliteColor', 'transparent'); setShowBgColorPicker(false); }}
            >
              배경색 없음
            </button>
          </div>
        )}
      </div>

      <div className="w-[1px] h-5 bg-gray-300 mx-1"></div>

      <ToolbarButton 
        icon={<AlignLeft size={16} />} 
        active={activeFormats.justifyLeft} 
        onClick={() => execCommand('justifyLeft')} 
        title="왼쪽 정렬"
      />
      <ToolbarButton 
        icon={<AlignCenter size={16} />} 
        active={activeFormats.justifyCenter} 
        onClick={() => execCommand('justifyCenter')} 
        title="가운데 정렬"
      />
      <ToolbarButton 
        icon={<AlignRight size={16} />} 
        active={activeFormats.justifyRight} 
        onClick={() => execCommand('justifyRight')} 
        title="오른쪽 정렬"
      />

      <div className="w-[1px] h-5 bg-gray-300 mx-1"></div>

      <select 
        className="text-[13px] bg-transparent outline-none cursor-pointer text-gray-700 hover:bg-gray-100 px-1 py-1 rounded"
        onChange={(e) => execCommand('fontSize', e.target.value)}
        title="글자 크기"
        defaultValue="3"
      >
        <option value="1">가장 작게</option>
        <option value="2">작게</option>
        <option value="3">보통</option>
        <option value="4">조금 크게</option>
        <option value="5">크게</option>
        <option value="6">매우 크게</option>
        <option value="7">가장 크게</option>
      </select>

      <div className="w-[1px] h-5 bg-gray-300 mx-1"></div>
      
      <ToolbarButton 
        icon={<List size={16} />} 
        onClick={() => execCommand('insertUnorderedList')} 
        title="글머리 기호"
      />
      <ToolbarButton 
        icon={<X size={16} className="text-red-500" />} 
        onClick={() => execCommand('removeFormat')} 
        title="서식 지우기"
      />
    </div>
  );
}

function ToolbarButton({ icon, onClick, active, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded flex items-center justify-center transition-colors ${active ? 'bg-[#8DC63F]/20 text-[#8DC63F]' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      {icon}
    </button>
  );
}
