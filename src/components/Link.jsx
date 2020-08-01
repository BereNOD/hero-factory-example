import * as React from 'react'
import {
    Link as RouterLink
} from "react-router-dom";
import MaterialButton from '@material-ui/core/Button';

const Link = (props) => <RouterLink {...props} component={MaterialButton} color="secondary" />

export default Link