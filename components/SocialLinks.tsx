import React from 'react';
import { SocialLinks as SocialLinksType, TranslationKey } from '../types';

interface SocialLinksProps {
  socials: SocialLinksType;
  t: (key: TranslationKey) => string;
}

const ICONS = {
    spotify: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18v-5l6-3-6-3v5H3V6h18v12H9z"/></svg>,
    appleMusic: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 0 1.25-1.06 2.5-2.25 2.5-4C18.5 14.53 17.5 13 16 13c-1.5 0-2.25 1.06-3.5 1.06-1.25 0-2.5-1.06-3.5-1.06-1.5 0-2.5 1.53-2.5 3.44 0 1.75 1.25 2.94 2.5 4 .75.53 1.5 1.06 2.5 1.06zM12 21c-1.5 0-2.5-1-3.5-1S6 21 6 21"/><path d="M12 3v11c0 2.5-2 4-4 4s-4-1.5-4-4V3"/></svg>,
    youtube: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v-6l5 3-5 3z"/><path d="M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></svg>,
    instagram: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    twitter: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
    facebook: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
};

const SocialLinks: React.FC<SocialLinksProps> = ({ socials, t }) => {
  // Fix: Changed JSX.Element to React.ReactNode to resolve the "Cannot find namespace 'JSX'" error.
  const socialPlatforms: { key: keyof SocialLinksType, icon: React.ReactNode, nameKey: TranslationKey }[] = [
    { key: 'spotify', icon: ICONS.spotify, nameKey: 'spotify' },
    { key: 'appleMusic', icon: ICONS.appleMusic, nameKey: 'appleMusic' },
    { key: 'youtube', icon: ICONS.youtube, nameKey: 'youtube' },
    { key: 'instagram', icon: ICONS.instagram, nameKey: 'instagram' },
    { key: 'twitter', icon: ICONS.twitter, nameKey: 'twitter' },
    { key: 'facebook', icon: ICONS.facebook, nameKey: 'facebook' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialPlatforms.map(({ key, icon, nameKey }) => {
        const url = socials[key];
        if (url) {
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-500 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              aria-label={t(nameKey)}
            >
              {icon}
            </a>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SocialLinks;