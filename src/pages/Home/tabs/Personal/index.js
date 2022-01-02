import React from 'react';
import { Box, Grow } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '400px',
        width: '300px',
        padding: '10px'
    }
}));

const Personal = (props) => {
    const styles = useStyles();

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <h1>INTERESTS</h1>
            <Grow
                in={true}
                style={{ transformOrigin: '400 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <div className={styles.container} style={{backgroundColor: '#f1c5c5'}}>
                        <p>Cross Country Hiking</p>
                    </div>
                    <div className={styles.container} style={{backgroundColor: '#ddf3f5'}}>
                        <p>Landscape Photography</p>
                    </div>    
                    <div className={styles.container} style={{backgroundColor: '#cff6cf'}}>
                        <p>Adventure Blogs</p>
                    </div>
                </Box>
            </Grow>
        </div>
    )
};

export default Personal;