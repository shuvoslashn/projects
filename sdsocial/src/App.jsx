import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const App = () => {
    return (
        <>
            <Box>
                <Navbar />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        gap: "50px",
                    }}
                >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </Box>
                <Add />
            </Box>
        </>
    );
};

export default App;
