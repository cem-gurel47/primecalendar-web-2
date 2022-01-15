import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default () => {
  const [info, setInfo] = useState({
    isAuthenticated: false,
    user: null
  });
  useEffect(() => {
    const user = Cookies.get('user');

    if (user) {
      const parsedUser = JSON.parse(user);
      setInfo({
        isAuthenticated: true,
        user: parsedUser
      });
    }
  }, []);
  return info;
};
