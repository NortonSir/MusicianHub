import React from 'react';
import { ArtistProfile, TranslationKey } from '../types';

interface HeaderProps {
  profile: ArtistProfile;
  t: (key: TranslationKey) => string;
  onBackToList?: () => void;
}

const Header: React.FC<HeaderProps> = ({ profile, t, onBackToList }) => {
  return (
    <header className="relative h-64 md:h-80 w-full bg-white">
      {onBackToList && (
        <button
          onClick={onBackToList}
          className="lg:hidden absolute top-4 left-4 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 transition-colors shadow-lg"
          aria-label={t('backToList')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        </button>
      )}
      <img
        src={profile.coverImage}
        alt="Cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex items-end space-x-4 md:space-x-6">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-lg flex-shrink-0 -mb-8 md:-mb-12">
          <img
            src={profile.profilePicture}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pb-8 md:pb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight drop-shadow-sm">{profile.name}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-gray-600 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-md">
            <span>{profile.genre}</span>
            <span className="hidden md:inline">•</span>
            <span>{profile.location}</span>
             {profile.members && (
                 <>
                    <span className="hidden md:inline">•</span>
                    <span>{t('members')}: {profile.members.join(', ')}</span>
                 </>
             )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;