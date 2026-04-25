import { useState } from 'react';

const AttendanceCalendar = ({ records = [], holidays = [] }) => {
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const getDayStatus = (day) => {
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dateObj = new Date(now.getFullYear(), now.getMonth(), day);
    const todayStr = now.toISOString().substring(0, 10);

    // Future Dates
    if (dateStr > todayStr) return { type: 'future', label: '' };

    // Weekends (Sunday = 0, Saturday = 6)
    if (dateObj.getDay() === 0 || dateObj.getDay() === 6) return { type: 'week-off', label: 'OFF' };

    // Holidays
    if (holidays.includes(dateStr)) return { type: 'holiday', label: 'HOL' };

    // Attendance records
    const record = records.find(r => r.date === dateStr);
    if (record) return { type: 'present', label: '✔' };
    
    return { type: 'absent', label: 'ABS' };
  };

  const getStyle = (type) => {
    switch(type) {
      case 'present': return { background: 'rgba(34, 197, 94, 0.2)', border: '1px solid #22c55e', color: '#4ade80' };
      case 'absent': return { background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#fca5a5' };
      case 'week-off': return { background: 'rgba(255, 255, 255, 0.05)', border: '1px dotted rgba(255,255,255,0.2)', color: 'var(--text-muted)' };
      case 'holiday': return { background: 'rgba(69, 97, 236, 0.2)', border: '1px solid var(--primary)', color: 'var(--primary)' };
      default: return { background: 'rgba(255, 255, 255, 0.02)', border: '1px solid transparent', color: 'rgba(255,255,255,0.1)' };
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', textAlign: 'center', marginBottom: '15px' }}>
        {['S','M','T','W','T','F','S'].map((d, i) => (
          <div key={`${d}-${i}`} style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.5 }}>{d}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
        {blanks.map(b => <div key={`b-${b}`} />)}
        {days.map(d => {
          const status = getDayStatus(d);
          return (
            <div key={d} style={{
              aspectRatio: '1/1',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: '600',
              ...getStyle(status.type)
            }}>
              {d}
              <div style={{ fontSize: '0.6rem', marginTop: '4px', opacity: 0.8 }}>{status.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
