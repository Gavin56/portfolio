/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../Button/index";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgb(70, 70, 70)",
    color: "white"
  },
}));

export default function SimpleGrow({project}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <Grow
    in={checked}
    style={{ transformOrigin: "0 0 0" }}
    {...(checked ? { timeout: 1000 } : {})}
    >
    <Card elevation={4} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={project.image}
          title={project.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{fontFamily:"Spartan"}}
          >
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            component="p"
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button project={project}></Button>
      </CardActions>
    </Card>
    </Grow>
  );
}
