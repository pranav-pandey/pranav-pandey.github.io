import React from "react";
import "./../../App.css";
import { Header, Spacer } from "../../components";
import { Box, Tabs, Tab, Grow, Fade, Paper } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Work from "./tabs/Work";
import Personal from "./tabs/Personal";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "200px",
    width: "300px",
    padding: "10px",
  },
}));
const Home = (props) => {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    console.log(newValue);

    setValue(newValue);
  };

  return (
    <div className="App">
      <Header>
        <StyledTabs
          value={value}
          onChange={handleChangeTab}
          centered
          style={{ justifyContent: "center" }}
        >
          <StyledTab label="WORK" style={{ color: "#FFFFFF" }} />
          <StyledTab label="PERSONAL" style={{ color: "#FFFFFF" }} />
        </StyledTabs>
      </Header>
      <div style={{ overflowY: "scroll", backgroundColor: "#FFFFFF" }}>
        <Spacer />
        <TabPanel value={value} index={0}>
          <Work />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Personal />
        </TabPanel>
      </div>
    </div>
  );
};

export default Home;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ flex: 1, display: "flex" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 110,
      width: "100%",
      backgroundColor: "#FFB101",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    // color: '#000',
    fontWeight: 500,
    fontSize: 14,
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);
