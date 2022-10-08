import { Paper, Grid, Typography } from '@material-ui/core';
import goalsSvg from '../../images/goals.svg';
import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
      <Paper className={classes.pageContainer} elevation={6}>
          <Grid container className={classes.pageContainer} spacing={2}>
            <Grid item sm={12} md={6} className={classes.columnContainer}>
              <img className={classes.illustration} src={goalsSvg} alt="asd" />
            </Grid>
            <Grid item sm={12} md={6} className={classes.columnContainer}>
            <Typography align="left" variant="h4" gutterBottom>What's new?</Typography>
              <Typography align="justify" variant="body1">
              The first release of SecretChatApp in version 1.0.0 provides the basic features. We have implemented the following functionality:
              </Typography>
              <ul>
                <li>Mechanism of end-to-end encryption using openpgp.js library.</li>
                <li>Authentication and authorization of registered users.</li>
                <li>Mechanism to exchange encrypted messages over WebSocket protocol.</li>
              </ul>
                {/* <Button variant="contained" color="primary">
                  Read more
                </Button> */}
            </Grid>
          </Grid>
      </Paper>
    )
}

export default About;