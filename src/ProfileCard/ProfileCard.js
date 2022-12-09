import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ProfileCard = () => {
    return (
<Card sx={{ maxWidth: 345 }}>
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      
    </Avatar>
  }
  
  title="Rizwan Khan"
  subheader="Burhanpur (MP)"
/>
<CardMedia
  component="img"
  height="180"
  image="https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?w=1060&t=st=1668524086~exp=1668524686~hmac=ff2582e3b98c42b530715bc08f1fbac908e5b3ac54227f6f61d1dfcbfdbc2597"
  alt="Paella dish"
/>
<CardContent>
  <Typography variant="h6" color="text.secondary">
     {'Male'}
  </Typography>
  <Typography variant="subtitle1" color="text.secondary">
    {'Location: '} {'Mumbra'}
  </Typography>
  <Typography variant="subtitle1" color="text.secondary">
    {'Occupotion: '} {'Job(Electrical Engineer)'}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
</CardActions>
</Card>


    )
}

export default ProfileCard;
