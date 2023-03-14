import React from "react";
import { Stack, Box, Grid } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from ".";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <>
      {/* <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} border="2px solid red" > */}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
     
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
         
          justifyContent: { sm: "start" },
        }}
      >
        {videos.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={idx}
            // sx={{ backgroundColor: "blue" }}
            mt={4}
          >
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* </Stack> */}
    </>
  );
};

export default Videos;
