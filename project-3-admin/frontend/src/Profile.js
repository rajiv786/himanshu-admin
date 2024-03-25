import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'mui-image';
import { Api_url } from './helper';
import { Typography, Grid, Button } from '@mui/material';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Header from './Header';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import 'typeface-inter';
import CircularProgress from '@mui/material/CircularProgress';
import TabContext from '@mui/lab/TabContext';

import TabPanel from '@mui/lab/TabPanel';


function Profile() {

	const [value, setValue] = React.useState('one');
	const [images, setImages] = useState([]);
	const [extractedText, setExtractedText] = useState('');
	const [loading,setloading]=useState(false);
	useEffect(() => {
		setloading(true);
		axios.get(`${Api_url}/Otp/api/images/pending`)
		  .then(async (response) => {
			const pendingImagesWithUserData = await Promise.all(
			  response.data.map(async (item) => {
				const userData = await fetchUserData(item.userId);
				return { ...item, userData };
			  })
			);
			setImages(pendingImagesWithUserData);
			setloading(false);
		  })
		  .catch((error) => {
			console.error('Error fetching pending images:', error);
			setloading(false);
		  });
	  }, []);
	  
	// Declare state for rejected images and loading status
const [rejectedImages, setRejectedImages] = useState([]);
const [loadingRejected, setLoadingRejected] = useState(false);

// Add a new useEffect to fetch rejected images
// Add a new useEffect to fetch rejected images
useEffect(() => {
	setLoadingRejected(true);
	axios.get(`${Api_url}/Otp/api/images/rejected`)
	  .then(async (response) => {
		const rejectedImagesWithUserData = await Promise.all(
		  response.data.map(async (item) => {
			const userData = await fetchUserData(item.userId);
			return { ...item, userData };
		  })
		);
		setRejectedImages(rejectedImagesWithUserData);
		setLoadingRejected(false);
	  })
	  .catch((error) => {
		console.error('Error fetching rejected images:', error);
		setLoadingRejected(false);
	  });
  }, []);
  
	// Declare state for accepted images and loading status
const [acceptedImages, setAcceptedImages] = useState([]);
const [loadingAccepted, setLoadingAccepted] = useState(false);
const [userData, setUserData] = useState({}); // State to store user data
const [loadingUserData, setLoadingUserData] = useState(false); // State to track loading user data status
const fetchUserData = async (userId) => {
	try {
	  setLoadingUserData(true);
	  const response = await axios.get(`${Api_url}/Otp/user1/${userId}`, {
		headers: {
		  'Content-Type': 'application/json',
		  Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	  });
		setLoadingUserData(false);
		console.log(response.data);
	  return response.data;
	} catch (error) {
	  setLoadingUserData(false);
	  console.error('Error fetching user data:', error);
	  return null;
	}
  };
  useEffect(() => {
	setLoadingAccepted(true);
	axios.get(`${Api_url}/Otp/api/images/home`)
	  .then(async (response) => {
		const acceptedImagesWithUserData = await Promise.all(
		  response.data.map(async (item) => {
			const userData = await fetchUserData(item.userId);
			return { ...item, userData };
		  })
		);
		setAcceptedImages(acceptedImagesWithUserData);
		setLoadingAccepted(false);
	  })
	  .catch((error) => {
		console.error('Error fetching accepted images:', error);
		setLoadingAccepted(false);
	  });
  }, []);
	
// Add a new useEffect to fetch accepted images



	const handleImageClick = (fileId) => {
	  
	  window.location.href = `/file-viewer?fileId=${fileId}`;
	};
	const handlepdfClick = (fileId) => {
	  
		window.location.href = `/file-viewer?fileId=${fileId}`;
	  };
	const handleStatusChange = (fileId, status) => {
		axios.put(`${Api_url}/Otp/api/images/${fileId}`, { status })
			.then((response) => {
			  console.log(response.data,'response')
			// Handle the response from the backend
			// For example, you can show a success message or update the data in state accordingly
		  })
		  .catch((error) => {
			// Handle any errors that occurred during the API call
			console.error(error);
		  });
	  };
	  
  const handleChange = (event, newValue) => {
    setValue(newValue);
	};
	
	return (<>
		<Header />
		<Grid container lg={9.7} sx={{ margin: 'auto' }}>
			  <Grid item lg={6} sx={{marginTop:"32px",marginBottom:"56px",justifyContent:'flex-start'}}>
			  <Typography sx={{fontSize:'36px',fontFamily:'Inter'}}>Notes</Typography>  
			</Grid>
			
			 
		  </Grid>
		<Grid container lg={9.7} sx={{ margin: 'auto', backgroundColor: "#FAF7F7" }}>
			<Grid item lg={12}>
				<TabContext value={value} style={{marginLeft:"20px"}}>
			<Tabs
        value={value}
        onChange={handleChange}
        
        indicatorColor="#07b0f5"
        aria-label="secondary tabs example"
      >
					<Tab value="one" label="Request"  style={{ color: '#07b0f5',textTransform:'none',textDecoration:"none" }} >
						
						</Tab>
        <Tab value="two" label="Accepted" style={{color:'#07b0f5',textTransform:'none',textDecoration:"none"}} />
        <Tab value="three" label="Rejected" style={{color:'#07b0f5',textTransform:'none',textDecoration:"none"}} />
				</Tabs>
					<TabPanel value="one">
						nothing
				{loading ? <><CircularProgress  /> <p>Please wait We are processing your request</p></>:	
					<Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                  <Grid key={image._id} sx={{ backgroundColor: '#FFF', borderRadius: '12px', marginTop: '0px', height: ' 198px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} >
						<Grid item lg={2} sx={{display:'flex',justifyContent:'center'}}>
						<img src={`data:image/jpeg;base64,${image.imageData}`} alt={image.pdfName} width="117px" height="166px" style={{marginTop:"16px"}} />
						</Grid>
						<Grid item lg={4}  >
						<Typography style={{fontFamily: 'Inter',marginTop:"16px",
fontSize: '20px',
fontStyle: 'normal',
fontWeight: 600,
								lineHeight: 'normal',
							}}>{image.title}</Typography>

							<Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize: '16px',color:'#5B5A5A',
fontStyle: 'normal',
fontWeight: 600,
								lineHeight: 'normal',
							}}>{image.synopsis}
							</Typography>
							<Grid item lg={7} sx={{ justifyContent: 'space-between', display: 'flex' }}>
				  <img src='https://drive.google.com/uc?export=view&id=1ekfJxVejB1NywY9G6d4Hoxl9cPlhQ9H4' alt='rajiv' style={{width:"42px",height:"49px"}} />
					  <Button variant='outlined' sx={{ color: "#07b0f5", textTransform: 'none', textDecoration: "none", border: "2px solid #07b0f5", height: "48px", borderRadius: "8px", padding:"12px 20px"}} onClick={() => handleImageClick(image._id)}><VisibilityOutlinedIcon sx={{color:"#07b0f5"}} />View</Button>
					  <Button variant='outlined' sx={{color:"#07b0f5",textTransform:'none',textDecoration:"none",border:"2px solid #07b0f5", padding:"12px 20px",display:"inline-flex",justifyContent: "center",
alignItems: "center",gap: "8px"}} onClick={() => handlepdfClick(image._id)}><FileDownloadOutlinedIcon sx={{color:"#07b0f5",marginLeft:"5px"}}/>Download</Button>
				  </Grid>
							
						</Grid>
						
						
						<br />
						<Grid item lg={4}>
		  {image.userData && !loadingUserData && (
        <>
				  <Typography  sx={{marginTop:"48px",color: "#000",
fontFamily: "Inter",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 600,
lineHeight: "normal"}}>{image.userData.Name}</Typography>
				  <Typography sx={{color: "#000",
fontFamily: "Inter",marginTop:"24px",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 500,display:'flex',alignItems:'center',
								  lineHeight: "normal"
							  }}><MailOutlinedIcon sx={{marginRight:"10px"} } />{image.userData.Email}</Typography>
        </>   )}
		 <Grid item lg={8} style={{ display: 'flex', justifyContent:'space-between',marginTop:'20px' }}>
            <Button variant="contained" sx={{color:"#FFFFFF",backgroundColor:"#07b0f5",textTransform:'none',textDecoration:"none",borderRadius:'8px', padding:"12px 20px",display:"inline-flex",justifyContent: "center",
alignItems: "center",gap: "8px"}} onClick={() => handleStatusChange(image._id, 'accepted')}>Accept</Button>
								  <Button variant="contained" sx={{color:"#FFFFFF",backgroundColor:"#D95353",textTransform:'none',textDecoration:"none",borderRadius:'8px', padding:"12px 20px",display:"inline-flex",justifyContent: "center",
									alignItems: "center", gap: "8px"
								}} onClick={() => handleStatusChange(image._id, 'rejected')}>Reject</Button>
								<Button variant="contained" sx={{color:"#FFFFFF",backgroundColor:"#5353",textTransform:'none',textDecoration:"none",borderRadius:'8px', padding:"12px 20px",display:"inline-flex",justifyContent: "center",
alignItems: "center",gap: "8px"}} onClick={() => handleStatusChange(image._id, 'pro')}>Pro</Button>
          </Grid>
       
     
			  </Grid>
						
                  </Grid>
                ))}
              </Grid>}
				</TabPanel>
					<TabPanel value="two">
					
					{loadingAccepted ? (
    <>
      <CircularProgress />
      <p>Please wait, we are processing your request</p>
    </>
  ) : (
    <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
  {acceptedImages.map((image) => (
    <Grid key={image._id} sx={{ backgroundColor: '#FFF', borderRadius: '12px', marginTop: '0px', height: '308px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} onClick={() => handleImageClick(image._id)}>
      <img src={`data:image/jpeg;base64,${image.imageData}`} alt={image.pdfName} width="150px" height="236px" style={{ marginTop: "16px" }} />
		<Grid container lg={10} sx={{margin:'26px'}}>
		  <Grid item lg={8}>
			  <Grid item lg={12}>
			  <Typography style={{
        fontFamily: 'Inter', marginTop: "16px",
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      }}>{image.title}</Typography>  
			  </Grid>
			  <Grid item lg={8} sx={{marginTop:'16px',marginBottom:'26px'}}>
			  <Typography style={{
        fontFamily: 'Inter', marginTop: "6px",
        fontSize: '16px', color: '#5B5A5A',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      }}>{image.synopsis}</Typography>
			  </Grid>
			  <Grid item lg={7} sx={{ justifyContent: 'space-between', display: 'flex' }}>
				  <img src='https://drive.google.com/uc?export=view&id=1ekfJxVejB1NywY9G6d4Hoxl9cPlhQ9H4' alt='rajiv' style={{width:"42px",height:"49px"}} />
					  <Button variant='outlined' sx={{ color: "#07b0f5", textTransform: 'none', textDecoration: "none", border: "2px solid #07b0f5", height: "48px", borderRadius: "8px", padding:"12px 20px"}} onClick={() => handleImageClick(image._id)}><VisibilityOutlinedIcon sx={{color:"#07b0f5"}} />View</Button>
					  <Button variant='outlined' sx={{color:"#07b0f5",textTransform:'none',textDecoration:"none",border:"2px solid #07b0f5", padding:"12px 20px",display:"inline-flex",justifyContent: "center",
alignItems: "center",gap: "8px"}} onClick={() => handlepdfClick(image._id)}><FileDownloadOutlinedIcon sx={{color:"#07b0f5",marginLeft:"5px"}}/>Download</Button>
				  </Grid>
		  </Grid>
		  <Grid item lg={4}>
		  {image.userData && !loadingUserData && (
        <>
				  <Typography  sx={{marginTop:"48px",color: "#000",
fontFamily: "Inter",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 600,
lineHeight: "normal"}}>{image.userData.Name}</Typography>
				  <Typography sx={{color: "#000",
fontFamily: "Inter",marginTop:"24px",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 500,display:'flex',alignItems:'center',
								  lineHeight: "normal"
							  }}><MailOutlinedIcon sx={{marginRight:"10px"} } />{image.userData.Email}</Typography>
         
						  {/* Display other user data */}
          {/* For example: */}
          {/* <img src={image.userData.photo} alt="User Photo" /> */}
        </>
      )}
			  </Grid>
		 </Grid>
      
     

      
    </Grid>
  ))}
</Grid>

  )}
  </TabPanel>
					<TabPanel value="three">
					{loading ? (
    <>
      <CircularProgress />
      <p>Please wait, we are processing your request</p>
    </>
  ) : (
    <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {rejectedImages.map((image) => (
        <Grid key={image._id} sx={{ backgroundColor: '#FFF', borderRadius: '12px', marginTop: '0px', height: '308px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} onClick={() => handleImageClick(image._id)}>
      <img src={`data:image/jpeg;base64,${image.imageData}`} alt={image.pdfName} width="150px" height="236px" style={{ marginTop: "16px" }} />
		<Grid container lg={10} sx={{margin:'26px'}}>
		  <Grid item lg={8}>
			  <Grid item lg={12}>
			  <Typography style={{
        fontFamily: 'Inter', marginTop: "16px",
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      }}>{image.title}</Typography>  
			  </Grid>
			  <Grid item lg={8} sx={{marginTop:'16px',marginBottom:'26px'}}>
			  <Typography style={{
        fontFamily: 'Inter', marginTop: "6px",
        fontSize: '16px', color: '#5B5A5A',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      }}>{image.synopsis}</Typography>
			  </Grid>
			  <Grid item lg={7} sx={{ justifyContent: 'space-between', display: 'flex' }}>
				  <img src='https://drive.google.com/uc?export=view&id=1ekfJxVejB1NywY9G6d4Hoxl9cPlhQ9H4' alt='rajiv' style={{width:"42px",height:"49px"}} />
				  <Button variant='outlined'  sx={{color:"#07b0f5",textTransform:'none',textDecoration:"none",border:"2px solid #07b0f5", padding:"12px 20px",display:"inline-flex",justifyContent: "center",
alignItems: "center",gap: "8px"}} onClick={() => handleImageClick(image._id)}><VisibilityOutlinedIcon sx={{color:"#07b0f5",marginLeft:"5px"}} />View</Button>
					  <Button variant='outlined'  sx={{color:"#07b0f5",textTransform:'none',textDecoration:"none",border:"2px solid #07b0f5", padding:"12px 20px",display:"inline-flex",justifyContent: "center",
alignItems: "center",gap: "8px"}} onClick={() => handlepdfClick(image._id)}><FileDownloadOutlinedIcon sx={{color:"#07b0f5",marginLeft:"5px"}}/>Download</Button>
				  </Grid>
		  </Grid>
		  <Grid item lg={4}>
		  {image.userData && !loadingUserData && (
        <>
				  <Typography sx={{marginTop:"48px",color: "#000",
fontFamily: "Inter",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 600,
lineHeight: "normal"}}>{image.userData.Name}</Typography>
				  <Typography sx={{color: "#000",
fontFamily: "Inter",marginTop:"24px",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 500,display:'flex',alignItems:'center',
								  lineHeight: "normal"
							  }}><MailOutlinedIcon sx={{marginRight:"10px"} } />{image.userData.Email}</Typography>
        
							  {/* Display other user data */}
          {/* For example: */}
          {/* <img src={image.userData.photo} alt="User Photo" /> */}
        </>
      )}
			  </Grid>
		 </Grid>
      
     

      
    </Grid>
      ))}
    </Grid>
  )}	
					</TabPanel>
					</TabContext>
			</Grid>
     
		</Grid>
		</>
  )
}
export default Profile