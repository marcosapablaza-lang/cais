
import React, { useState, useEffect } from 'react';
import { NavTab, User } from './types';
import Layout from './component/Layout';
import Home from './Home';
import Explore from './Explore';
import RouteTracker from './RouteTracker';
import MyRoutes from './MyRoutes';
import Profile from './Profile';
import AuthScreen from './AuthScreen';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.HOME);

  // Simulated Login
  const handleLogin = () => {
    setUser({
      uid: '12345',
      name: 'Jorge Varela',
      email: 'jorge.biker@cais.cl',
      photoURL: 'https://picsum.photos/seed/biker1/200/200',
      bike: {
        brand: 'Yamaha',
        model: 'Tenere 700',
        year: 2023,
        nickname: 'La Indomable'
      }
    });
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab(NavTab.HOME);
  };

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case NavTab.HOME:
        return <Home />;
      case NavTab.EXPLORE:
        return <Explore />;
      case NavTab.ROUTE:
        return <RouteTracker user={user} onComplete={() => setActiveTab(NavTab.MY_ROUTES)} />;
      case NavTab.MY_ROUTES:
        return <MyRoutes userId={user.uid} />;
      case NavTab.PROFILE:
        return <Profile user={user} onLogout={handleLogout} />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
