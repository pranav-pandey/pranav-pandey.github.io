import React from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";

const Spacer = (props) => {
    return (
        <Box style={{height: 60}}>
            {props.children}
        </Box>
    )
}
export default Spacer;

