import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText,Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { categories } from '../../../utils/constant/categories';
import { Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/Category';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/material/styles';
import SimpleButton from '../../../components/presentations/buttons/SimpleButton';
import UserProfileCard from '../../../components/containers/card/UserProfileCard';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { openSIState, openSUState } from '../../../states/SignInSignUp';
import { useRecoilState } from 'recoil';
import NewSearchBar from './NewSearchBar';
export default function Drawerv1({ user }) {
    const [openList, setOpenList] = React.useState(false);
    const router = useRouter()
    const theme = useTheme()
    const [openSI, setOpenSI] = useRecoilState(openSIState)
    const [openSU, setOpenSU] = useRecoilState(openSUState)
    const [state, setState] = React.useState({
        left: false,
    });
    const handleClick = () => {
        setOpenList(!openList)
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const list = (anchor) => (
        <Box >
            <DrawerHeader>
                <Button onClick={toggleDrawer(anchor, false)} >
                    <CloseIcon />
                </Button>
            </DrawerHeader>

            {
                user && <>
                    <ListItem>
                        <ListItemIcon>
                            <UserProfileCard user={user} />
                        </ListItemIcon>
                        <ListItemText primary="Your profile" />
                    </ListItem>
                </>
            }
            <List onClick={() => {
                router.push('/donate')
                toggleDrawer(anchor, false)
            }
            }>
                <ListItem disablePadding >
                    <ListItemButton >
                        <ListItemIcon>
                            <BookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Donate" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List onClick={() => {
                router.push('/contact')
                toggleDrawer(anchor, false)
            }
            }>
                <ListItem disablePadding >
                    <ListItemButton >
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List onClick={() => {
                router.push('/freeBook')
                toggleDrawer(anchor, false)
            }
            }>
                <ListItem disablePadding >
                    <ListItemButton >
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="FreeBook" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                    {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            categories.map((item, index) => {
                                return <ListItemButton sx={{ pl: 4 }} key={index} onClick={() => {
                                    router.push(`/bookCategories/${item.name}`)
                                    toggleDrawer(anchor, false)
                                }}
                                >
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            })
                        }
                    </List>
                </Collapse>
            </List>
            {
                user ? <ListItem
                    onClick={
                        toggleDrawer(anchor, false)}
                >
                    <SimpleButton
                        onClick={() => router.push('/sellProduct')}
                        label="Sell"
                        style={{ width: '200px' }} />
                </ListItem> : <>
                    <ListItem
                        onClick={
                            toggleDrawer(anchor, false)}
                    >
                        <SimpleButton
                            onClick={() => setOpenSI(true)}
                            label="Login"
                            style={{ width: '200px' }} />
                    </ListItem>
                    <ListItem
                        onClick={
                            toggleDrawer(anchor, false)}
                    >
                        <SimpleButton
                            onClick={() => setOpenSU(true)}
                            label="SignUp"
                            style={{ width: '200px' }} />
                    </ListItem>
                </>
            }
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <Drawer
                        sx={{ display: 'flex' }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                        <ListItem>
                        </ListItem>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
