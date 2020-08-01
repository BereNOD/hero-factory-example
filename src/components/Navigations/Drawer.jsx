import * as React from 'react'

import { withStyles } from '@material-ui/core/styles';
import MaterialDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const styles = {
    list: {
        width: 250,
    },
};

const Drawer = ({
    open,
    onClose: handleClose,
    classes: {
        list: listClass,
    },
}) => (
    <MaterialDrawer
        anchor="left"
        open={open}
        onClose={handleClose}
    >
        <div
                className={listClass}
            role="presentation"
            onClick={handleClose}
            onKeyDown={handleClose}
        >
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    </MaterialDrawer>
)

export default withStyles(styles)(Drawer)