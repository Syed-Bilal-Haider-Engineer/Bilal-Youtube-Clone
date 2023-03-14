import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container, Hidden } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
import Header from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Box maxWidth="xl" sx={{mx:"auto"}}>
      <Hidden mdDown>
        <Navbar />
      </Hidden>
      <Hidden mdUp>
        <Header />
      </Hidden>
      <Container maxWidth="xl">

      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      </Container>
    </Box>
  </BrowserRouter>
);

export default App;
