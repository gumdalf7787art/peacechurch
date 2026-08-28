import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flame, Users, Heart, Globe, Image as ImageIcon } from 'lucide-react';

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
// 1. HeadingText Block
// -------------------------------------------------------------
export function HeadingTextBlock({ data }) {
  return (
    <section className="text-center py-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {data.badge && <span className="text-[#8DC63F] font-bold tracking-widest text-[12px] md:text-sm mb-3 md:mb-4 block">{data.badge}</span>}
        <h2 className="text-[28px] md:text-4xl font-extrabold text-black mb-8 tracking-tight">{data.title}</h2>
        {data.description && (
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto whitespace-pre-wrap leading-relaxed">
            {data.description}
          </p>
        )}
      </motion.div>
    </section>
  );
}

// -------------------------------------------------------------
// 2. VisionHighlight Block
// -------------------------------------------------------------
export function VisionHighlightBlock({ data }) {
  return (
    <section className="py-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#f8f9fa] border-l-[4px] md:border-l-[6px] border-[#cc0000] p-6 md:p-14 rounded-r-2xl md:rounded-r-3xl shadow-sm text-left md:text-center relative"
      >
        <h3 className="text-[20px] md:text-[32px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.5] tracking-tight whitespace-pre-wrap">
          {data.title}
        </h3>
        <div className="text-[15px] md:text-lg text-gray-700 leading-relaxed md:leading-loose break-keep max-w-4xl mx-auto space-y-4 md:space-y-5">
          {data.paragraphs?.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {data.highlightText && (
            <p className="font-semibold text-black mt-6 md:mt-8 text-[16px] md:text-[19px]">
              <strong className="text-[#cc0000] font-extrabold">{data.highlightText}</strong>
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
export function CoreValuesBlock({ data }) {
  return (
    <section className="py-8">
      {data.title && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[26px] md:text-4xl font-extrabold text-black tracking-tight">{data.title}</h2>
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
              <span className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-[#cc0000]/20 transition-colors duration-300">{value.num}</span>
            </div>
            <h3 className="text-[18px] md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">{value.title}</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed break-keep">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 4. StaffGrid Block
// -------------------------------------------------------------
export function StaffGridBlock({ data }) {
  return (
    <section className="py-8">
      {data.title && (
        <h3 className="text-[22px] font-bold text-[#222] border-l-[4px] border-[#cc0000] pl-3 mb-6">
          {data.title}
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {data.staff?.map((person, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
            <div className="w-full h-[190px] bg-gray-100 flex items-center justify-center text-gray-400 text-sm overflow-hidden relative group">
              {person.image ? (
                <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <ImageIcon size={32} className="opacity-50" />
              )}
            </div>
            <div className="p-5 text-center">
              <div className="text-[13px] text-[#cc0000] font-semibold mb-1.5">{person.role}</div>
              <div className="text-[18px] font-bold text-[#111] mb-1">{person.name}</div>
              {person.department && <div className="text-[13px] text-gray-500">{person.department}</div>}
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
export function WorshipScheduleBlock({ data }) {
  return (
    <section className="py-8">
      {data.title && (
        <h3 className="text-[22px] font-bold text-[#cc0000] mb-4">
          {data.title}
        </h3>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-t-2 border-[#cc0000] border-b border-gray-300 border-collapse text-center text-[14px] min-w-[600px]">
          <thead>
            <tr>
              <th className="w-[15%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">예배</th>
              <th className="w-[15%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">시간</th>
              <th className="w-[25%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">장소</th>
              <th className="w-[45%] py-3.5 bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">안내</th>
            </tr>
          </thead>
          <tbody>
            {data.schedules?.map((item, idx) => (
              <tr key={idx}>
                <td className="py-3 border-b border-gray-200 text-[#111] font-medium">{item.name}</td>
                <td className="py-3 border-b border-gray-200 text-gray-800">{item.time}</td>
                <td className="py-3 border-b border-gray-200 text-gray-500 whitespace-pre-wrap">{item.location}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-500 text-left leading-relaxed">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 6. ImageWithTextBlock
// -------------------------------------------------------------
export function ImageWithTextBlock({ data }) {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="w-full md:w-2/5 min-h-[250px] md:min-h-auto relative bg-gray-100">
          {data.image && <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />}
        </div>
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
          <h4 className="text-[#cc0000] font-bold text-[20px] mb-4">{data.title}</h4>
          <p className="leading-[1.8] text-gray-600 whitespace-pre-wrap">{data.description}</p>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 7. RichTextBlock (Fallback for generic HTML or simple text)
// -------------------------------------------------------------
export function RichTextBlock({ data }) {
  return (
    <section className="py-8">
      <div 
        className="prose max-w-none prose-lg prose-headings:font-bold prose-a:text-[#8DC63F]"
        dangerouslySetInnerHTML={{ __html: data.html }} 
      />
    </section>
  );
}

// -------------------------------------------------------------
// 8. PastorGreeting Block
// -------------------------------------------------------------
export function PastorGreetingBlock({ data }) {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Profile Section */}
        <div className="w-full md:w-[32%] lg:w-[35%] shrink-0">
          <div className="rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm border border-gray-100">
            {data.image ? (
              <img src={data.image} alt={data.name} className="w-full h-auto object-cover" />
            ) : (
              <div className="w-full aspect-[3/4] flex items-center justify-center text-gray-300 bg-gray-200">
                <ImageIcon size={48} className="opacity-50" />
              </div>
            )}
          </div>
          
          <div className="bg-[#f9f9f9] rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-[20px] font-bold text-gray-900 mb-4 inline-block relative pb-3">
              {data.name} <span className="font-medium text-[16px] ml-1">{data.title}</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#cc0000]"></div>
            </h3>
            <ul className="space-y-3">
              {data.history?.map((item, idx) => (
                <li key={idx} className="flex items-start text-[14px] text-gray-600">
                  <span className="text-gray-300 mr-2 mt-0.5 text-[10px]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 space-y-6 md:space-y-10 mt-4 md:mt-0">
          {data.greetingPart1 && (
            <div className="text-[16px] md:text-[17px] leading-[1.8] text-gray-700 whitespace-pre-wrap break-keep">
              {data.greetingPart1}
            </div>
          )}
          
          {data.quoteText && (
            <div className="border-l-[4px] border-[#cc0000] pl-6 py-2 bg-white rounded-r-xl shadow-sm my-8 relative">
              <p className="font-bold text-[18px] md:text-[20px] text-gray-800 leading-[1.6] break-keep">
                {data.quoteText}
              </p>
            </div>
          )}

          {data.greetingPart2 && (
            <div className="text-[16px] md:text-[17px] leading-[1.8] text-gray-700 whitespace-pre-wrap break-keep">
              {data.greetingPart2}
            </div>
          )}
        </div>
      </div>
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
  PastorGreeting: PastorGreetingBlock
};

export function BlockRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2">
      {blocks.map((block) => {
        const Component = BLOCK_REGISTRY[block.type];
        if (!Component) return <div key={block.id} className="text-red-500 p-4">Unknown block type: {block.type}</div>;
        return <Component key={block.id} data={block.data} />;
      })}
    </div>
  );
}

// -------------------------------------------------------------
// Block Definitions (For Admin UI generation)
// -------------------------------------------------------------
export const BLOCK_DEFINITIONS = [
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
