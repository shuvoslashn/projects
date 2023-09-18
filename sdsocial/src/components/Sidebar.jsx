import {
    AccountBox,
    Article,
    DarkMode,
    Groups,
    Home,
    Person,
    Settings,
    Store,
} from "@mui/icons-material";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ setMode, mode }) => {
    return (
        <Box
            flex={1.5}
            p={2}
            sx={{
                display: { xs: "none", sm: "block" },
                height: "100%",
            }}
        >
            <Box sx={{ position: "fixed" }}>
                <List>
                    {/* homepage */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary='Homepage' />
                        </ListItemButton>
                    </ListItem>

                    {/* Pages */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary='All Pages' />
                        </ListItemButton>
                    </ListItem>

                    {/* Groups */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <Groups />
                            </ListItemIcon>
                            <ListItemText primary='Groups' />
                        </ListItemButton>
                    </ListItem>

                    {/* Store */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <Store />
                            </ListItemIcon>
                            <ListItemText primary='Marketplace' />
                        </ListItemButton>
                    </ListItem>

                    {/* Friends */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary='Friends' />
                        </ListItemButton>
                    </ListItem>

                    {/* Profile */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary='Profile' />
                        </ListItemButton>
                    </ListItem>

                    {/* Settings */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                    </ListItem>

                    {/* Dark Mood */}
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={"a"} href='#home'>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                <DarkMode />
                            </ListItemIcon>
                            <Switch
                                onChange={(e) =>
                                    setMode(mode === "light" ? "dark" : "light")
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
