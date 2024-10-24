import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

const handleFavorite = () => {
  console.log('TEST handleFavorite!');
};

export default function CardComponent() {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[300] }} aria-label="avatar">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Card Title"
        subheader="October 24, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="src/assets/images/frontend.jpg"
        alt="frontend"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius,
          perspiciatis sunt?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          <FavoriteIcon sx={{ fill: favorite ? red[500] : '' }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Details:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam
            eius, perspiciatis sunt?
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam?
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio
            nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
            numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores,
            exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
