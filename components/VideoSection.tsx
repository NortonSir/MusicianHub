import React from 'react';
import { Video, TranslationKey } from '../types';
import ProfileSection from './ProfileSection';

interface VideoSectionProps {
  videos: Video[];
  t: (key: TranslationKey) => string;
}

const VideoItem: React.FC<{ item: Video }> = ({ item }) => (
  <div>
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-gray-200">
      <iframe
        src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
        title={item.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
    <h3 className="mt-2 text-md font-medium text-gray-800">{item.title}</h3>
  </div>
);

const VideoSection: React.FC<VideoSectionProps> = ({ videos, t }) => {
  return (
    <ProfileSection title={t('videos')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map(item => <VideoItem key={item.id} item={item} />)}
      </div>
    </ProfileSection>
  );
};

export default VideoSection;