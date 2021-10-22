import {
	Box,
	// FormControl,
	Grid,
	Hidden,
	// ListItemText,
	makeStyles,
	// MenuItem,
	// Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	CircularProgress,
} from '@material-ui/core';



import React, { useEffect } from 'react';
import Cards from './layout/Cards';



const useStyles = makeStyles((theme) => ({
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
		padding: '1.6vw',
	},
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 141,
		maxWidth: '20vw',
		color: 'white',
	},
	activityContainer: {
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'column',
	},
	activityHeader: {
		fontSize: 14,
		fontFamily: 'Sora',
		color: '#2A2E43CC',
	},
	activityTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'Sora',
		color: '#242424',
	},
	activitySubtitle: {
		fontSize: 12,
		fontFamily: 'Sora',
		color: '#02327B',
	},
	tableHeader: {
		fontSize: 14,
		fontFamily: 'Sora',
		fontWeight: 'bolder',
		color: '#2A2E43',
	},
	tableContent: {
		fontSize: 14,
		fontFamily: 'Sora',
		fontWeight: 'bold',
		color: '#2A2E43CC',
	},
	tableStatusConfirmed: {
		fontSize: 14,
		fontFamily: 'Sora',
		fontWeight: 'bold',
		color: '#018920',
	},
	tableStatusPending: {
		fontSize: 14,
		fontFamily: 'Sora',
		fontWeight: 'bold',
		color: '#0157AD',
	},
}));

function GitHub() {
	const classes = useStyles();

	const [availableProperties, setUserInvestments] = React.useState({
		loading: true,
		properties: [],
	});
	const [userBalance, setUserBalance] = React.useState({
		loading: true,
		balance: '',
	});

	useEffect(() => {
		const getVariables = async () => {
		

				// Get PROPERTY
				// Get PROPERTY
				try {  
                    const API_URL = 'https://api.github.com/search/repositories';

                    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
                    .toISOString()
                    .split('T')[0];

					let response = await fetch(
						`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`,
						{
							method: 'GET',
						},
					);
					response = await response.json();
                        console.log(response);
                        	setUserInvestments({
                            		...availableProperties,
                            		loading: false,
                            		properties: response.items,
                            	});
				} catch (error) {}



			
		};
		getVariables();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
	
			<main style={{ minHeight: '100vh', display: 'flex' }}>
				<Grid container>
					<Hidden mdDown>
						<Grid item lg={2}>
						</Grid>
					</Hidden>
					<Grid item lg={10} md={12} sm={12} xs={12}>
						<div className={classes.content}>
							<Box
								display='flex'
								justifyContent='space-between'
								style={{ paddingBlock: '15px' }}
							>
								<Box display='flex' alignItems='center'>
									
									<span
										style={{
											fontFamily: 'Sora',
											fontWeight: 'bolder',
											fontSize: 18,
											color: '#2A2E43',
										}}
									>
										GITHUB REPO
									</span>
								</Box>

							
							</Box>











							{availableProperties.properties.length > 0 ? (


								<>

												{availableProperties.properties.map((data) => (
													<>
											
													<Box style={{border:'1px solid #ddd', padding:'20px'}}>
														<table>
															<tr>
																<td>
																	<img src={data.owner.avatar_url} alt='Castle Stash' style={{width:'100px'}} />
																</td>
																<td>
																	<div>
																		<div>
																			{data.full_name}
																		</div>
																		<div>
																			{data.description}
																		</div>
																		<div>
																			<table>
																				<tr>
																					<td>
																						Stars: {data.stargazers_count}
																					</td>
																					<td>
																						Issues: {data.open_issues_count}
																					</td>
																				</tr>
																			</table>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</Box>
													</>
													
												))}
								</>


							) : (
								<Box
									display='flex'
									justifyContent='center'
									paddingTop='86px'
									paddingBottom='98px'
								>
									<Box
										alignItems='center'
										display='flex'
										flexDirection='column'
										maxWidth='232px'
										textAlign='center'
									>
										<span
											style={{
												fontSize: 18,
												fontWeight: 'bolder',
												color: '#455065B2',
												fontFamily: 'Sora',
											}}
										>
											Repositories Loading
										</span>
										<center>
											<span
												style={{
													fontSize: 14,
													fontWeight: 'normal',
													color: '#455065B2',
													fontFamily: 'Sora',
												}}
											>
												Please be patient
											</span>
										</center>
									</Box>
								</Box>
							)}








						</div>
					</Grid>
				</Grid>
			</main>
		</>
	);
}

export default GitHub;
