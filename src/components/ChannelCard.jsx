import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CardContent, CardMedia } from '@mui/material';
const ChannelCard = ({ channelDetail, marginTop }) => (
  <div
  style={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
      borderRadius:"10px"
     
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#000',  borderRadius:"10px" }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3',  borderRadius:"10px" }}
        />
        <h6>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </h6>
        {channelDetail?.statistics?.subscriberCount && (
          <h6 style={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </h6>
        )}
      </CardContent>
    </Link>
  </div>
);

export default ChannelCard;
