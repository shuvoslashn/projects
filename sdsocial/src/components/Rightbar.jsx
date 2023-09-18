import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box
            flex={3}
            sx={{
                display: { xs: "none", lg: "block" },
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    paddingRight: "50px",
                    overflow: "scroll",
                    height: "100%",
                    paddingBottom: "80px",
                }}
            >
                <Box>
                    <Typography
                        variant='h6'
                        fontWeight={100}
                        sx={{ marginTop: "28px", marginBottom: "10px" }}
                    >
                        Online Friends
                    </Typography>

                    <AvatarGroup max={8} sx={{ justifyContent: "flex-end" }}>
                        <Avatar
                            alt='Remy Sharp'
                            src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                        />
                        <Avatar
                            alt='Travis Howard'
                            src='/static/images/avatar/4.jpg'
                        />
                        <Avatar
                            alt='Cindy Baker'
                            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        />
                        <Avatar
                            alt='Cindy Baker'
                            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                        />
                        <Avatar
                            alt='Agnes Walker'
                            src='/static/images/avatar/4.jpg'
                        />
                        <Avatar
                            alt='Trevor Henderson'
                            src='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        />
                        <Avatar
                            alt='Trevor Henderson'
                            src='https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        />
                        <Avatar
                            alt='Trevor Henderson'
                            src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        />
                        <Avatar
                            alt='Trevor Henderson'
                            src='https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        />
                    </AvatarGroup>

                    <Typography
                        variant='h6'
                        fontWeight={100}
                        sx={{ marginTop: "40px", marginBottom: "10px" }}
                    >
                        Latest Photos
                    </Typography>

                    <ImageList
                        sx={{
                            width: "100%",
                            maxWidth: "1200px",
                            minHeight: "auto",
                            overflow: "hidden",
                        }}
                        cols={3}
                        rowHeight={164}
                        gap={16}
                    >
                        <ImageListItem>
                            <img
                                src={`https://images.unsplash.com/photo-1694401460688-6ff598c9e8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80`}
                                alt={"Trevor Henderson"}
                                loading='lazy'
                                style={{ borderRadius: "10px" }}
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={`https://images.unsplash.com/photo-1694383440533-4bd1660c97e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
                                alt={"Trevor Henderson"}
                                loading='lazy'
                                style={{ borderRadius: "10px" }}
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={`https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`}
                                alt={"Trevor Henderson"}
                                loading='lazy'
                                style={{ borderRadius: "10px" }}
                            />
                        </ImageListItem>
                    </ImageList>

                    <Typography
                        variant='h6'
                        fontWeight={100}
                        sx={{ marginTop: "40px", marginBottom: "0px" }}
                    >
                        Latest Conversations
                    </Typography>

                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 400,
                        }}
                    >
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar
                                    alt='Remy Sharp'
                                    src='/static/images/avatar/1.jpg'
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary='Brunch this weekend?'
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component='span'
                                            variant='body2'
                                            color='text.primary'
                                        >
                                            Ali Connors
                                        </Typography>
                                        {
                                            " — I'll be in your neighborhood doing errands this…"
                                        }
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant='inset' component='li' />
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar
                                    alt='Travis Howard'
                                    src='/static/images/avatar/2.jpg'
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary='Summer BBQ'
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component='span'
                                            variant='body2'
                                            color='text.primary'
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {
                                            " — Wish I could come, but I'm out of town this…"
                                        }
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant='inset' component='li' />
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar
                                    alt='Cindy Baker'
                                    src='/static/images/avatar/3.jpg'
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary='Oui Oui'
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component='span'
                                            variant='body2'
                                            color='text.primary'
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {
                                            " — Do you have Paris recommendations? Have you ever…"
                                        }
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Rightbar;
