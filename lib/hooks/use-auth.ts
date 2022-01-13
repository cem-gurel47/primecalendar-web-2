import { useState, useEffect } from 'react';

export default () => {
  const [info, setInfo] = useState({
    isAuthenticated: false,
    user: null
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');

      if (user) {
        const parsedUser = JSON.parse(user);
        setInfo({
          isAuthenticated: true,
          user: parsedUser
        });
      }
    }
  }, []);
  return info;
};
