
import comment from '../../../assets/comment.png';

import {
	Grid,
} from '@material-ui/core';

const Section4b = () => {
    return (
        <div style={{paddingTop:'50px', paddingBottom:'50px'}}>


             <Grid container>
                <Grid item xs={0} sm={2} md={3} lg={2} ></Grid>
                <Grid item xs={12} sm={8} md={6} lg={8} >


            <div style={{padding: '20px', textAlign: 'center', margin: 'auto', maxWidth:768}}>
                <img src={comment} style={{margin:'40px'}} alt="" />
                <div style={{color:'#2A2E43'}}>
                    Quickserv has provided out-sourced property consultancy on Magnet’s national portfolio for over 15 years, across a range of disciplines and we have typically found their advice to be of a high standard based on sound commercial reasoning.
                </div>
                <div style={{height:'1.45px', width:'70px', backgroundColor:'#02327B', margin:'auto', marginTop:'30px', marginBottom:'30px'}}></div>
                <div>
                    <b>Adedeji Mayowa</b> - Landwey
                </div>
            </div>
             </Grid>
                <Grid item xs={0} sm={2} md={3} lg={2} ></Grid>
            </Grid>

                
        </div>

    )
}

export default Section4b
