import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader, VideoCard, ChannelCard } from ".";
import { fetchFromAPI } from "../utils/Fetchdata";
import thumb from "../components/assests/thumb.jfif";
import { width } from "@mui/system";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ width: "90%", mx: "auto" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ width: {xs:"100%",md:"70%"} }}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
              }}
          >
            

            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              
            />
            
            <p color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </p>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "body1" }}
                  color="#000"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    style={{ fontSize: "12px", color: "gray", ml: "15px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <p variant="body1" style={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p variant="body1" style={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 3 }}
          justifyContent="center"
          alignItems="center"
          sx={{ width: {xs:"100%",md:"30%"} }}
        >
          {[1,2,3,4,5,6,7,8,9,].map((item, idx) => (
            <Box
              key={idx}
              sx={{
                height: "70px",
                my: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "110px", height: "60px" }}>
                <img
                  src={thumb}
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box ml={2}>
                <Typography sx={{ fontSize: "13px", color: "black" }}>
                  New detail on spected cjomes
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "gray" }}>
                  {" "}
                  codevalution
                </Typography>
              </Box>
            </Box>
          
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
