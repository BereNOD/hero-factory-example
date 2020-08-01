import * as React from 'react'
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Link from './../components/Link'

const styles = {
    section: {
        margin: 'auto'
    }
}

class NotFound extends React.Component {
    render = () => (
        <section className={this.props.classes.section}>
            <Typography
                variant="h1"
                component="h2"
                gutterBottom
            >
                Page not found
            </Typography>
            <Link to="/">
                <ArrowBackIosIcon />
                Back to home page
            </Link>
        </section>
    )
}

export default withStyles(styles)(NotFound)