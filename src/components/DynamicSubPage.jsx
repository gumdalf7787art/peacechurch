import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlockRenderer } from './PageBlocks';
import { PAGE_TEMPLATES } from '../data/pageTemplates';

export default function DynamicSubPage({ defaultSlug }) {
  const location = useLocation();
  const { slug } = useParams();
  const [content, setContent] = useState(null);
  const [blocks, setBlocks] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const pathSlug = location.pathname.replace(/^\/+|\/+$/g, ''); // Removes leading/trailing slashes, e.g., 'about/sample2'
  const currentSlug = slug || defaultSlug || pathSlug;

  useEffect(() => {
    if (!currentSlug) return;
    
    setLoading(true);
    fetch(`/api/pages/${currentSlug}`)
      .then(res => {
        if (!res.ok) throw new Error('Page not found');
        return res.json();
      })
      .then(data => {
        if (data.success && data.page && data.page.is_published === 1) {
          try {
            // Try parsing content as JSON (Block Builder format)
            const parsedBlocks = JSON.parse(data.page.content);
            if (Array.isArray(parsedBlocks)) {
              // Check if it's practically empty or just a default placeholder
              const isDummy = parsedBlocks.length === 0 || 
                             (parsedBlocks.length === 1 && parsedBlocks[0].type === 'HeadingText' && parsedBlocks[0].data?.text === '큰 제목을 입력하세요');
              
              if (isDummy && PAGE_TEMPLATES[currentSlug]) {
                setBlocks(PAGE_TEMPLATES[currentSlug]);
              } else {
                setBlocks(parsedBlocks);
              }
            } else {
              setContent(data.page.content); // Fallback if parsed but not array
            }
          } catch (e) {
            // Not JSON, treat as raw HTML
            setContent(data.page.content);
          }
        } else {
          // If no content in DB but we have a template, show the template
          if (PAGE_TEMPLATES[currentSlug]) {
            setBlocks(PAGE_TEMPLATES[currentSlug]);
          } else {
            setContent(`
              <div style="text-align: center; padding: 60px 20px; background: #fafafa; border-radius: 12px; border: 1px dashed #ddd;">
                <div style="font-size: 48px; margin-bottom: 20px;">🚧</div>
                <h3 style="font-size: 20px; font-weight: bold; color: #333; margin-bottom: 12px;">현재 페이지는 내용이 비어있거나 비공개 상태입니다.</h3>
                <p style="color: #666; font-size: 15px; line-height: 1.6;">
                  이 페이지는 관리자 메뉴에서 새롭게 생성된 페이지입니다.<br/>
                  향후 <strong>[서브 페이지 편집]</strong> 기능을 통해 내용을 작성하실 수 있습니다.
                </p>
              </div>
            `);
          }
        }
      })
      .catch(err => {
        console.error(err);
        setContent(`
          <div style="text-align: center; padding: 60px 20px; background: #fafafa; border-radius: 12px; border: 1px dashed #ddd;">
            <div style="font-size: 48px; margin-bottom: 20px;">❓</div>
            <h3 style="font-size: 20px; font-weight: bold; color: #333; margin-bottom: 12px;">요청하신 페이지를 찾을 수 없습니다.</h3>
            <p style="color: #666; font-size: 15px; line-height: 1.6;">
              주소가 잘못되었거나 삭제된 페이지일 수 있습니다.
            </p>
          </div>
        `);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentSlug, location.pathname]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-20 min-h-[300px]">
        <div className="animate-pulse w-10 h-10 border-4 border-[#8DC63F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {blocks ? (
        <BlockRenderer blocks={blocks} />
      ) : (
        <div 
          className="prose max-w-none prose-lg prose-headings:font-bold prose-a:text-[#8DC63F]"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      )}
    </div>
  );
}
