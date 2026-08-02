import { useState, useEffect, useMemo } from 'react';

function useDateTime() {
  const dateFormatterOptions = useMemo(
    () => ({
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }),
    []
  );
  const [now, setNow] = useState(new Date());

  function getGreeting() {
    const currentHour = now.getHours();
    if (currentHour >= 5 && currentHour < 12) return 'Good Morning ☀️';
    if (currentHour >= 12 && currentHour < 17) return 'Good Afternoon 🌤️';
    if (currentHour >= 17 && currentHour < 21) return 'Good Evening 🌇';
    return 'Good Night 🌙';
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = now.toLocaleDateString('en-IN', dateFormatterOptions);
  const formattedTime = now.toLocaleTimeString();
  const greeting = getGreeting();

  return { now, formattedDate, formattedTime, greeting };
}

export default useDateTime;
