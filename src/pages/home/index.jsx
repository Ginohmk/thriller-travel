import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { HomeContainer } from './Home.style';

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />

      <div className="outLet">
        <Outlet />
      </div>
    </HomeContainer>
  );
};

export default Home;
