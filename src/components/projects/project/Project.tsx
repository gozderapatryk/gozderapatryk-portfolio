import React from 'react'
import { Container, Grow, Paper, Grid, Button, Typography, Avatar } from '@material-ui/core';
import useStyles from './styles';
import patrykAvatar from '../../../images/profile_avatar_placeholder.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

interface ProjectType {
    title: String;
}

const Project = (props: ProjectType) => {
  const classes = useStyles();

  return (
    <Grid item sm={12} md={3} className={classes.contributorContainer}>
      <Paper elevation={6}>
                    <Avatar alt="SecretChatApp - Team" src={patrykAvatar} className={classes.avatar} />
                        <Typography align="center" variant="h5" paragraph>{props?.title}</Typography>
                        <Typography align="center" variant="body1" paragraph>Android developer</Typography>
                        <div className={classes.socialMediaContainer}>
                          <a href="https://linkedin.com/"><LinkedInIcon/></a>
                          <a href="https://github.com/"><GitHubIcon/></a>
                        </div>
                        </Paper>
                    </Grid>
  );
}

export default Project;