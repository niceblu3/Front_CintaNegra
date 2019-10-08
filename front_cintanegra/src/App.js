import React from 'react';
import logo from './logo.svg';
import Navbar from './common/Navbar';
import Head from './common/Head';

function App() {
  return (
    <>{ /* Fragments */}
      <Navbar title="Blog GraphQL"/>
      <Head title="Bienvenido a mi Blog" subhead="Posts de tecnología y más"/>
    </>
  );
}

export default App;
