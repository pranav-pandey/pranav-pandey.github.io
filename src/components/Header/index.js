import React from "react";
import { Box, Tabs, Tab, Chip, Divider } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Profile from "../../assets/profile.jpg";
import Resume from "../../assets/Resume.pdf";
const skills = [
  "HTML",
  "CSS",
  "React.js",
  "Module Federation",
  "Micro-Frontends",
  "Webpack",
  "Redux",
  "GraphQL",
  "AWS Amplify",
];
const Header = (props) => {
  return (
    <Box
      style={{
        backgroundColor: "#383e56",
        height: "35%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row", padding: 16 }}>
          <img
            src={Profile}
            style={{
              height: 150,
              width: 150,
              padding: 8,
              borderRadius: 79,
              marginRight: 24,
            }}
          />
          <div style={{ padding: 8 }}>
            {/* Name div*/}
            <h1 style={{ color: "white" }}>Hi, I'm Pranav</h1>
            {/* Description div*/}
            <h3 style={{ color: "white", paddingTop: 24 }}>
              I work as an Engineering Manager at GeekyAnts in Bangalore, India.
            </h3>
            <h3 style={{ color: "white" }}>
              I wear many hats, mostly having worked as a Frontend Tech Lead in
              various projects in my time here
            </h3>
            <h3 style={{ color: "white", paddingTop: 24 }}>
              For an in-depth look into my experience and skills, you can find
              my{" "}
              <a href={Resume} target="_blank" style={{ color: "white" }}>
                resume
              </a>{" "}
              here
            </h3>

            <Divider
              style={{
                backgroundColor: "white",
                height: 2,
                marginTop: 12,
                marginBottom: 12,
              }}
            />
            <div>
              {skills.map((skill, index) => (
                <Chip label={skill} style={{ marginRight: 8 }} />
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.children}
        </div>
      </div>
    </Box>
  );
};
export default Header;
