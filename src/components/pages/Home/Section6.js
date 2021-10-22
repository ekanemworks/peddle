import { Box, Grid, Button } from '@material-ui/core';
import PEDDLE1 from '../../../assets/peddle/PEDDLE1.png';




const Section6 = () => {
    return (
        <div style={{width:'100%', margin:'auto', paddingTop:'5%', background:'#f5f5f5'}}>
           
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
							<Grid item xs={12} sm={8} md={8} lg={8}>
                                <div style={{maxWidth:'450px'}}>
                                    <div style={HeadStyles}>Subscribe Now for Get Special Features!</div>
                                    <div style={LabelStyles}>Praesent mollis lobortis nisl nec laoreet.</div>
                                </div>
							</Grid>
                            <Grid item xs={0} sm={4} md={4} lg={4}>
                                <div style={{paddingTop:'10%', float:'right'}}>
                                    <Button variant='contained' style={DefBtn2} >
                                        Subscribe Now
                                    </Button>
                                </div>
							</Grid>
						</Grid>
				</div>

            
            {/* START OF IMG GRID */}
            <div style={{paddingTop:'8%',paddingBottom:'20px', width:'90%', margin:'auto'}}>

             <Grid container>
                
                <Grid item xs={12} sm={4} md={4} lg={5}  style={{border:''}}>
                    <Box style={{padding:'20px'}}>
                        <img src={PEDDLE1} alt='Castle Stash' style={{width:'91px'}} />
                        <div style={{paddingTop:'20px', maxWidth:'370px', height:'200px', color:'#4F5665', fontSize:'14px'}}>
                            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula at, laoreet mag.
                        </div>
                        <div style={{color:'#AFB5C0', fontSize:'15px'}}>
                            ©2020PADDLE
                        </div>
                    </Box>
            
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={2}  style={{border:''}}>
                    <Box style={{padding:'20px', textAlign:'center'}}>
                        <div style={{fontWeight:'bold', paddingBlock:'17px'}}>
                            Product
                        </div>
                        <div style={{paddingBlock:'15px', border:'', height:'300px'}}>
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>     
                        </div>
                    </Box>
            
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={2}  style={{border:''}}>
                    <Box style={{padding:'20px', textAlign:'center'}}>
                        <div style={{fontWeight:'bold', paddingBlock:'17px'}}>
                          Engage
                        </div>
                        <div style={{paddingBlock:'15px', border:'', height:'300px'}}>
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>     
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3}  style={{border:''}}>
                    <Box style={{padding:'20px', textAlign:'center'}}>
                        <div style={{fontWeight:'bold', paddingBlock:'17px'}}>
                            Earn Money
                        </div>
                        <div style={{paddingBlock:'15px', border:'', height:'300px'}}>
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                Mauris sem neque
                            </div>     
                        </div>
                    </Box>
            
                </Grid>
            </Grid>
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


const HeadStyles = {
	fontSize: '35px',
	fontWeight: 'bold',
	color: '#000',
	textAlign: 'left',
    paddingBlock:'10px'
};

const LabelStyles = {
	fontSize: '16px',
	color: '#4F5665',
	textAlign: 'left',
    paddingBlock:'10px'
};



export default Section6
