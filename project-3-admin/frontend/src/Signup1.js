import React  from 'react'
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import 'typeface-inter';
import { Api_url } from './helper';
import { styled } from '@mui/system';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useMediaQuery} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const Signup1 = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
	  e.preventDefault();
    const email1 = localStorage.setItem('email1', Email);
	  setIsLoading(true);
    try {
      const { data: res } = await axios.post(`${Api_url}/admin/sign1`, { Email});
    
	  
		console.log(res);
		setIsLoading(false);
      navigate('/Otp1')
	} catch (error) {
		setIsLoading(false);
      console.error(error);
    }
   

    setEmail('')
  
  }
  const [Email,setEmail] = useState('');
  return (
    <div>
		  <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: 'skyblue', height: '100vh' }}>
		 
    <Paper sx={{ width: mobile?"85%":'478px', height: mobile?"263px":'315px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={11} justifyContent="center" alignItems="center">
        <Grid item lg={12} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:mobile?"20px":'26px',fontFamily:'Inter',fontWeight:'600'}}>Sign Up with GorailsTech!</Typography>
      </Grid>
						  <Grid item lg={12} xs={8.2} sx={{textAlign:'center'}} >
        <Typography sx={{fontSize:'12px',fontFamily:'Inter',fontWeight:'400' }}>Discover top notes at gorailstech
with just one click!</Typography>
      </Grid>
      <Grid item lg={10} xs={11} sx={{marginTop:'20px'}}>
  <Typography sx={{textAlign:'left', fontSize:'16px', fontWeight:'700', fontFamily:'Inter'}}>Email</Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
  
    placeholder="Enter your email"
    value={Email}
    size="small"
    onChange={(e) => setEmail(e.target.value)}
    sx={{ mb:mobile?"12px": 2, borderRadius: '6px',backgroundColor:  '#F4F1F1', }} 
  />
					  </Grid>
					  <Grid item lg={10} xs={11}>
<CustomButton onClick={handleSubmit}
      type="submit"
      variant="contained"
      sx={{
        mt: 0,
            mb: 0,
            background: '#07b0f5',
            borderRadius:mobile?"8px": '12px',
            textTransform: 'none',
            width: mobile?"100%":'100%',
            height: mobile?"39px":'56px',
            fontSize: mobile?"14px":'20px',
            fontFamily: 'Inter',
            fontWeight: '500'
        
      }}
    >
							  {isLoading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Submit'}    
						  </CustomButton>
						  </Grid>
	{Error && <Typography>{Error}</Typography>} 
      </Grid>
				  </Paper>
				
    
</Grid>

    </div>
  )
}

export default Signup1
