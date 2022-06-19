import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types'
export default function UserBasket({price,src,description,author,onClick,title}) {
  return (
    <Card sx={{ display: 'flex' ,maxWidth:800,width:'600px', }}>
        <CardMedia
        component="img"
        sx={{ width: 151, height:214,objectFit:'cover', }}
        image={src}
        alt="book"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {author}
          </Typography>
          <Typography sx={{height:50,overFlow:'hidden',}}>{description}</Typography>
          <Typography color="error">Price: {price}</Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 4, pb: 1 }}>
          <Tooltip title="delete">
          <IconButton onClick={onClick}>
            <DeleteIcon/>
          </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
}
UserBasket.prototype = {
  src:PropTypes.string,
  author:PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
  price:PropTypes.number,
  onClick:PropTypes.func
};
UserBasket.defaultProps = {
  src:'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/parrot-picture.jpg',
  author:'Mr.A',
  title:'Rich dad poor dad',
  description:'This book is good',
  price:23,
  onClick:undefined,
}
