import {
	Box,
	Button,
	// ButtonGroup,
	Divider,
	// FormControl,
	Grid,
	Hidden,
	// ListItemText,
	// makeStyles,
	// MenuItem,
	// Select,
	CircularProgress,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';

// fund component imported from Dashboard

function Cards(props) {



	return (
		<>
			<Hidden smDown>
				<Box
					style={{
						borderStyle: 'solid',
						borderColor: '#EAEAEA',
						borderWidth: 2,
						marginBlock: 20,
						height: 192,
					}}
				>
				<Box padding='20px' display='flex'>

					<Grid container>
						<Grid item lg={6} md={6} sm={12} xs={12}>


								{/* start of left side */}
								{/* start of left side */}

								<Grid container>
									<Grid item lg={6} md={6} sm={12} xs={12}>
											<img
												src={props.image}
												alt='Investment'
												style={{
													width: 233,
													height: 152,
												}}
											/>
									</Grid>
									<Grid item lg={6} md={6} sm={12} xs={12}>

											<Box paddingLeft='10px' >
												<span
													style={{
														fontFamily: 'Sora',
														fontSize: 18,
														fontWeight: 'bold',
														color: '#2A2E43',
													}}
												>
													{props.name}
												</span>
												<br />
												<Box marginTop='20px'>
													<span
														style={{
															fontFamily: 'Sora',
															fontSize: 14,
															fontWeight: 'normal',
															color: '#2A2E43',
														}}
													>
														{props.descriptionShort.substring(0, 90)+'...'}
													</span>
												</Box>
											</Box>

									</Grid>
								</Grid>
								
								{/* end of left side */}
								{/* end of left side */}


						</Grid>
						<Grid item lg={6} md={6} sm={12} xs={12}>


							{/* Right side */}
							{/* Right side */}
							<Box style={{paddingLeft:'10px'}}>

								<Grid container>
										<Grid item lg={4} md={4} sm={12} xs={12}>
												<span
													style={{
														fontFamily: 'Sora',
														fontSize: 12,
														fontWeight: 'bolder',
														color: '#2A2E43CC',
													}}
												>
													Investment
												</span>
												<Box marginTop='12px'>
													<span
														style={{
															fontFamily: 'Sora',
															fontSize: 16,
															fontWeight: 'bold',
															color: '#02327B',
														}}
													>
														&#8358; {props.investmentAmount}
													</span>
												</Box>
										</Grid>
										<Grid item lg={4} md={4} sm={12} xs={12}>
											<span
												style={{
													fontFamily: 'Sora',
													fontSize: 12,
													fontWeight: 'bolder',
													color: '#2A2E43CC',
												}}
											>
												Investment Duration
											</span>
											<Box marginTop='12px'>
												<span
													style={{
														fontFamily: 'Sora',
														fontSize: 16,
														fontWeight: 'bold',
														color: '#02327B',
													}}
												>
													{props.duration} months
												</span>
											</Box>



											<Box marginTop='20px'>
												<span
													style={{
														fontFamily: 'Sora',
														fontSize: 12,
														fontWeight: 'bolder',
														color: '#2A2E43CC',
													}}
												>
													Return on Investment
												</span>
											</Box>
											<Box marginTop='12px'>
												<span
													style={{
														fontFamily: 'Sora',
														fontSize: 16,
														fontWeight: 'bold',
														color: '#02327B',
													}}
												>
													{props.ROI}%
												</span>
											</Box>


										</Grid>
										

									</Grid>
									

							</Box>
								
						
							{/* end of right side */}
							{/* end of right side */}



						</Grid>
					</Grid>




							<Box style={{border:'1px solid #ddd', padding:'20px'}}>
								<table>
									<tr>
										<td>
											<img src={props.avatar} alt='Castle Stash' style={{width:'100px'}} />
										</td>
										<td>
											<div>
												<div>
													{props.repositoryname}
												</div>
												<div>
													{props.description}
												</div>
												<div>
													<table>
														<tr>
															<td>
																Stars: {props.stars}
															</td>
															<td>
																Issues: {props.issues}
															</td>
														</tr>
													</table>
												</div>
											</div>
										</td>
									</tr>
								</table>
							</Box>









					</Box>
				</Box>
			</Hidden>
























			

	
		</>
	);
}

export default Cards;
