import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.scss';
import BrandStore from './store/BrandStore.js';
import DeviceStore from './store/DeviceStore.js';
import TypeStore from './store/TypeStore.js';
import UserStore from './store/UserStore.js';

export const Context = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Context.Provider
		value={{ user: new UserStore(), device: new DeviceStore(), type: new TypeStore(), brand: new BrandStore() }}
	>
		<App />
	</Context.Provider>,
	// </React.StrictMode>,
);
