import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Box>
                <Navbar />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                    }}
                >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </Box>
            </Box>
        </div>
    );
};

export default App;
