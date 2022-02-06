import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "../Container/index";
import Project from "../Project/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid({ projects }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={5}>
          {projects.map((project) => (
            <Grid item xs>
              <Project project={project}></Project>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
