import styled from "@emotion/styled";
import { Mail, Notifications, SearchOutlined } from "@mui/icons-material";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: "#fff2",
    padding: "8px 42px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    input: {
        color: "#fff",
        "&::placeholder": {
            color: "#fff",
        },
    },
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "16px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                {/* logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <SportsVolleyballIcon />
                    <Typography
                        variant='h6'
                        fontWeight={700}
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        SDCIAL
                    </Typography>
                </Box>

                {/* search */}
                <Search>
                    <SearchOutlined
                        sx={{ position: "absolute", top: 11, left: 12 }}
                    />
                    <InputBase
                        placeholder={`Search Here`}
                        sx={{ width: "100%" }}
                    />
                </Search>

                {/* icons */}
                <Icons>
                    <Badge badgeContent={2} color='info'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='info'>
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 35, height: 35, cursor: "pointer" }}
                        src='https://i.ibb.co/6Rg6v33/pngegg.png'
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30, cursor: "pointer" }}
                        src='https://i.ibb.co/6Rg6v33/pngegg.png'
                    />
                    <Typography fontWeight={500}>Shuvo</Typography>
                </UserBox>
            </StyledToolBar>

            {/* menu */}
            <Menu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-button'
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{ marginTop: "35px" }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
