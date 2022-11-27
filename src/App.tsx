import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./contexts/auth";

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';
import { ThemeConsumer } from 'styled-components';


const App = (): JSX.Element => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyles />
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
