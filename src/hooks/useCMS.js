import { useState, useEffect } from 'react';

let cmsDataCache = null;
let cmsDataPromise = null;

export const fetchCMSData = async () => {
  if (cmsDataCache) return cmsDataCache;
  if (cmsDataPromise) return cmsDataPromise;
  cmsDataPromise = fetch('/api/cms/data').then(res => res.json()).then(data => {
    if (data.success) {
      cmsDataCache = data.data;
      return cmsDataCache;
    }
    return {};
  }).catch(() => ({}));
  return cmsDataPromise;
};

export const saveToServer = async (payload) => {
  try {
    await fetch('/api/cms/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.error('Failed to save to CMS API', e);
  }
};

export function useCMSData(key, defaultData) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return defaultData;
  });

  useEffect(() => {
    fetchCMSData().then(serverData => {
      if (serverData && serverData[key] !== undefined) {
        setData(serverData[key]);
        localStorage.setItem(key, JSON.stringify(serverData[key]));
      }
    });

    const handleUpdate = () => {
      try {
        const saved = localStorage.getItem(key);
        if (saved) setData(JSON.parse(saved));
      } catch(e) {}
    };
    
    let eventName = 'storage';
    if (key === 'cms_sections') eventName = 'cms_sections_updated';
    else if (key === 'cms_heroSlides') eventName = 'cms_hero_updated';
    else if (key === 'cms_quickSection' || key === 'cms_quickLinks') eventName = 'cms_quick_updated';
    else if (key === 'cms_pastorSection') eventName = 'cms_pastor_updated';
    else if (key === 'cms_footerSection') eventName = 'cms_footer_updated';

    window.addEventListener(eventName, handleUpdate);
    return () => window.removeEventListener(eventName, handleUpdate);
  }, [key]);

  return data;
}
