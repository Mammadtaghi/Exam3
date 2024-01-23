import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ProProvider } from './Context/ProContext.jsx';
import { WishlistProvider } from './Context/wishlistContext.jsx';
import { BasketProvider } from './Context/basketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
      <ProProvider>
        <WishlistProvider>
          <BasketProvider>
            <App />
          </BasketProvider>
        </WishlistProvider>
      </ProProvider>
    </HelmetProvider>
  </BrowserRouter>,
)
