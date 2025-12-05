import { useNavigate } from 'react-router-dom';
import { useFusionAuth } from '@fusionauth/react-sdk';
import { useEffect } from 'react';

export default function Account() {
  const navigate = useNavigate();

  const { isLoggedIn, isFetchingUserInfo, startLogout, userInfo } = useFusionAuth();
  
  useEffect(() => { if (!isLoggedIn) navigate("/"); }, [isLoggedIn, navigate]);

  if (!isLoggedIn || isFetchingUserInfo) return null;
  
  return (
    <div>
      <div className="titlebar">
        <span className='white'>{userInfo?.email}</span>
        <button className='button' onClick={() => startLogout()}>Logout</button>
      </div>
      <div className='centerContainer'>
        <p>User info will display here</p>
      </div>
    </div>
  );
}