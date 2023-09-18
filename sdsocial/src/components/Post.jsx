import {
    Favorite,
    FavoriteBorderOutlined,
    MoreVert,
    Share,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";

const Post = ({ img }) => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        <>
            <Card
                sx={{
                    boxShadow: "0 20px 60px #0001",
                    border: "1px solid #0002",
                    borderRadius: "16px",
                    margin: "20px 0",
                }}
            >
                <CardHeader
                    avatar={<Avatar aria-label='recipe'>R</Avatar>}
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVert />
                        </IconButton>
                    }
                    title='Shrimp and Chorizo Paella'
                    subheader='September 14, 2016'
                />
                <CardMedia
                    component='img'
                    height='360px'
                    image={img}
                    alt='Paella dish'
                />
                <Box sx={{ paddingX: "20px", paddingY: "10px" }}>
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                        </Typography>
                    </CardContent>
                    <CardActions
                        disableSpacing
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton aria-label='add to favorites'>
                            <Checkbox
                                {...label}
                                icon={<FavoriteBorderOutlined />}
                                checkedIcon={<Favorite />}
                            />
                        </IconButton>
                        <IconButton aria-label='share'>
                            <Share />
                        </IconButton>
                    </CardActions>
                </Box>
            </Card>
        </>
    );
};

export default Post;
