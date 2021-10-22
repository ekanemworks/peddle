import { Box, Grid, Button } from '@material-ui/core';
import customer1 from '../../../assets/peddle/customer1.png';
import customer2 from '../../../assets/peddle/customer2.png';
import customer3 from '../../../assets/peddle/customer3.png';
import star from '../../../assets/peddle/star.png';



const Section5 = () => {
    return (
        <div style={{width:'100%', margin:'auto', paddingTop:'5%', background:'#f5f5f5'}}>
            	<div style={{color:'#000', fontSize: '35px', fontWeight:'bold', maxWidth:'400px', margin:'auto'}}>
					<div style={{paddingBottom:'5px', paddingTop:'5px', textAlign:'center', margin:'auto'}}> 
						Trusted by Thousands of Happy Customer 
					</div>
				</div>

				<div style={{color: '#2A2E43CC', paddingTop:'25px',paddingBottom:'25px', fontSize:'15px', textAlign:'center', maxWidth:'550px', margin:'auto'}}>
					Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies. 
				</div>

            
            {/* START OF IMG GRID */}
            <div style={{paddingTop:'20px',paddingBottom:'20px', width:'90%', margin:'auto'}}>

					<Box style={scrollmenu}>
                       

						<Box style={scrollmenuDIVs}>
							<Box style={exactCard}>
								<table>
									<tr>
										<td>
											<img src={customer1} alt='Castle Stash' style={{width:'50px'}} /> 
										</td>
										<td style={{width:'1000px'}}>
											<div style={{color:'#000', paddingLeft:'10px'}}>
												<div style={{fontWeight:'bold'}}>Viezh Robert</div>
												<div style={{fontSize:'12px'}}>Warsaw, Poland</div>

											</div>
										</td>
										<td>
											<span>4.5</span>
											<img src={star} alt='Castle Stash' style={{width:'10px'}} /> 
										</td>
									</tr>
								</table>
								<div style={{maxWidth:'400px', paddingBlock:'20px', whiteSpace:'pre-wrap'}}>
									“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”
								</div>

							</Box>

						</Box>
						<Box style={scrollmenuDIVs}>
							<Box style={exactCard}>
								<table>
									<tr>
										<td>
											<img src={customer2} alt='Castle Stash' style={{width:'50px'}} /> 
										</td>
										<td style={{width:'1000px'}}>
											<div style={{color:'#000', paddingLeft:'10px'}}>
												<div style={{fontWeight:'bold'}}>Yessica Christy</div>
												<div style={{fontSize:'12px'}}>Shanxi, China</div>

											</div>
										</td>
										<td>
											<span>4.5</span>
											<img src={star} alt='Castle Stash' style={{width:'10px'}} /> 
										</td>
									</tr>
								</table>
								<div style={{maxWidth:'400px', paddingBlock:'20px', whiteSpace:'pre-wrap'}}>
									“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”
								</div>

							</Box>

						</Box>
						<Box style={scrollmenuDIVs}>
							<Box style={exactCard}>
									<table>
										<tr>
											<td>
												<img src={customer3} alt='Castle Stash' style={{width:'50px'}} /> 
											</td>
											<td style={{width:'1000px'}}>
												<div style={{color:'#000', paddingLeft:'10px'}}>
													<div style={{fontWeight:'bold'}}>Kim Young Jou</div>
													<div style={{fontSize:'12px'}}>Seoul, South Korea</div>

												</div>
											</td>
											<td>
												<span>4.5</span>
												<img src={star} alt='Castle Stash' style={{width:'10px'}} /> 
											</td>
										</tr>
									</table>
									<div style={{maxWidth:'400px', paddingBlock:'20px', whiteSpace:'pre-wrap'}}>
										“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”
									</div>

							</Box>

						</Box>

                    </Box>
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


const scrollmenu = {
	// overflow: 'auto',
	whiteSpace: 'nowrap',
	msOverflowStyle: 'none', /* IE and Edge */
	scrollbarWidth: 'none', /* Firefox */
  }
  

  
const scrollmenuDIVs = {
	display: 'inline-block',
	textAlign: 'center',
	textDecoration: 'none'
  }

  const exactCard = {
	  height:'230px', 
	  width:'400px', 
	  marginInline:'15px', 
	  border:'', 
	  borderRadius:'4px', 
	  padding:'8px', 
	  paddingInline:'14px',
	  textAlign:'left',
	  backgroundColor: '#fff'
	}





export default Section5
