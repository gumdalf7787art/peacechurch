import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flame, Users, Heart, Globe, Image as ImageIcon, Plus, Trash2 } from 'lucide-react';

// -------------------------------------------------------------
// ICON MAP
// -------------------------------------------------------------
export const IconMap = {
  BookOpen: <BookOpen className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  ImageIcon: <ImageIcon className="w-8 h-8" />
};

// -------------------------------------------------------------
// INLINE EDITING COMPONENTS
// -------------------------------------------------------------
export const EditableText = ({ tag: Tag = 'div', value, onChange, className, isEditMode, placeholder, multiline, ...props }) => {
  if (!isEditMode) {
    return <Tag className={className} {...props}>{value}</Tag>;
  }

  const handleBlur = (e) => {
    if (onChange && e.target.innerText !== value) {
      onChange(e.target.innerText);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} outline-none ring-2 ring-transparent focus:ring-[#8DC63F]/50 hover:bg-black/5 rounded transition-colors empty:before:content-[attr(placeholder)] empty:before:text-gray-400 cursor-text min-h-[1em]`}
      placeholder={placeholder}
      {...props}
    >
      {value}
    </Tag>
  );
};

export const EditableImage = ({ src, onChange, className, isEditMode, placeholder, imageClassName }) => {
  if (!isEditMode) {
    return src ? <img src={src} className={imageClassName} alt="" /> : (placeholder || null);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64Data = event.target.result;
      const extension = file.name.split('.').pop() || 'webp';
      try {
        const res = await fetch('/api/cms/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ base64Data, extension })
        });
        const data = await res.json();
        if (data.success) {
          onChange(data.url);
        } else {
          alert('업로드 실패: ' + data.error);
        }
      } catch (err) {
        alert('업로드 오류 발생');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`relative group ${className}`}>
      {src ? (
        <img src={src} className={imageClassName} alt="" />
      ) : (
        placeholder || <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">이미지 추가</div>
      )}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer rounded-[inherit]">
        <label className="text-white text-[12px] font-bold bg-black/50 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-black/70 flex items-center">
          <ImageIcon size={14} className="mr-1" /> 사진 변경
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 1. HeadingText Block
// -------------------------------------------------------------
export function HeadingTextBlock({ data, isEditMode, onChange }) {
  return (
    <section className="text-center py-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {(data.badge || isEditMode) && (
          <EditableText
            tag="span"
            value={data.badge || ''}
            onChange={(val) => onChange({ badge: val })}
            isEditMode={isEditMode}
            placeholder="배지 입력 (예: OUR VISION)"
            className="text-[#8DC63F] font-bold tracking-widest text-[12px] md:text-sm mb-3 md:mb-4 block"
          />
        )}
        <EditableText
          tag="h2"
          value={data.title || ''}
          onChange={(val) => onChange({ title: val })}
          isEditMode={isEditMode}
          placeholder="큰 제목을 입력하세요"
          className="text-[28px] md:text-4xl font-extrabold text-black mb-8 tracking-tight"
        />
        {(data.description || isEditMode) && (
          <EditableText
            tag="p"
            multiline={true}
            value={data.description || ''}
            onChange={(val) => onChange({ description: val })}
            isEditMode={isEditMode}
            placeholder="상세 설명을 입력하세요"
            className="text-[16px] text-gray-600 max-w-2xl mx-auto whitespace-pre-wrap leading-relaxed"
          />
        )}
      </motion.div>
    </section>
  );
}

// -------------------------------------------------------------
// 2. VisionHighlight Block
// -------------------------------------------------------------
export function VisionHighlightBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#f8f9fa] border-l-[4px] md:border-l-[6px] border-[#cc0000] p-6 md:p-14 rounded-r-2xl md:rounded-r-3xl shadow-sm text-left md:text-center relative"
      >
        <EditableText
          tag="h3"
          multiline={true}
          value={data.title || ''}
          onChange={(val) => onChange({ title: val })}
          isEditMode={isEditMode}
          placeholder="핵심 비전 문장을 입력하세요"
          className="text-[20px] md:text-[32px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.5] tracking-tight whitespace-pre-wrap"
        />
        <div className="text-[15px] md:text-lg text-gray-700 leading-relaxed md:leading-loose break-keep max-w-4xl mx-auto space-y-4 md:space-y-5">
          {isEditMode ? (
            <EditableText
              tag="div"
              multiline={true}
              value={(data.paragraphs || []).join('\n')}
              onChange={(val) => onChange({ paragraphs: val.split('\n') })}
              isEditMode={true}
              placeholder="설명 단락을 입력하세요"
            />
          ) : (
            data.paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
          )}
          {(data.highlightText || isEditMode) && (
            <p className="font-semibold text-black mt-6 md:mt-8 text-[16px] md:text-[19px]">
              <strong className="text-[#cc0000] font-extrabold">
                <EditableText
                  tag="span"
                  value={data.highlightText || ''}
                  onChange={(val) => onChange({ highlightText: val })}
                  isEditMode={isEditMode}
                  placeholder="강조할 텍스트 입력"
                />
              </strong>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

// -------------------------------------------------------------
// 3. CoreValues Block
// -------------------------------------------------------------
export function CoreValuesBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-8">
      {(data.title || isEditMode) && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <EditableText
            tag="h2"
            value={data.title || ''}
            onChange={(val) => onChange({ title: val })}
            isEditMode={isEditMode}
            placeholder="핵심 가치 제목"
            className="text-[26px] md:text-4xl font-extrabold text-black tracking-tight"
          />
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {data.values?.map((value, idx) => (
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
                {IconMap[value.icon] || IconMap.BookOpen}
              </div>
              <EditableText
                tag="span"
                value={value.num || ''}
                onChange={(val) => {
                  const newVals = [...data.values];
                  newVals[idx] = { ...value, num: val };
                  onChange({ values: newVals });
                }}
                isEditMode={isEditMode}
                placeholder="01"
                className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-[#cc0000]/20 transition-colors duration-300"
              />
            </div>
            <EditableText
              tag="h3"
              value={value.title || ''}
              onChange={(val) => {
                const newVals = [...data.values];
                newVals[idx] = { ...value, title: val };
                onChange({ values: newVals });
              }}
              isEditMode={isEditMode}
              placeholder="가치 제목"
              className="text-[18px] md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight"
            />
            <EditableText
              tag="p"
              multiline={true}
              value={value.desc || ''}
              onChange={(val) => {
                const newVals = [...data.values];
                newVals[idx] = { ...value, desc: val };
                onChange({ values: newVals });
              }}
              isEditMode={isEditMode}
              placeholder="가치 설명을 입력하세요"
              className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed break-keep"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 4. StaffGrid Block
// -------------------------------------------------------------
export function StaffGridBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-8">
      {(data.title || isEditMode) && (
        <EditableText
          tag="h3"
          value={data.title || ''}
          onChange={(val) => onChange({ title: val })}
          isEditMode={isEditMode}
          placeholder="스태프 섹션 제목"
          className="text-[22px] font-bold text-[#222] border-l-[4px] border-[#cc0000] pl-3 mb-6 block"
        />
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {data.staff?.map((person, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
            <div className="w-full h-[190px] bg-gray-100 flex items-center justify-center text-gray-400 text-sm overflow-hidden relative group">
              <EditableImage
                src={person.image}
                onChange={(url) => {
                  const newStaff = [...data.staff];
                  newStaff[idx] = { ...person, image: url };
                  onChange({ staff: newStaff });
                }}
                isEditMode={isEditMode}
                className="w-full h-full"
                imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                placeholder={<ImageIcon size={32} className="opacity-50" />}
              />
            </div>
            <div className="p-5 text-center">
              <EditableText
                tag="div"
                value={person.role || ''}
                onChange={(val) => {
                  const newStaff = [...data.staff];
                  newStaff[idx] = { ...person, role: val };
                  onChange({ staff: newStaff });
                }}
                isEditMode={isEditMode}
                placeholder="직책"
                className="text-[13px] text-[#cc0000] font-semibold mb-1.5"
              />
              <EditableText
                tag="div"
                value={person.name || ''}
                onChange={(val) => {
                  const newStaff = [...data.staff];
                  newStaff[idx] = { ...person, name: val };
                  onChange({ staff: newStaff });
                }}
                isEditMode={isEditMode}
                placeholder="이름"
                className="text-[18px] font-bold text-[#111] mb-1"
              />
              {(person.department || isEditMode) && (
                <EditableText
                  tag="div"
                  value={person.department || ''}
                  onChange={(val) => {
                    const newStaff = [...data.staff];
                    newStaff[idx] = { ...person, department: val };
                    onChange({ staff: newStaff });
                  }}
                  isEditMode={isEditMode}
                  placeholder="부서 (선택)"
                  className="text-[13px] text-gray-500"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 5. WorshipSchedule Block
// -------------------------------------------------------------
export function WorshipScheduleBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-8">
      {(data.title || isEditMode) && (
        <EditableText
          tag="h3"
          value={data.title || ''}
          onChange={(val) => onChange({ title: val })}
          isEditMode={isEditMode}
          placeholder="예배 시간표 제목"
          className="text-[22px] font-bold text-[#cc0000] mb-4 block"
        />
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-t-2 border-[#cc0000] border-b border-gray-300 border-collapse text-center text-[14px] min-w-[600px]">
          <thead>
            <tr>
              <th className="w-[15%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">예배</th>
              <th className="w-[15%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">시간</th>
              <th className="w-[25%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">장소</th>
              <th className="w-[45%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">안내</th>
              {isEditMode && <th className="w-[10%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-400 font-bold">관리</th>}
            </tr>
          </thead>
          <tbody>
            {data.schedules?.map((item, idx) => (
              <tr key={idx}>
                <td className="py-3 border-b border-gray-200 text-[#111] font-medium">
                  <EditableText
                    value={item.name || ''}
                    onChange={(val) => {
                      const newSchedules = [...data.schedules];
                      newSchedules[idx] = { ...item, name: val };
                      onChange({ schedules: newSchedules });
                    }}
                    isEditMode={isEditMode}
                    placeholder="예배명"
                  />
                </td>
                <td className="py-3 border-b border-gray-200 text-gray-800">
                  <EditableText
                    value={item.time || ''}
                    onChange={(val) => {
                      const newSchedules = [...data.schedules];
                      newSchedules[idx] = { ...item, time: val };
                      onChange({ schedules: newSchedules });
                    }}
                    isEditMode={isEditMode}
                    placeholder="시간"
                  />
                </td>
                <td className="py-3 border-b border-gray-200 text-gray-500 whitespace-pre-wrap">
                  <EditableText
                    value={item.location || ''}
                    onChange={(val) => {
                      const newSchedules = [...data.schedules];
                      newSchedules[idx] = { ...item, location: val };
                      onChange({ schedules: newSchedules });
                    }}
                    isEditMode={isEditMode}
                    placeholder="장소"
                  />
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-500 text-left leading-relaxed">
                  <EditableText
                    multiline={true}
                    value={item.description || ''}
                    onChange={(val) => {
                      const newSchedules = [...data.schedules];
                      newSchedules[idx] = { ...item, description: val };
                      onChange({ schedules: newSchedules });
                    }}
                    isEditMode={isEditMode}
                    placeholder="안내 내용"
                  />
                </td>
                {isEditMode && (
                  <td className="py-3 border-b border-gray-200 text-center align-middle">
                    <button 
                      onClick={() => {
                        const newSchedules = data.schedules.filter((_, i) => i !== idx);
                        onChange({ schedules: newSchedules });
                      }}
                      className="text-red-400 hover:text-red-600 p-1 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                      title="행 삭제"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {isEditMode && (
        <div className="mt-4 flex justify-center">
          <button 
            onClick={() => {
              const newSchedules = [...(data.schedules || []), { name: '', time: '', location: '', description: '' }];
              onChange({ schedules: newSchedules });
            }}
            className="flex items-center text-[13px] text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-4 py-2 rounded-lg font-bold transition-colors"
          >
            <Plus size={16} className="mr-1" />
            예배 일정 추가
          </button>
        </div>
      )}
    </section>
  );
}

// -------------------------------------------------------------
// 6. ImageWithTextBlock
// -------------------------------------------------------------
export function ImageWithTextBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="w-full md:w-2/5 min-h-[250px] md:min-h-auto relative bg-gray-100">
          <EditableImage
            src={data.image}
            onChange={(url) => onChange({ image: url })}
            isEditMode={isEditMode}
            className="absolute inset-0 w-full h-full"
            imageClassName="w-full h-full object-cover absolute inset-0"
            placeholder={<div className="absolute inset-0 w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">사진 추가</div>}
          />
        </div>
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
          <EditableText
            tag="h4"
            value={data.title || ''}
            onChange={(val) => onChange({ title: val })}
            isEditMode={isEditMode}
            placeholder="제목을 입력하세요"
            className="text-[#cc0000] font-bold text-[20px] mb-4"
          />
          <EditableText
            tag="p"
            multiline={true}
            value={data.description || ''}
            onChange={(val) => onChange({ description: val })}
            isEditMode={isEditMode}
            placeholder="상세 설명을 입력하세요"
            className="leading-[1.8] text-gray-600 whitespace-pre-wrap"
          />
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 7. RichTextBlock (Fallback for generic HTML or simple text)
// -------------------------------------------------------------
export function RichTextBlock({ data, isEditMode }) {
  return (
    <section className="py-8 relative group">
      {isEditMode && (
        <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] px-2 py-1 rounded font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          자유양식은 우측 편집창에서 HTML로 수정하세요.
        </div>
      )}
      <div 
        className={`prose max-w-none prose-lg prose-headings:font-bold prose-a:text-[#8DC63F] ${isEditMode ? 'pointer-events-none' : ''}`}
        dangerouslySetInnerHTML={{ __html: data.html }} 
      />
    </section>
  );
}

// -------------------------------------------------------------
// 8. PastorGreeting Block
// -------------------------------------------------------------
export function PastorGreetingBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Profile Section */}
        <div className="w-full md:w-[32%] lg:w-[35%] shrink-0">
          <div className="rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm border border-gray-100">
            <EditableImage
              src={data.image}
              onChange={(url) => onChange({ image: url })}
              isEditMode={isEditMode}
              className="w-full aspect-[3/4]"
              imageClassName="w-full h-full object-cover"
              placeholder={
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-200">
                  <ImageIcon size={48} className="opacity-50" />
                </div>
              }
            />
          </div>
          
          <div className="bg-[#f9f9f9] rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-[20px] font-bold text-gray-900 mb-4 inline-block relative pb-3 flex items-center gap-1">
              <EditableText tag="span" value={data.name || ''} onChange={(val) => onChange({ name: val })} isEditMode={isEditMode} placeholder="이름" />
              <EditableText tag="span" className="font-medium text-[16px]" value={data.title || ''} onChange={(val) => onChange({ title: val })} isEditMode={isEditMode} placeholder="직책" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#cc0000]"></div>
            </h3>
            <div className="space-y-3">
              {isEditMode ? (
                <EditableText
                  tag="div"
                  multiline={true}
                  value={(data.history || []).join('\n')}
                  onChange={(val) => onChange({ history: val.split('\n') })}
                  isEditMode={true}
                  placeholder="약력을 엔터로 구분하여 입력"
                  className="text-[14px] text-gray-600 leading-relaxed whitespace-pre-wrap"
                />
              ) : (
                <ul className="space-y-3">
                  {data.history?.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-gray-600">
                      <span className="text-gray-300 mr-2 mt-0.5 text-[10px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 space-y-6 md:space-y-10 mt-4 md:mt-0">
          {(data.greetingPart1 || isEditMode) && (
            <EditableText
              tag="div"
              multiline={true}
              value={data.greetingPart1 || ''}
              onChange={(val) => onChange({ greetingPart1: val })}
              isEditMode={isEditMode}
              placeholder="인사말 1부를 입력하세요"
              className="text-[16px] md:text-[17px] leading-[1.8] text-gray-700 whitespace-pre-wrap break-keep"
            />
          )}
          
          {(data.quoteText || isEditMode) && (
            <div className="border-l-[4px] border-[#cc0000] pl-6 py-2 bg-white rounded-r-xl shadow-sm my-8 relative">
              <EditableText
                tag="p"
                multiline={true}
                value={data.quoteText || ''}
                onChange={(val) => onChange({ quoteText: val })}
                isEditMode={isEditMode}
                placeholder="인용구를 입력하세요"
                className="font-bold text-[18px] md:text-[20px] text-gray-800 leading-[1.6] break-keep"
              />
            </div>
          )}

          {(data.greetingPart2 || isEditMode) && (
            <EditableText
              tag="div"
              multiline={true}
              value={data.greetingPart2 || ''}
              onChange={(val) => onChange({ greetingPart2: val })}
              isEditMode={isEditMode}
              placeholder="인사말 2부를 입력하세요"
              className="text-[16px] md:text-[17px] leading-[1.8] text-gray-700 whitespace-pre-wrap break-keep"
            />
          )}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 9. VisionHero Block
// -------------------------------------------------------------
export function VisionHeroBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-16 md:py-24 bg-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <EditableText
          tag="h2"
          value={data.title || ''}
          onChange={(val) => onChange({ title: val })}
          isEditMode={isEditMode}
          placeholder="큰 비전 제목"
          className="text-[#8DC63F] font-bold tracking-widest text-sm md:text-base mb-6 md:mb-8 uppercase"
        />
        <EditableText
          tag="h3"
          multiline={true}
          value={data.slogan || ''}
          onChange={(val) => onChange({ slogan: val })}
          isEditMode={isEditMode}
          placeholder="비전 슬로건을 입력하세요"
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10 leading-[1.4] tracking-tight break-keep"
        />
        <div className="text-[16px] md:text-lg text-gray-600 leading-[1.8] md:leading-[2] space-y-6 break-keep mx-auto font-medium">
          {isEditMode ? (
            <EditableText
              tag="div"
              multiline={true}
              value={(data.paragraphs || []).join('\n\n')}
              onChange={(val) => onChange({ paragraphs: val.split('\n\n') })}
              isEditMode={true}
              placeholder="단락을 두 번 엔터로 구분하여 입력하세요"
            />
          ) : (
            data.paragraphs?.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-bold">$1</strong>') }} />
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
}

// -------------------------------------------------------------
// 10. VisionGoals Block
// -------------------------------------------------------------
export function VisionGoalsBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <EditableText
            tag="h2"
            value={data.title || ''}
            onChange={(val) => onChange({ title: val })}
            isEditMode={isEditMode}
            placeholder="목표 섹션 제목"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {data.goals?.map((goal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-indigo-600 font-bold text-lg">{idx + 1}</span>
              </div>
              <div className="flex-1">
                <EditableText
                  tag="h3"
                  value={goal.title || ''}
                  onChange={(val) => {
                    const newGoals = [...data.goals];
                    newGoals[idx] = { ...goal, title: val };
                    onChange({ goals: newGoals });
                  }}
                  isEditMode={isEditMode}
                  placeholder="목표 제목"
                  className="text-xl font-bold text-gray-900 mb-2"
                />
                <EditableText
                  tag="p"
                  multiline={true}
                  value={goal.desc || ''}
                  onChange={(val) => {
                    const newGoals = [...data.goals];
                    newGoals[idx] = { ...goal, desc: val };
                    onChange({ goals: newGoals });
                  }}
                  isEditMode={isEditMode}
                  placeholder="목표 상세 설명"
                  className="text-gray-600 leading-relaxed text-[15px] break-keep"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 11. VisionOutro Block
// -------------------------------------------------------------
export function VisionOutroBlock({ data, isEditMode, onChange }) {
  return (
    <section className="py-20 md:py-32 bg-gray-900 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-6 relative z-10"
      >
        <EditableText
          tag="h2"
          value={data.slogan || ''}
          onChange={(val) => onChange({ slogan: val })}
          isEditMode={isEditMode}
          placeholder="영문 슬로건 (예: ONE WAY JESUS)"
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200 tracking-widest mb-6"
        />
        <EditableText
          tag="h3"
          value={data.title || ''}
          onChange={(val) => onChange({ title: val })}
          isEditMode={isEditMode}
          placeholder="한글 슬로건"
          className="text-xl md:text-3xl font-bold text-[#8DC63F] mb-10 tracking-tight"
        />
        <div className="text-[16px] md:text-[19px] text-gray-300 leading-[1.8] space-y-6 break-keep font-light">
          {isEditMode ? (
            <EditableText
              tag="div"
              multiline={true}
              value={(data.paragraphs || []).join('\n\n')}
              onChange={(val) => onChange({ paragraphs: val.split('\n\n') })}
              isEditMode={true}
              placeholder="단락을 두 번 엔터로 구분하여 입력하세요"
            />
          ) : (
            data.paragraphs?.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
            ))
          )}
        </div>
        
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-gray-800">
          <EditableText
            tag="div"
            value={data.logoText || ''}
            onChange={(val) => onChange({ logoText: val })}
            isEditMode={isEditMode}
            placeholder="교회 로고 텍스트"
            className="text-lg md:text-xl font-bold tracking-widest text-gray-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

// -------------------------------------------------------------
// Block Renderer Registry
// -------------------------------------------------------------
const BLOCK_REGISTRY = {
  HeadingText: HeadingTextBlock,
  VisionHighlight: VisionHighlightBlock,
  CoreValues: CoreValuesBlock,
  StaffGrid: StaffGridBlock,
  WorshipSchedule: WorshipScheduleBlock,
  ImageWithText: ImageWithTextBlock,
  RichText: RichTextBlock,
  PastorGreeting: PastorGreetingBlock,
  VisionHero: VisionHeroBlock,
  VisionGoals: VisionGoalsBlock,
  VisionOutro: VisionOutroBlock
};

export function BlockRenderer({ blocks, isEditMode = false, onChange }) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2">
      {blocks.map((block) => {
        const Component = BLOCK_REGISTRY[block.type];
        if (!Component) return <div key={block.id} className="text-red-500 p-4">Unknown block type: {block.type}</div>;
        return (
          <Component 
            key={block.id} 
            data={block.data} 
            isEditMode={isEditMode}
            onChange={isEditMode && onChange ? (newData) => onChange(block.id, newData) : undefined}
          />
        );
      })}
    </div>
  );
}

// -------------------------------------------------------------
// Block Definitions (For Admin UI generation)
// -------------------------------------------------------------
export const BLOCK_DEFINITIONS = [
  {
    type: 'VisionHero',
    label: '비전 히어로 (메인 비전)',
    icon: <Flame size={16} />,
    defaultData: {
      title: '평화교회 비전과 목표',
      slogan: '예수 그리스도의 사랑으로\n사람을 세우고, 세상을 섬기는 교회',
      paragraphs: [
        '평화교회는 예수 그리스도를 삶의 유일한 길로 고백하며,\n말씀과 기도 위에 굳게 서서 하나님의 사랑을 세상 가운데 나누는 교회를 꿈꿉니다.',
        '교회 안에서만 머무르는 신앙이 아니라\n가정과 일터, 이웃과 지역사회 속에서 그리스도의 사랑을 실천하며,\n상처받은 이들을 품고 소외된 이들과 함께하는 것이 우리의 사명입니다.',
        '한 사람의 변화가 한 가정을 변화시키고,\n한 가정의 변화가 지역사회를 변화시키며,\n그 변화가 세상을 향한 하나님의 사랑으로 이어지기를 소망합니다.',
        '평화교회는 모든 세대가 믿음 안에서 함께 성장하고\n세상 속에서 복음의 빛을 밝히는 **건강하고 따뜻한 신앙공동체**를 세워가겠습니다.'
      ]
    }
  },
  {
    type: 'VisionGoals',
    label: '비전 목표 (그리드)',
    icon: <Heart size={16} />,
    defaultData: {
      title: '우리의 목표',
      goals: [
        { title: '예배가 살아있는 교회', desc: '하나님을 기쁘시게 하는 진실한 예배를 드립니다.' },
        { title: '말씀으로 성장하는 교회', desc: '말씀을 배우고 삶으로 살아내는 성숙한 그리스도인을 세웁니다.' },
        { title: '기도로 하나 되는 교회', desc: '서로를 위해 기도하며 사랑과 믿음으로 하나 되는 공동체를 만듭니다.' },
        { title: '다음 세대와 함께하는 교회', desc: '다음 세대가 교회의 미래가 아니라 오늘의 교회로 함께 서도록 돕습니다.' },
        { title: '지역과 세상을 섬기는 교회', desc: '교회의 문을 세상을 향해 열고 도움이 필요한 곳으로 먼저 찾아갑니다.' }
      ]
    }
  },
  {
    type: 'VisionOutro',
    label: '비전 아웃트로 (하단 슬로건)',
    icon: <Globe size={16} />,
    defaultData: {
      slogan: 'ONE WAY JESUS',
      title: '오직 예수, 사랑으로 세상을 향하여',
      paragraphs: [
        '평화교회는 예수 그리스도를 따라\n**예배하고, 배우고, 사랑하며, 섬기고, 전하는 교회**가 되겠습니다.',
        '그리고 우리를 통해\n한 사람이 살아나고, 한 가정이 회복되며,\n지역사회와 세상에 하나님의 평화가 흘러가기를 소망합니다.'
      ],
      logoText: '평화교회 · Peace Methodist Church'
    }
  },
  {
    type: 'HeadingText',
    label: '제목 텍스트',
    icon: <BookOpen size={16} />,
    defaultData: { badge: 'BADGE', title: '큰 제목을 입력하세요', description: '간단한 설명을 입력하세요' }
  },
  {
    type: 'PastorGreeting',
    label: '담임목사 인사말',
    icon: <Users size={16} />,
    defaultData: {
      image: '',
      name: '장성진',
      title: '담임목사',
      history: [
        '감리교신학교 신학과 졸업',
        '감리교신학교 대학원 졸업',
        '평화감리교회 담임 (2016-현재)'
      ],
      greetingPart1: '평화교회 홈페이지를 찾아주신 여러분을 주님의 이름으로 환영합니다.\n평화교회를 섬기고 있는 담임목사 장성진입니다.\n\n교회는 단순히 사람들이 모여 예배드리는 장소가 아니라, 하나님의 사랑을 배우고 그 사랑을 삶으로 살아내는 공동체라고 믿습니다.',
      quoteText: '복음은 말에만 머무는 것이 아니라 한 사람의 삶 곁으로 다가가 함께 울고, 함께 기뻐하며, 함께 걸어가는 사랑이어야 한다는 것입니다.',
      greetingPart2: '우리 교회가 예배의 기쁨이 살아 있는 교회, 말씀을 통해 삶의 방향을 발견하는 교회, 다음 세대가 믿음 안에서 꿈을 키우는 교회가 되기를 소망합니다.\n\n누구든 편안한 마음으로 찾아오십시오. 함께 예배하고, 함께 말씀을 배우며, 서로의 삶을 나누면서 믿음의 길을 함께 걸어가고 싶습니다.'
    }
  },
  {
    type: 'VisionHighlight',
    label: '핵심 비전 (강조 박스)',
    icon: <Flame size={16} />,
    defaultData: { 
      title: '강조할 핵심 문장', 
      paragraphs: ['설명 단락 1', '설명 단락 2'], 
      highlightText: '가장 하단에 들어갈 강조 문구'
    }
  },
  {
    type: 'CoreValues',
    label: '핵심 가치 4단 그리드',
    icon: <Heart size={16} />,
    defaultData: { 
      title: '우리가 세워가는 교회',
      values: [
        { num: '01', title: '가치 1', desc: '설명', icon: 'BookOpen' },
        { num: '02', title: '가치 2', desc: '설명', icon: 'Flame' },
        { num: '03', title: '가치 3', desc: '설명', icon: 'Users' },
        { num: '04', title: '가치 4', desc: '설명', icon: 'Heart' }
      ]
    }
  },
  {
    type: 'StaffGrid',
    label: '섬기는 사람들 (프로필 카드)',
    icon: <Users size={16} />,
    defaultData: {
      title: '목회자',
      staff: [
        { name: '이름', role: '직책', department: '부서', image: '' }
      ]
    }
  },
  {
    type: 'WorshipSchedule',
    label: '예배 시간표',
    icon: <Globe size={16} />,
    defaultData: {
      title: '주일예배',
      schedules: [
        { name: '1부예배', time: '오전 7시', location: '본당', description: '안내' }
      ]
    }
  },
  {
    type: 'ImageWithText',
    label: '좌측 사진 / 우측 글 (부서 소개)',
    icon: <ImageIcon size={16} />,
    defaultData: {
      title: '사역 소개',
      description: '부서나 사역에 대한 설명을 입력하세요.',
      image: ''
    }
  },
  {
    type: 'RichText',
    label: '일반 자유 양식 (HTML)',
    icon: <BookOpen size={16} />,
    defaultData: { html: '<p>자유롭게 내용을 작성하세요.</p>' }
  }
];
