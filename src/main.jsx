import React from 'react'
import ReactDOM from 'react-dom/client'
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
