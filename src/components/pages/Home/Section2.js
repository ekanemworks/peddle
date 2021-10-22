import { Box, Grid, Button } from '@material-ui/core';
import PEDDLE3 from '../../../assets/peddle/peddleimg3.png';
import PEDDLEX from '../../../assets/peddle/rec1.png';
import user from '../../../assets/peddle/user.png';
import location from '../../../assets/peddle/location.png';
import Server from '../../../assets/peddle/Server.png';


const Section2 = () => {

    return (
      <div style={{paddingBlock:'100px'}}>
        
			

				<div
					style={{
						width: '70%',
                        margin:'auto',
                        borderRadius:'10px',
                        background:'#fff',
                        paddingBlock:'40px',
                        paddingInline:'50px'
					}}
				>
						<Grid container>
							<Grid item xs={12} sm={4} md={4} lg={4}>
                                <div style={{maxWidth:'150px', textAlign:'center', margin:'auto'}}>
                                  <table>
                                    <tr>
                                      <td style={{border:''}}>
                                        <img src={user} alt='Castle Stash' style={{width:'50px'}} />
                                      </td>
                                      <td style={{border:''}}>
                                        <div style={{marginLeft:'10px'}}>
                                          <div style={HeadStyles}>90+</div>
                                          <div style={LabelStyles}>Users</div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
							</Grid>
							<Grid item xs={12} sm={4} md={4} lg={4}>
                                <div style={{maxWidth:'150px', textAlign:'center', margin:'auto'}}>
                                  <table>
                                    <tr>
                                      <td style={{border:''}}>
                                        <img src={user} alt='Castle Stash' style={{width:'50px'}} />
                                      </td>
                                      <td style={{border:''}}>
                                        <div style={{marginLeft:'10px'}}>
                                          <div style={HeadStyles}>30+</div>
                                          <div style={LabelStyles}>Locations</div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
							</Grid>
							<Grid item xs={12} sm={4} md={4} lg={4}>
                                <div style={{maxWidth:'150px', textAlign:'center', margin:'auto'}}>
                                  <table>
                                    <tr>
                                      <td style={{border:''}}>
                                        <img src={Server} alt='Castle Stash' style={{width:'50px'}} />
                                      </td>
                                      <td style={{border:''}}>
                                        <div style={{marginLeft:'10px'}}>
                                          <div style={HeadStyles}>50+</div>
                                          <div style={LabelStyles}>Servers</div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
							</Grid>
						</Grid>
				</div>

        <Grid container >
        <Grid item lg='7' md='6' style={{border:''}}>


          {/* Container */}

          <div style={{width:'80%', marginLeft:'10%', marginRight:'10%', paddingTop: '15%',paddingBottom: '20%',fontSize:'16px'}}>
            <Box style={{height:'296px', width:'737px', background: `url(${PEDDLE3}) no-repeat center center`, backgroundSize: 'cover', }}>
                  
            </Box>
          </div>


        </Grid>
        <Grid item lg='5' md='6' xs='12' style={{border:''}}>

          {/* Container */}
          <div >
           
            <div style={{width:'80%', marginLeft:'10%', marginRight:'10%', paddingTop: '15%',paddingBottom: '20%',fontSize:'16px'}}>
              <div style={{fontWeight:'bold', fontSize:'35px', paddingBlock:'20px'}}>
                Features We Provide For You
              </div>
              <div>
                Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero eu sem finibus lacinia nec pulvinar.
              </div>
              <div style={{padding:'8px', color:'#4F5665' }}>
                <img src={PEDDLEX} alt='Castle Stash' style={{width:'25px'}} /> &nbsp;&nbsp;&nbsp;Curabitur tempor justo
              </div>    
              <div style={{padding:'8px', color:'#4F5665' }}>
                <img src={PEDDLEX} alt='Castle Stash' style={{width:'25px'}} /> &nbsp;&nbsp;&nbsp;Attractive interest rates
              </div>    
              <div style={{padding:'8px', color:'#4F5665' }}>
                <img src={PEDDLEX} alt='Castle Stash' style={{width:'25px'}} /> &nbsp;&nbsp;&nbsp;High transparency
              </div>


   
            </div>
          </div>
          
        </Grid>
      </Grid>


    </div>
    )
}

const section2paragraphStyle = {


    letterSpacing: '0px', 
    color: '#2A2E43CC', 
    fontSize: '18px'
}

const HeadStyles = {
	fontSize: '250%',
	fontWeight: 'bold',
	color: '#000',
	textAlign: 'center',
};

const LabelStyles = {
	fontSize: '100%',
	color: '#000',
	textAlign: 'center',
};


export default Section2
