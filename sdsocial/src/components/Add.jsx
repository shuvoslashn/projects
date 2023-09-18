import styled from "@emotion/styled";
import {
    AddAPhoto,
    DateRangeOutlined,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title='Add'
                placement='right-start'
                sx={{
                    position: "fixed",
                    left: { xs: "calc(50% - 10%)", sm: "20px" },
                    bottom: "20px",
                }}
            >
                <Fab color='primary' aria-label='add'>
                    <AddAPhoto />
                </Fab>
            </Tooltip>

            <Modal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "500px",
                        width: "100%",
                        minHeight: "200px",
                        background: "#fff",
                        padding: "30px",
                        paddingTop: "20px",
                        borderRadius: "16px",
                    }}
                >
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                        sx={{ marginBottom: "10px", textAlign: "center" }}
                    >
                        Create Post
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            marginBottom: "8px",
                        }}
                    >
                        <Avatar
                            src='https://i.ibb.co/6Rg6v33/pngegg.png'
                            alt='Shuvo Sarker'
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography color={"#787878"}>Shuvo Sarker</Typography>
                    </Box>

                    <TextField
                        id='standard-multiline-static'
                        multiline
                        rows={3}
                        placeholder={`What's on your mind?`}
                        variant='standard'
                        sx={{ width: "100%" }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            gap: "6px",
                            alignItems: "center",
                            marginY: "8px",
                        }}
                    >
                        <EmojiEmotions sx={{ color: "#ffa000" }} />
                        <Image color='primary' />
                        <VideoCameraBack color='error' />
                        <PersonAdd color='success' />
                    </Box>

                    <ButtonGroup
                        variant='contained'
                        aria-label='outlined button group'
                        sx={{ width: "100%" }}
                    >
                        <Button sx={{ width: "100%" }}>Post</Button>
                        <Button>
                            <DateRangeOutlined />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    );
};

export default Add;
