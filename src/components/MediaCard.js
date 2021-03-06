import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({id, userImage, userName, userEmail}) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=>history.push(`/user/${id}`)}>
        <CardMedia
          className={classes.media}
          image={userImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userEmail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userEmail: PropTypes.string,

}