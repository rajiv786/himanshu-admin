import React from 'react'
import { Grid,Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import Image from 'mui-image'
import {SvgIcon} from '@mui/material';
import 'typeface-inter';
import foot from './Images/footer.png'
import {useMediaQuery} from '@mui/material';
import Facebookicon from './Facebookicon';
const InstagramIcon = (props) => {
	return (
	  <SvgIcon {...props}>
		<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clipPath="url(#clip0_1215_2399)">
    <path d="M27.5625 0H8.4375C3.7776 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.7776 36 8.4375 36H27.5625C32.2224 36 36 32.2224 36 27.5625V8.4375C36 3.7776 32.2224 0 27.5625 0Z" fill="url(#paint0_radial_1215_2399)"/>
    <path d="M27.5625 0H8.4375C3.7776 0 0 3.7776 0 8.4375V27.5625C0 32.2224 3.7776 36 8.4375 36H27.5625C32.2224 36 36 32.2224 36 27.5625V8.4375C36 3.7776 32.2224 0 27.5625 0Z" fill="url(#paint1_radial_1215_2399)"/>
    <path d="M18.0013 3.9375C14.1822 3.9375 13.7028 3.95423 12.2029 4.02244C10.7058 4.09106 9.68386 4.32802 8.78977 4.67578C7.86473 5.03494 7.08019 5.51545 6.29859 6.29733C5.5163 7.07906 5.03578 7.86361 4.6755 8.78822C4.32675 9.68259 4.08952 10.7049 4.02216 12.2013C3.95508 13.7014 3.9375 14.1809 3.9375 18.0001C3.9375 21.8194 3.95438 22.2972 4.02244 23.7971C4.09134 25.2942 4.3283 26.3161 4.67578 27.2102C5.03522 28.1353 5.51573 28.9198 6.29761 29.7014C7.07906 30.4837 7.86361 30.9653 8.78794 31.3245C9.68273 31.6723 10.7048 31.9092 12.2016 31.9778C13.7017 32.046 14.1806 32.0628 17.9996 32.0628C21.8191 32.0628 22.2969 32.046 23.7968 31.9778C25.2939 31.9092 26.317 31.6723 27.2118 31.3245C28.1364 30.9653 28.9198 30.4837 29.7011 29.7014C30.4834 28.9198 30.9638 28.1353 31.3242 27.2107C31.6699 26.3161 31.9072 25.2939 31.9776 23.7974C32.0449 22.2975 32.0625 21.8194 32.0625 18.0001C32.0625 14.1809 32.0449 13.7017 31.9776 12.2016C31.9072 10.7045 31.6699 9.68273 31.3242 8.78864C30.9638 7.86361 30.4834 7.07906 29.7011 6.29733C28.919 5.51517 28.1367 5.03466 27.2109 4.67592C26.3145 4.32802 25.292 4.09092 23.7949 4.02244C22.2948 3.95423 21.8173 3.9375 17.9969 3.9375H18.0013ZM16.7397 6.4717C17.1142 6.47114 17.532 6.4717 18.0013 6.4717C21.7561 6.4717 22.201 6.4852 23.6838 6.55256C25.0549 6.61528 25.7991 6.84436 26.2948 7.03688C26.9511 7.29169 27.4189 7.59642 27.9108 8.08875C28.403 8.58094 28.7076 9.04964 28.9631 9.70594C29.1556 10.2009 29.385 10.9451 29.4474 12.3162C29.5148 13.7987 29.5294 14.2439 29.5294 17.9969C29.5294 21.7499 29.5148 22.1953 29.4474 23.6776C29.3847 25.0487 29.1556 25.7929 28.9631 26.288C28.7083 26.9443 28.403 27.4116 27.9108 27.9035C27.4186 28.3957 26.9513 28.7003 26.2948 28.9553C25.7996 29.1486 25.0549 29.3771 23.6838 29.4398C22.2013 29.5072 21.7561 29.5218 18.0013 29.5218C14.2463 29.5218 13.8012 29.5072 12.3189 29.4398C10.9478 29.3766 10.2036 29.1475 9.70748 28.955C9.05133 28.7 8.58248 28.3954 8.0903 27.9032C7.59811 27.411 7.29352 26.9435 7.038 26.2869C6.84548 25.7917 6.61613 25.0476 6.55369 23.6765C6.48633 22.194 6.47283 21.7488 6.47283 17.9934C6.47283 14.2381 6.48633 13.7952 6.55369 12.3127C6.61641 10.9416 6.84548 10.1974 7.038 9.70172C7.29295 9.04542 7.59811 8.57672 8.09044 8.08453C8.58263 7.59234 9.05133 7.28761 9.70762 7.03223C10.2033 6.83888 10.9478 6.61036 12.3189 6.54736C13.6162 6.48872 14.1189 6.47114 16.7397 6.46819V6.4717ZM25.5078 8.80664C24.5762 8.80664 23.8203 9.5618 23.8203 10.4936C23.8203 11.4252 24.5762 12.1811 25.5078 12.1811C26.4395 12.1811 27.1953 11.4252 27.1953 10.4936C27.1953 9.56194 26.4395 8.80608 25.5078 8.80608V8.80664ZM18.0013 10.7783C14.0131 10.7783 10.7796 14.0119 10.7796 18.0001C10.7796 21.9884 14.0131 25.2204 18.0013 25.2204C21.9895 25.2204 25.2219 21.9884 25.2219 18.0001C25.2219 14.012 21.9893 10.7783 18.001 10.7783H18.0013ZM18.0013 13.3125C20.59 13.3125 22.6889 15.4111 22.6889 18.0001C22.6889 20.5889 20.59 22.6877 18.0013 22.6877C15.4124 22.6877 13.3138 20.5889 13.3138 18.0001C13.3138 15.4111 15.4124 13.3125 18.0013 13.3125Z" fill="white"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial_1215_2399" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.5625 38.7727) rotate(-90) scale(35.6787 33.184)">
      <stop stopColor="#FFDD55"/>
      <stop offset="0.1" stopColor="#FFDD55"/>
      <stop offset="0.5" stopColor="#FF543E"/>
      <stop offset="1" stopColor="#C837AB"/>
    </radialGradient>
    <radialGradient id="paint1_radial_1215_2399" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.03014 2.59327) rotate(78.681) scale(15.9486 65.7405)">
      <stop stopColor="#3771C8"/>
      <stop offset="0.128" stopColor="#3771C8"/>
      <stop offset="1" stopColor="#6600FF" stopOpacity="0"/>
    </radialGradient>
    <clipPath id="clip0_1215_2399">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
			</svg>
		</SvgIcon>
	);
  };

const Footer = () => {
  const mobile = useMediaQuery('(max-width:600px)');
  return (
   <>
   <Grid container lg={12} xs={12} sx={{height:mobile?"267px":'167px'}}>
    <Grid container lg={10.7} xs={10.2} sx={{margin:mobile?'0px':'auto',marginTop:mobile?'26px':'72px',marginBottom:mobile?'0px':'71px',margin:mobile?'26px':"auto"}}>
        <Grid container lg={2} xs={12}>

        <Grid item lg={12}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}}  >
<Grid item lg={2}  sx={{   display: 'flex',
   justifyContent:'center',
   alignItems:'center'}}  >
 <Image
      Duration={0}
      src={foot}
      style={{
       
        width: '138px',
        height: '60px',
        transitionDuration: '0',
		  animation: '0',
		borderRadius:'64px'
      }}
    />
</Grid>
</Grid>
</Grid>
				  <Grid container lg={4} xs={12} sx={{margin:'auto',marginTop:mobile?'26px':''}}>
<Grid item lg={2} xs={12}  sx={{    display: 'flex',
   justifyContent:mobile?'initial':'center',
   alignItems:'center'}} >   <Link to="/Terms" style={{ textDecoration: 'none' ,color:'#1e1e1e'}}>
    <Typography>
    Terms
    </Typography>
    </Link>
</Grid>
<Grid item lg={3} xs={12}  sx={{    display: 'flex',
   justifyContent:mobile?'initial':'center',
   alignItems:'center'}} >
      <Link to="/Privacy" style={{ textDecoration: 'none' ,color:'#1e1e1e'}}>
    <Typography sx={{marginTop:mobile?'12px':''}}>
    Privacy
    </Typography>
    </Link>
</Grid>
<Grid item lg={3} xs={12} sx={{    display: 'flex',
 justifyContent:mobile?'initial':'center',
   alignItems:'center'}} >
     <Link to="/" style={{ textDecoration: 'none' ,color:'#1e1e1e'}}>
    <Typography sx={{marginTop:mobile?'12px':''}} >
    About us
    </Typography>
    </Link>
</Grid>
<Grid item lg={2.5} xs={12} sx={{ display: 'flex', justifyContent: mobile ? 'initial' : 'center', alignItems: 'center' }}>
    <Link to="/Help" style={{ textDecoration: 'none' ,color:'#1e1e1e'}}>
        <Typography sx={{ marginTop: mobile ? '12px' : '' }}>
            Help
        </Typography>
    </Link>
</Grid>
</Grid>   
<Grid container lg={2} xs={12} >
    <Grid item lg={12} xs={12} >

<Grid container spacing={2} xs={12} sx={{justifyContent:mobile?'initial':'',marginBottom:mobile?'26px':'',marginTop:mobile?'26px':''}}>
      <Grid item>
      <a href="https://www.instagram.com/rajiv_khanduja_/" target="_blank" rel="noopener noreferrer">
        <SvgIcon component={InstagramIcon} href={'https://www.instagram.com/rajiv_khanduja_/'} sx={{ width: mobile?"26px":'36px',height:mobile?"26px":'36px' ,color: '#E4405F' }} />
      </a>
      </Grid>
      <Grid item>
      <a href="https://www.facebook.com/rajiv.khanduja.1232/" target="_blank" rel="noopener noreferrer">
      
        <SvgIcon component={Facebookicon} sx={{ width:mobile?"26px":'36px',height:mobile?"26px":'36px' , color: '#1877F2' }} />
     </a>
      </Grid>
   
    </Grid>
    </Grid>
</Grid>
    </Grid>
   </Grid>
   </>
  )
}

export default Footer