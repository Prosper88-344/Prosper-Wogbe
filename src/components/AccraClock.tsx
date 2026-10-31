import React, { useState, useEffect } from 'react';

interface AccraClockProps {
  className?: string;
}

export const AccraClock: React.FC<AccraClockProps> = ({ className = '' }) => {
  const [timeStr, setTimeStr] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Africa/Accra',
    });

    const updateTime = () => {
      setTimeStr(formatter.format(new Date()));
    };

    updateTime();

    // Align the first timeout to the next minute, then repeat every 60s
    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      updateTime();
      intervalId = setInterval(updateTime, 60000);
    }, Math.max(msToNextMinute, 50));

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  if (!timeStr) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      className={`font-[family-name:var(--font-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--band-muted)] select-none whitespace-nowrap ${className}`}
    >
      ACCRA {timeStr} GMT
    </span>
  );
};
