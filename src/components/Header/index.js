import React from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";

const Header = (props) => {
    return (
        <Box style={{position: 'sticky', top: 0,   backgroundColor: '#383e56'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {props.children}
            </div>
        </Box>
    )
}
export default Header;

