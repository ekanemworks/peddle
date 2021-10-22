import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppContext from '../AppContext';
import CryptoJS from 'crypto-js';
import { encrypt_key } from '../../../app.json';

export default function PublicRoute({
	component: Component,
	restricted,
	...rest
}) {
	const { contextVariables, setContextVariables } = React.useContext(AppContext);
	const [isLoggedIn, setLoggedInStatus] = React.useState(false);

	const currentDate = new Date().getTime();
	useEffect(() => {
		const verifyLoginState = () => {
			let storedSession = sessionStorage.getItem('sessionDetails');
			if (!storedSession) {
				// No stored session
				sessionStorage.clear();
				setContextVariables({
					...contextVariables,
					loggedInStatus: false,
				});
			} else {
				storedSession = CryptoJS.AES.decrypt(storedSession, encrypt_key);
				storedSession = JSON.parse(storedSession.toString(CryptoJS.enc.Utf8));

				setLoggedInStatus(true);

				if (currentDate > storedSession?.expiresIn) {
					sessionStorage.clear();
					setContextVariables({
						...contextVariables,
						loggedInStatus: false,
					});
				} else {
					setContextVariables({
						...contextVariables,
						loggedInStatus: true,
					});
				}
			}
		};
		verifyLoginState();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn && restricted ? (
					<Redirect to='/dashboard' />
				) : (
					// history.push('/dashboard')
					<Component {...props} />
				)
			}
		/>
	);
}
