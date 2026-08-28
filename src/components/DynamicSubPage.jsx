import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DynamicSubPage() {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract slug from pathname (e.g. /about/pastor -> pastor)
    const slug = location.pathname.split('/').pop();
    if (!slug) return;

    setLoading(true);
    fetch(`/api/pages/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.page && data.page.is_published === 1) {
          setContent({
            title: data.page.title,
            body: data.page.content
          });
        } else {
          // If not found in DB, show a generic placeholder
          setContent({
            title: '페이지 준비중',
            body: `
              <div style="text-align: center; padding: 60px 20px; background: #fafafa; border-radius: 12px; border: 1px dashed #ddd;">
                <div style="font-size: 48px; margin-bottom: 20px;">🚧</div>
                <h3 style="font-size: 20px; font-weight: bold; color: #333; margin-bottom: 12px;">현재 페이지는 내용이 비어있거나 생성되지 않았습니다.</h3>
                <p style="color: #666; font-size: 15px; line-height: 1.6;">
                  이 페이지는 관리자 메뉴에서 새롭게 생성된 페이지이거나 아직 작성되지 않은 페이지입니다.<br/>
                  향후 <strong>[서브 페이지 편집]</strong> 기능을 통해 내용을 작성하실 수 있습니다.
                </p>
              </div>
            `
          });
        }
      })
      .catch(err => {
        console.error('Failed to fetch page content:', err);
        setContent(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-20">
        <div className="animate-pulse w-10 h-10 border-4 border-gray-200 border-t-ink rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="w-full prose max-w-none prose-lg prose-headings:font-bold prose-a:text-[#8DC63F]">
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </div>
  );
}
