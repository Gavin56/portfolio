import Grid from "../../components/Grid/index";
import projects from "../../utils/JSON";
import "./style.css";

function Portfolio() {
  return (
    <div>
      <Grid projects={projects}></Grid>
    </div>
  );
}

export default Portfolio;
