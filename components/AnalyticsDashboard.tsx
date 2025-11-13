import React from 'react';
import { AnalyticsData, TranslationKey } from '../types';
import ProfileSection from './ProfileSection';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface AnalyticsDashboardProps {
  data: AnalyticsData;
  t: (key: TranslationKey) => string;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ data, t }) => {
  const demographicColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
          <h3 className="text-gray-500 text-sm font-medium uppercase">{t('totalProfileViews')}</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">{data.profileViews.toLocaleString()}</p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">{t('topSong')}</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2 truncate">{data.topSongs[0].title}</p>
            <p className="text-gray-600">{data.topSongs[0].streams.toLocaleString()} {t('streams')}</p>
        </div>
         <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">{t('topFanCity')}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{data.fanDemographics[0].city}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProfileSection title={t('fanDemographicsByCity')}>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data.fanDemographics} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="city" type="category" stroke="#4b5563" width={80} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(0, 0, 0, 0.05)'}} 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}
                  itemStyle={{ color: '#111827' }}
                />
                <Bar dataKey="percentage" barSize={20} >
                  {data.fanDemographics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={demographicColors[index % demographicColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ProfileSection>

        <ProfileSection title={t('topSongsByStream')}>
          <div className="space-y-3">
            {data.topSongs.map((song, index) => (
              <div key={song.title} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{index + 1}. {song.title}</span>
                <span className="font-semibold text-gray-900">{song.streams.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </ProfileSection>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;