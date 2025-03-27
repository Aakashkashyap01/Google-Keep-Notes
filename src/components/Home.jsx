import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipeDrawer from "./SwipeDrawer";
import { Box } from "@mui/material";
import Notes from "../notes/Notes";
import Archives from "./archives/Archives";
import DeleteNotes from "./delete/DeleteNotes";

const Home = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
