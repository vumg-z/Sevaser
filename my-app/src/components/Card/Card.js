import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Set from '../Data/Set'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 20,
    marginBottom: 20
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={()=>Set(props.texto)}>
      <CardActionArea>
      {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="..\src\components\contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.texto}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tipo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.evento}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}