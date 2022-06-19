import * as React from 'react';
import { makeStyles } from "@mui/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CardFreeBook() {
    const useStyles = makeStyles(theme => ({
        // img:{
        //     width:'100px'
        // }

    }))
    const classes = useStyles();
  return (
    
    <ImageList sx={{ width: '200%', height: '55vh', border:' 1px solid green' }} rowHeight={164} variant="woven" cols={3} gap={10}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.baltimoreschild.com/wp-content/uploads/2017/07/kids_yrca_books.jpg',
    title: 'Bed',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/bring-gift-open-book-white-background-vector-illustration-160532703.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://i.pinimg.com/originals/b9/bc/01/b9bc01fa20ccc0dae2eb77bfd071d14e.jpg',
    title: 'Sink',
  },
];