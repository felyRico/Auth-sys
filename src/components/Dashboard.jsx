import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(`http://localhost:5000/users/${userId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user data.');
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  if (!user) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
