import * as React from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 566,
        backgroundPosition: 'center top'
    },
}

class Home extends React.Component {
    state = {
        selectedHeroIndex: false,
    }

    handleSelect = (event, selectedHeroIndex) => {
        this.setState({ selectedHeroIndex })
    }

    render = () => {
        if (this.state.selectedHeroIndex !== false) {
            const {
                name,
                avatar,
                biography,
            } = this.props.heroes[this.state.selectedHeroIndex]
            return (
                <Card className={this.props.classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={this.props.classes.media}
                            image={avatar}
                            title={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {biography}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            )
        }

        return (
            <List>
                {this.props.heroes.map(({ name }, index) => (
                    <ListItem
                        button
                        selected={this.state.selectedHeroIndex === index}
                        onClick={(event) => this.handleSelect(event, index)}
                    >
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>
        )
    }
}

const mapStateToProps = ({ heroes }) => ({
    heroes: heroes.list,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))