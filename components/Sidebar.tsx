import React from 'react';
import { Language, TranslationKey } from '../types';

interface SidebarProps {
  activeTab: 'profile' | 'analytics';
  setActiveTab: (tab: 'profile' | 'analytics') => void;
  onEdit: () => void;
  onShare: () => void;
  onDownloadEPK: () => void;
  onBackToList: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

// SVG Icons defined locally
const ICONS = {
    profile: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    analytics: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    edit: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    share: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
    download: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    backArrow: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>,
};


const NavItem: React.FC<{icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void}> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
        isActive
            ? 'bg-indigo-100 text-indigo-700'
            : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
        }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const ActionButton: React.FC<{icon: React.ReactNode, label: string, onClick: () => void}> = ({ icon, label, onClick }) => (
    <button onClick={onClick} className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors text-sm">
        {icon}
        <span>{label}</span>
    </button>
);


const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onEdit, onShare, onDownloadEPK, onBackToList, language, setLanguage, t }) => {
    // Basic responsive: hide on small screens, fixed on large screens.
    // A more advanced implementation would use a hamburger menu toggle.
    return (
        <aside className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
            <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    M
                </div>
                <h1 className="text-xl font-bold text-gray-800">MusicianHub</h1>
            </div>

            <nav className="flex-grow">
                <div className="mb-4">
                     <ActionButton icon={ICONS.backArrow} label={t('backToList')} onClick={onBackToList} />
                </div>
                <div className="space-y-2">
                    <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</h2>
                    <NavItem icon={ICONS.profile} label={t('profile')} isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
                    <NavItem icon={ICONS.analytics} label={t('analytics')} isActive={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
                    
                    <div className="pt-4">
                        <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</h2>
                        <ActionButton icon={ICONS.edit} label={t('editProfile')} onClick={onEdit} />
                        <ActionButton icon={ICONS.share} label={t('shareProfile')} onClick={onShare} />
                        <ActionButton icon={ICONS.download} label={t('downloadEPK')} onClick={onDownloadEPK} />
                    </div>
                </div>
            </nav>

            <div className="mt-auto">
                <div className="flex items-center justify-center p-2 bg-gray-100 rounded-lg">
                    <button
                        onClick={() => setLanguage('ko')}
                        className={`px-4 py-1 text-sm rounded-md transition-colors ${language === 'ko' ? 'bg-white shadow' : 'text-gray-500'}`}
                    >
                        KO
                    </button>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-4 py-1 text-sm rounded-md transition-colors ${language === 'en' ? 'bg-white shadow' : 'text-gray-500'}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;