import DefaultLayout from '../layout/default';
import Navbar from '../nav';
import './index.css'
import React from 'react';

const App: React.FC = () => {
  return (
    <DefaultLayout>
        <Navbar/>
    </DefaultLayout>
  );
}

export default App
