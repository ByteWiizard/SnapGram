import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './Store/store.tsx'
import { Provider } from 'react-redux';;
import { PersistGate } from 'redux-persist/integration/react';
import { ToastProvider } from '@radix-ui/react-toast';
import { QueryProvider } from './lib/react-query/QueryProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryProvider>
        <ToastProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ToastProvider>
      </QueryProvider>
    </BrowserRouter>
  </Provider >
  ,
)
