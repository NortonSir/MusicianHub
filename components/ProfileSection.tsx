import React from 'react';

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{title}</h2>
      {children}
    </section>
  );
};

export default ProfileSection;