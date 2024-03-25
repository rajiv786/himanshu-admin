import React from 'react'
import Image from 'mui-image';
import { Grid,Typography,Button } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const Panel = () => {
	const navigate = useNavigate();
	const handleSignup = () => { 
		navigate('/Signup')
	}
	const handleLogin = () => { 
		navigate('/Login1')
	}

  return (
    <>
    <Header/>
    <Grid container lg={12} sx={{justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
<Grid container lg={9}  sx={{backgroundColor:'#FAF7F7',display:'flex',justifyContent:'center',alignItems:'center'}}>
  <Grid container lg={5}>
  <Grid item  lg={12}   >	
								
				
              
                          
                          <Image
            duration={0}
            src="https://drive.google.com/uc?export=view&id=1sEWulDM5-7XoXmcKI1CYlCzn84O8Kw2G"
            style={{
              width: '339px',
              height: '339px',
            
              transitionDuration: '0',
              animation: '0',
              zIndex: 1,
              borderRadius: '339px',
              marginTop:'76px',marginBottom:'76px'
            // To maintain the aspect ratio of the image within the circle
            }}
          />
                
             
                            
                            
          </Grid>	
  </Grid>
  <Grid container lg={5}>
    <Grid item lg={12}>
      <Typography sx={{fontSize:'36px',fontWeight:'700'}}>Welcome Back!</Typography>
      </Grid>
      <Grid item lg={12}>

      <Typography sx={{fontSize:'20px',fontWeight:'400'}}>Login to check manuscript requests</Typography>
   </Grid>
   <Grid container lg={6} sx={{marginTop:'46px',display:'flex',justifyContent:'space-between'}}>
    <Grid item lg={6} >
    

      
      <CustomButton onClick={handleSignup} sx={{color:'#fff',textTransform:'none',fontSize:'16px',fontWeight:'500',borderRadius:'8px',padding:'12px 20px',backgroundColor: '#07b0f5',}}>Sign up</CustomButton>
      
    </Grid>
    <Grid item lg={6} >
   
      <CustomButton onClick={handleLogin} sx={{color:'#fff',textTransform:'none',fontSize:'16px',fontWeight:'500',borderRadius:'8px',padding:'12px 20px',backgroundColor: '#07b0f5',}}>Login</CustomButton>
    
    </Grid>
   </Grid>
  </Grid>
</Grid>
    </Grid>
        <Footer/>
    </>
  )
}

export default Panel
