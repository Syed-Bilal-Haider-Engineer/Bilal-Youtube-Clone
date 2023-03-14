import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import avatar from "../components/assests/awater.jpg";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { height } from "@mui/system";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      // width: { xs: "100%", sm: "358px", md: "320px" },
      // boxShadow:1,
      borderRadius: "10px",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: "160px" }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#ffffff", height: "70px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box sx={{ height: "40px", width: "40px" }}>
          <img
            src={avatar}
            alt=""
            srcset=""
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ width: "80%" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              fontWeight="bold"
              color="#000"
              sx={{ fontSize: "15px" }}
            >
              {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography color="gray" sx={{ fontSize: "12px" }}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
            <Box sx={{display:"flex",justifyContent:"flex-start", alignItems:"center", color:"GrayText", mt:1}}>
              <Typography sx={{fontSize:"11px", mr:1}}>290K views .</Typography>
              <Typography sx={{fontSize:"11px"}}> 3 years ago</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default VideoCard;
