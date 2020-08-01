import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

const AppBar = ({
    classes: {
        menuButton: menuButtonClass,
        title: titleClass,
    },
    onSideBarOpen: handleSideBarOpen,
}) => (
    <MaterialAppBar position="static">
        <Toolbar>
            <IconButton
                edge="start"
                className={menuButtonClass}
                color="inherit"
                aria-label="menu"
                onClick={handleSideBarOpen}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                className={titleClass}
            >
                News
          </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </MaterialAppBar>
)

export default withStyles(styles)(AppBar)