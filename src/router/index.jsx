import Admin from '../pages/Admin/Admin';
import Auth from '../pages/Auth/Auth';
import Basket from '../pages/Basket/Basket';
import DevicePage from '../pages/DevicePage/DevicePage';
import Favorite from '../pages/Favorite/Favorite';
import Shop from '../pages/Shop/Shop';

import {
	ADMIN_ROUTE,
	BASKET_ROUTE,
	DEVICE_ROUTE,
	FAVORITE_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE,
} from '../utils/consts';

export const privateRoutes = [
	{ path: ADMIN_ROUTE, element: <Admin /> },
	{ path: BASKET_ROUTE, element: <Basket /> },
	{ path: FAVORITE_ROUTE, element: <Favorite /> },
];

export const publicRoutes = [
	{ path: SHOP_ROUTE, element: <Shop /> },
	{ path: LOGIN_ROUTE, element: <Auth /> },
	{ path: REGISTRATION_ROUTE, element: <Auth /> },
	{ path: DEVICE_ROUTE + '/:id', element: <DevicePage /> },
];
