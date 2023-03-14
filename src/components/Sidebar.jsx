import React from "react";
import { Box, Button, Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    className="scroolbox"
    direction="row"
    sx={{
      overflowY: "auto",
      flexDirection: { xs: "row", md: "column" },
      overflow: "scroll",
      height: { xs: "50px", md: "100vh" },
      py: 1,
    }}
  >
    {categories.map((category) => (
      <Box sx={{ width: {xs:"250px", md:"auto"} ,mx:"2px"}}>
        <Button
          onClick={() => setSelectedCategory(category.name)}
          sx={{
            width: "100%",
            borderRadius: "12px",
            display: "flex",
            justifyContent: { xs: "space-between", md: "flex-start" },
            background: category.name === selectedCategory && "#F0F0F0",
            "&:hover": { background: "#F0F0F0" },
            my: "1px",
            color: "black",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "black" : "#3A3A3A",
              marginRight: "25px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </Button>
      </Box>
    ))}
  </Stack>
);

export default Categories;
