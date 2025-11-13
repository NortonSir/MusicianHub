import React from 'react';

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
  meta?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, children, meta }) => {
  return (
    <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-baseline mb-4 border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {meta && (
          <span className="text-sm font-medium text-gray-500">{meta}</span>
        )}
      </div>
      {children}
    </section>
  );
};

export default ProfileSection;