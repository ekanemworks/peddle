import { Box, Grid, Button } from '@material-ui/core';
import pricing3 from '../../../assets/peddle/pricing3.png';
import pricing2 from '../../../assets/peddle/pricing2.png';
import pricing1 from '../../../assets/peddle/pricing1.png';
import checkimg from '../../../assets/peddle/check.png';



const Section3 = () => {
    return (
        <div style={{width:'100%', margin:'auto', paddingTop:'5%', background:'#f5f5f5'}}>
            <div style={{color:'#000', fontSize: '35px', fontWeight:'bold'}}>
               <div style={{paddingBottom:'5px', paddingTop:'5px', textAlign:'center'}}> Choose Your Plan </div>
            </div>

            <div style={{color: '#2A2E43CC', paddingTop:'25px',paddingBottom:'25px', fontSize:'15px', textAlign:'center', maxWidth:'550px', margin:'auto'}}>
                Let's choose the package that is best for you and explore it happily and cheerfully.            
            </div>

            
            {/* START OF IMG GRID */}
            <div style={{paddingTop:'20px',paddingBottom:'20px', width:'90%', margin:'auto'}}>

             <Grid container>
                <Grid item xs={12} sm={4} md={4} lg={4}  style={{border:''}}>
                    <Box style={planstyle}>
                        <img src={pricing3} alt=""  style={{paddingTop:'15px'}}/>
                        <div style={{fontWeight:'bold', paddingBlock:'17px'}}>
                            Free Plan
                        </div>
                        <div style={{paddingBlock:'15px', border:'', height:'300px'}}>
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>     
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>    
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>    
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div> 
                        </div>
                        <div style={{fontWeight:'bold', paddingBlock:'19px'}}>
                            Free
                        </div>
                        <div>
							<Button variant='contained' style={DefBtn} >
								Select
							</Button>
                        </div>

                    </Box>
            

                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}  style={{border:''}}>
                    
                    <Box style={planstyle}>
                        <img src={pricing2} alt="" style={{paddingTop:'26px'}} />
                        <div style={{fontWeight:'bold', paddingBlock:'17px'}}>
                            Standard Plan
                        </div>
                        <div style={{paddingBlock:'15px', border:'', height:'300px'}}>
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>     
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>    
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>    
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div> 
                        </div>
                        <div style={{fontWeight:'bold', paddingBlock:'19px'}}>
                            $9 / <span style={{color:'#888'}}>mo</span> 
                        </div>
                        <div>
							<Button variant='contained' style={DefBtn} >
								Select
							</Button>
                        </div>
                    </Box>
     

                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}  style={{border:''}}>
                    
                    <Box style={planstyle}>
                        <img src={pricing1} alt=""  style={{paddingTop:'15px'}}/>
                        <div style={{fontWeight:'bold', paddingBlock:'17px'}}>
                            Free Plan
                        </div>
                        <div style={{paddingBlock:'15px', border:'', height:'300px'}}>
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>     
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>    
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>    
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div>  
                            <div style={{padding:'8px', color:'#4F5665' }}>
                                <img src={checkimg} alt='Castle Stash' style={{width:'10px'}} /> &nbsp;&nbsp;&nbsp;Mauris sem neque
                            </div> 
                        </div>
                        <div style={{fontWeight:'bold', paddingBlock:'19px'}}>
                            $12 / <span style={{color:'#888'}}>mo</span> 
                        </div>
                        <div>
							<Button variant='contained' style={DefBtn2} >
								Select
							</Button>
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



export default Section3
