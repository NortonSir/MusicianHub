import React from 'react';
import { MusicRelease, TranslationKey } from '../types';
import ProfileSection from './ProfileSection';

interface MusicSectionProps {
  music: MusicRelease[];
  t: (key: TranslationKey) => string;
}

const ICONS = {
    spotify: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18v-5l6-3-6-3v5H3V6h18v12H9z"/></svg>,
    appleMusic: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 0 1.25-1.06 2.5-2.25 2.5-4C18.5 14.53 17.5 13 16 13c-1.5 0-2.25 1.06-3.5 1.06-1.25 0-2.5-1.06-3.5-1.06-1.5 0-2.5 1.53-2.5 3.44 0 1.75 1.25 2.94 2.5 4 .75.53 1.5 1.06 2.5 1.06zM12 21c-1.5 0-2.5-1-3.5-1S6 21 6 21"/><path d="M12 3v11c0 2.5-2 4-4 4s-4-1.5-4-4V3"/></svg>,
    youtube: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v-6l5 3-5 3z"/><path d="M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></svg>,
};


const MusicItem: React.FC<{ item: MusicRelease }> = ({ item }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
    <img src={item.coverArt} alt={item.title} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
    <div className="flex-grow text-center sm:text-left">
      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.type} • {item.releaseDate}</p>
      <div className="flex justify-center sm:justify-start items-center gap-4 mt-2">
        {item.links.spotify && <a href={item.links.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">{ICONS.spotify}</a>}
        {item.links.appleMusic && <a href={item.links.appleMusic} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">{ICONS.appleMusic}</a>}
        {item.links.youtubeMusic && <a href={item.links.youtubeMusic} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">{ICONS.youtube}</a>}
      </div>
    </div>
  </div>
);

const MusicSection: React.FC<MusicSectionProps> = ({ music, t }) => {
  return (
    <ProfileSection title={t('music')}>
      <div className="space-y-4">
        {music.map(item => <MusicItem key={item.id} item={item} />)}
      </div>
    </ProfileSection>
  );
};

export default MusicSection;