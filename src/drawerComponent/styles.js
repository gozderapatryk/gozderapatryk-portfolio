import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  link: {
    color: '#000',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      color: '#0277BD',
      transition: 'all 0.35s ease',
    },
  },
  icon: {
    color: 'black',
  },
}));
