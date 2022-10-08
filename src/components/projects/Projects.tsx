import { useState } from "react";
import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import Project from "./project/Project";

interface ProjectType {
    title: String;
}

const Projects = () => {

    const classes = useStyles();

    const [projects, setProjects] = useState<ProjectType[]>([{title: "Jan"}, {title: "Marek"}, {title: "Patryk"}, {title: "Anna"}, {title: "Katarzyna"}]);

    return (
        <div className={classes.contributorsContainer} >
            <Grid item md={12} className={classes.columnContainer}>
            <Typography align="center" variant="h4" gutterBottom>Projects</Typography>
          </Grid>
          <Grid container className={classes.contributorsContainer} spacing={5}>
          {projects.map((project,idx)=>{
                return (
                    <Project key={idx} {...project} />
                )
            })}
            </Grid>
        </div>
    );
}

export default Projects;