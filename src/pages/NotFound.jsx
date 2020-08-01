import * as React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class NotFound extends React.Component {
    render = () => (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', maxHeight: '1024px', height: '100vh' }} />
            </Container>
        </React.Fragment>
    )
}

export default NotFound