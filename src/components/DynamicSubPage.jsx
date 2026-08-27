import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DynamicSubPage() {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In the future (Phase 3), this will fetch actual HTML/JSON content from /api/pages?path=${location.pathname}
    // For now, we simulate fetching content and show a generic placeholder if it's a new CMS page.
    setLoading(true);
    setTimeout(() => {
      setContent({
        title: '페이지 준비중',
        body: `
          <div style="text-align: center; padding: 60px 20px; background: #fafafa; border-radius: 12px; border: 1px dashed #ddd;">
            <div style="font-size: 48px; margin-bottom: 20px;">🚧</div>
            <h3 style="font-size: 20px; font-weight: bold; color: #333; margin-bottom: 12px;">현재 페이지는 내용이 비어있습니다.</h3>
            <p style="color: #666; font-size: 15px; line-height: 1.6;">
              이 페이지는 관리자 메뉴에서 새롭게 생성된 페이지입니다.<br/>
              향후 <strong>[서브 페이지 편집]</strong> 기능을 통해 내용을 작성하실 수 있습니다.
            </p>
          </div>
        `
      });
      setLoading(false);
    }, 300);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-20">
        <div className="animate-pulse w-10 h-10 border-4 border-gray-200 border-t-ink rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </div>
  );
}
