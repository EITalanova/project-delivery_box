import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import { store } from 'redux/deviceInfo/store';
import { persistor } from 'redux/deviceInfo/store';
import { PersistGate } from 'redux-persist/integration/react';import { App } from 'components/App';
import './main.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/project-delivery_box">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);