import { Box, Grid, Button } from '@material-ui/core';
import partner1 from '../../../assets/peddle/partner1.png';
import partner2 from '../../../assets/peddle/partner2.png';
import partner3 from '../../../assets/peddle/partner3.png';
import partner4 from '../../../assets/peddle/partner4.png';
import partner5 from '../../../assets/peddle/partner5.png';
import checkimg from '../../../assets/peddle/check.png';



const Section4 = () => {
    return (
        <div style={{width:'100%', margin:'auto', paddingTop:'5%', background:'#f5f5f5'}}>
			<Box>
				<div style={{color:'#000', fontSize: '35px', fontWeight:'bold', maxWidth:'400px', margin:'auto'}}>
					<div style={{paddingBottom:'5px', paddingTop:'5px', textAlign:'center', margin:'auto'}}> Get Started With Paddle Today </div>
				</div>

				<div style={{color: '#2A2E43CC', paddingTop:'25px',paddingBottom:'25px', fontSize:'15px', textAlign:'center', maxWidth:'550px', margin:'auto'}}>
					Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante egestas ullamcorper
				</div>

				<div style={{textAlign:'center'}}>
					<Button variant='contained' style={DefBtn2} >
						Start Today
					</Button>
				</div>
			</Box>

            
            {/* START OF IMG GRID */}
            <div style={{paddingTop:'20px',paddingBottom:'20px', width:'90%', margin:'auto'}}>
				<table>
					<tr>
						<td style={{width:'1000px', border:''}}>
							<Box style={{height:'200px', textAlign:'center'}}>
								<img src={partner1} alt='Castle Stash' style={{width:'150px'}} /> 
							</Box>
						</td>
						<td style={{width:'1000px', border:''}}>
							<Box style={{height:'200px', textAlign:'center'}}>
								<img src={partner2} alt='Castle Stash' style={{width:'150px'}} /> 
							</Box>
						</td>
						<td style={{width:'1000px', border:''}}>
							<Box style={{height:'200px', textAlign:'center'}}>
								<img src={partner3} alt='Castle Stash' style={{width:'150px'}} /> 
							</Box>
						</td>
						<td style={{width:'1000px', border:''}}>
							<Box style={{height:'200px', textAlign:'center'}}>
								<img src={partner4} alt='Castle Stash' style={{width:'150px'}} />
							</Box>
						</td>
						<td style={{width:'1000px', border:''}}>
							<Box style={{height:'200px', textAlign:'center'}}>
								<img src={partner5} alt='Castle Stash' style={{width:'150px'}} /> 
							</Box>
						</td>
					</tr>
				</table>
             
            </div>

            <br/>
            <br/>
            <br/>

            
        </div>
    )
}



const  category_overlay = {
        background: 'transparent linear-gradient(180deg, #04B4F5 0%, #02327B 100%)',
        color: '#f1f1f1',
        transition: '.5s ease',
        fontSize: 20,
        paddingBlock: '40px',
        opacity: 1,
        width: '100%',
        borderRadius: 5,
      }

const planstyle = {
    border:'2px solid #DDDDDD', 
    background:'#fff', 
    borderRadius:'10px', 
    height:'760px', 
    width:'330px', 
    margin:'auto', 
    textAlign:'center'
}

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



export default Section4
