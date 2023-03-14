import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/Fetchdata";
import { Videos, Sidebar } from ".";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { xs: "70px", md: "100vh" },
          width: { xs: "100%", md: "15%" },
          mx:{xs:"auto", md:0},
        
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <div
        style={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          padding: "16px",
        }}
      >
        <h3 fontWeight="bold" style={{ color: "black", marginBottom: "20px" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </h3>

        <Videos videos={videos} />
      </div>
    </Stack>
  );
};

export default Feed;
