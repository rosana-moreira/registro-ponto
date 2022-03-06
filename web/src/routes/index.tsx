import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import User from '../pages/User';

const RoutesComponet: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/dashboard/" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesComponet;
