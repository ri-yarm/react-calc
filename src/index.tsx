import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@/app/app';
import { store } from '@/features/calculator';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
