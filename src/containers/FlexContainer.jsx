import * as React from 'react'
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '768px',
        height: '100vh'
    }
}

const FlexContainer = ({ classes, children }) => (
    <Container
        maxWidth="md"
        component="main"
        className={classes.root}
    >
        <CssBaseline />
        {children}
    </Container>
)

export default withStyles(styles)(FlexContainer)