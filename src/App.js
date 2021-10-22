import './App.css';
import { Switch } from 'react-router-dom';
import Github from './components/pages/Github/Github';
import Home from './components/pages/Home/Home';


import AppContext from './components/utils/AppContext';
import React, { useState } from 'react';
import PublicRoute from './components/utils/Routes/PublicRoute';
import PrivateRoute from './components/utils/Routes/PrivateRoute';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Snackbar,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { useIdleTimer } from 'react-idle-timer';
import { timeout } from './app.json';
import 'react-day-picker/lib/style.css';
import CryptoJS from 'crypto-js';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
	// Transform local storage string to JSON
	const history = useHistory();
	const [sessionDetails, setSessionDetails] = React.useState(null);
	const [contextVariables, setContextVariables] = React.useState({
		loggedInStatus: sessionDetails ? true : false,
		feedback: {
			open: false,
			message: '',
			type: 'info',
		},
		logoutDialogState: false,
		// theme
	});
	

	const toggleSnackbar = () =>
		setContextVariables({
			...contextVariables,
			feedback: {
				...contextVariables.feedback,
				open: !contextVariables.feedback.open,
			},
		});

	// Idle Timer




	const [timerDialog, setTimerDialog] = useState(false);

	const openTimerDialog = () => {
		setTimerDialog(true);
	};

	const closeTimerDialog = () => {
		setTimerDialog(false);
	};

	// Logout Dialog
	const closeLogoutDialog = () => {
		setContextVariables({
			...contextVariables,
			logoutDialogState: false,
		});
	};

	const logoutUser = () => {
		sessionStorage.clear();
		setContextVariables({
			...contextVariables,
			logoutDialogState: false,
			loggedInStatus: false,
			feedback: {
				...contextVariables.feedback,
				open: true,
				type: 'success',
				message: 'Logout successful',
			},
		});
		return history.push('/login');
	};

	return (
		<AppContext.Provider value={{ contextVariables, setContextVariables }}>
		
	
			
			<Switch>
				{/* NAVBAR */}
				<PublicRoute component={Home} path='/' exact />
				<PublicRoute component={Github} path='/github' exact />

			
			</Switch>
		</AppContext.Provider>
	);
}

export default App;
