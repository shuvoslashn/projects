import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
        <Box
            flex={5}
            p={2}
        >
            <Post
                img={
                    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
                }
            />
            <Post
                img={
                    "https://images.unsplash.com/photo-1688728609955-ae085ccb9c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                }
            />
            <Post
                img={
                    "https://images.unsplash.com/photo-1658302640117-da5e9d9836cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                }
            />
            <Post
                img={
                    "https://images.unsplash.com/photo-1694383440533-4bd1660c97e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                }
            />
            <Post
                img={
                    "https://images.unsplash.com/photo-1694401460688-6ff598c9e8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"
                }
            />
        </Box>
    );
};

export default Feed;
