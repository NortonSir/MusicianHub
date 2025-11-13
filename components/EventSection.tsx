import React from 'react';
import { Event, TranslationKey } from '../types';

interface EventSectionProps {
  events: Event[];
  t: (key: TranslationKey) => string;
}

const EventItem: React.FC<{ item: Event, t: (key: TranslationKey) => string; }> = ({ item, t }) => {
    const date = new Date(item.date);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    
    return (
        <div className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-b-0">
             <div className="text-center w-12 flex-shrink-0">
                <p className="text-xs text-indigo-600 font-semibold">{month}</p>
                <p className="text-2xl font-bold text-gray-800">{day}</p>
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">{item.eventName}</h3>
                <p className="text-sm text-gray-500">{item.venue}, {item.city}</p>
            </div>
            {item.ticketLink && (
                <a href={item.ticketLink} target="_blank" rel="noopener noreferrer" className="ml-auto px-3 py-1 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors whitespace-nowrap">
                    {t('buyTickets')}
                </a>
            )}
        </div>
    );
};

const EventSection: React.FC<EventSectionProps> = ({ events, t }) => {
  return (
    <div className="space-y-1">
      {events.map(item => <EventItem key={item.id} item={item} t={t} />)}
    </div>
  );
};

export default EventSection;