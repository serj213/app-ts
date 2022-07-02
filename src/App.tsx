import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Header from './Components/Header/Header';
import Main from './pages/Main';
import BasketPage from './pages/BasketPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
