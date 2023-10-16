import React from "react";
import { Box, Grow } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "200px",
    width: "300px",
    padding: "10px",
  },
}));

const Work = (props) => {
  const styles = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1>PROJECTS UNDERTAKEN</h1>
      <Grow
        in={true}
        style={{ transformOrigin: "400 0 0" }}
        {...(true ? { timeout: 1000 } : {})}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 20,
          }}
        >
          <div
            className={styles.container}
            style={{ backgroundColor: "#f1c5c5" }}
          >
            <p>React Native</p>
          </div>
          <div
            className={styles.container}
            style={{ backgroundColor: "#ddf3f5" }}
          >
            <p>React</p>
          </div>
          <div
            className={styles.container}
            style={{ backgroundColor: "#cff6cf" }}
          >
            <p>AWS</p>
          </div>
        </Box>
      </Grow>
    </div>
  );
};

export default Work;
