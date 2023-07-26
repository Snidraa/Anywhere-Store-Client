import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index';
import { Context } from '../store/Context';

const AppRouter = () => {
	const { user } = useContext(Context);

	return user.isAuth ? (
		<Routes>
			<Route path='*' element={<Navigate to='/' replace />} />
			{privateRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	) : (
		<Routes>
			<Route path='*' element={<Navigate to='/' replace />} />
			{publicRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};

export default AppRouter;
