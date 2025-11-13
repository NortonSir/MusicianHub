import React, { useState } from 'react';
import { ArtistProfile, TranslationKey } from '../types';

interface EditProfileModalProps {
  profile: ArtistProfile;
  onSave: (updatedProfile: ArtistProfile) => void;
  onClose: () => void;
  t: (key: TranslationKey) => string;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ profile, onSave, onClose, t }) => {
  const [formData, setFormData] = useState<ArtistProfile>(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
        ...prev, 
        socials: {
            ...prev.socials,
            [name]: value
        } 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  
  const InputField: React.FC<{label: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({ label, name, value, onChange}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" id={name} name={name} value={value} onChange={onChange} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"/>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl my-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">{t('editProfileTitle')}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <InputField label={t('artistName')} name="name" value={formData.name} onChange={handleChange} />
               <InputField label={t('genre')} name="genre" value={formData.genre} onChange={handleChange} />
               <InputField label={t('location')} name="location" value={formData.location} onChange={handleChange} />
               {/* Fix: Updated translation key from 'members' to 'membersInputLabel' to match the change in i18n.ts. */}
               <InputField label={t('membersInputLabel')} name="members" value={formData.members?.join(', ') || ''} onChange={(e) => setFormData(p => ({...p, members: e.target.value.split(',').map(m => m.trim())}))}/>
            </div>
            
            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">{t('bio')}</label>
                <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={5} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={t('profilePicURL')} name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
              <InputField label={t('coverImageURL')} name="coverImage" value={formData.coverImage} onChange={handleChange} />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 border-t border-gray-200 pt-6">{t('socialLinks')}</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <InputField label={t('spotifyURL')} name="spotify" value={formData.socials.spotify || ''} onChange={handleSocialChange} />
               <InputField label={t('appleMusicURL')} name="appleMusic" value={formData.socials.appleMusic || ''} onChange={handleSocialChange} />
               <InputField label={t('youtubeURL')} name="youtube" value={formData.socials.youtube || ''} onChange={handleSocialChange} />
               <InputField label={t('instagramURL')} name="instagram" value={formData.socials.instagram || ''} onChange={handleSocialChange} />
               <InputField label={t('twitterURL')} name="twitter" value={formData.socials.twitter || ''} onChange={handleSocialChange} />
               <InputField label={t('facebookURL')} name="facebook" value={formData.socials.facebook || ''} onChange={handleSocialChange} />
            </div>
            <InputField label={t('contactEmail')} name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end items-center space-x-4 rounded-b-lg">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
              {t('cancel')}
            </button>
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
              {t('saveChanges')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;