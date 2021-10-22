import { Box, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PEDDLE1 from '../../../assets/peddle/PEDDLE1.png';
import PEDDLE2 from '../../../assets/peddle/peddleimg2.png';


const Section1 = () => {
	return (
		<div style={{width:'90%', margin: 'auto'}}>
			<Box
				style={{
					
					width: '100%',
					height: '707px',
				}}
			>
				<div style={{paddingBlock:'20px'}}>
					<Grid container>
						<Grid item lg='4' md='4' xs='6' >
							<img src={PEDDLE1} alt='Castle Stash' style={{width:'91px'}} />
						</Grid>
						<Grid item lg='4' md='4' xs='0' >

							<table>
								<tr>
									<td style={{width:'1000px'}}>
										<div style={NavStyles}>About</div>
									</td>
									<td style={{width:'1000px'}}>
										<div style={NavStyles}>FAQs</div>
									</td>
									<td style={{width:'1000px'}}>
										<div style={NavStyles}>Pricing</div>
									</td>
									<td style={{width:'1000px'}}>
										<div style={NavStyles}>Testimonials</div>
									</td>
								</tr>
							</table>
						</Grid>
						<Grid item lg='4' md='4' xs='6' >
							<Box style={{float:'right'}}>
							<table>
								<tr>
									<td>
										<div>
											Sign In
										</div>
									</td>
									<td>
										<div>
											<Button variant='contained' style={DefBtn} >
												Learn More
											</Button>
										</div>
									</td>
								</tr>
							</table>
							</Box>
						</Grid>
					</Grid>	
				</div>
				<div>
					<Grid container>
						<Grid item xs={12} sm={6} md={6} lg={6} style={{border:''}}>
							<Box style={{padding:'40px'}}>
								<div style={{fontSize:'50px', font:'Rubik', textShadow:'0px 2px 4px #BA55D3', paddingBlock:'20px'}}>
									We Are Everything We Aspire To BE
								</div>
								<div style={{fontSize:'16px', color:'#4F5665'}}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis eget ipsum malesuada dignissim
								</div>
								<div style={{paddingBlock:'20px'}}>
									<Button variant='contained' style={DefBtn2} >
												Learn More
											</Button>
								</div>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6} style={{border:''}}>
							<Box style={{height:'500px', background: `url(${PEDDLE2}) no-repeat center center`, backgroundSize: 'cover', }}>
								
							</Box>
						</Grid>
					</Grid>

				</div>


			</Box>
		</div>
	);
};



const NavStyles = {
	fontSize: '16px',
	color: '#4F5665',
	textAlign: 'center',
}


const LearnMoreBtn = {
	width: 148,
	height: 49,
	color: '#02327B',
	background: '#FFFFFF 0% 0% no-repeat padding-box',
	// borderRadius: 27,
	opacity: 1,
	textTransform: 'capitalize',
	fontWeight: 'bold',
	marginBlock: '40px',
};

const DefBtn = {
	width: 150,
	height: 45,
	color: '#BA55D3',
	background: '#FFFFFF 0% 0% no-repeat padding-box',
	// borderRadius: 27,
	opacity: 1,
	textTransform: 'capitalize',
	fontWeight: 'bold',
	border: '4px solid #BA55D3'

}

const DefBtn2 = {
	width: 150,
	height: 45,
	color: '#fff',
	background: '#BA55D3',
	borderRadius: 4,
	opacity: 1,
	textTransform: 'capitalize',
	fontWeight: 'bold',
	border: '4px solid #BA55D3'

}

const category_overlay = {
	background:
		'transparent linear-gradient(180deg, #5dabf367 0%, #5dabf367 100%) 0% 0% no-repeat padding-box',
	color: '#f1f1f1',
	transition: '.5s ease',
	fontSize: 20,
	height: '627px',
	opacity: 1,
	width: '100%',
	borderRadius: 5,
};

export default Section1;
