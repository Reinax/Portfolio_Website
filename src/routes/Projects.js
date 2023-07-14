import React from 'react'
import './Global.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
function Projects() {
  const itemData = [
    {
      img: 'https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/07/application-development.jpg',
      title: 'Weather Scraping Application',
      url: 'https://github.com/Reinax/WeatherApplication',
    },
    {
      img: 'https://atlassianblog.wpengine.com/wp-content/uploads/2021/09/migpod-443_agile-poker_blog-hero_email_540x256@2x.jpg',
      title: 'Word Guess Game',
      url: 'https://github.com/Reinax/PythonWordGuessGame',
    },
    {
      img: 'https://cdn-media-2.freecodecamp.org/w1280/5f9c9819740569d1a4ca1826.jpg',
      title: 'Random Number Generator',
      url: 'https://github.com/Reinax/RNGnumber',
    },
    {
      img: 'https://uploads-ssl.webflow.com/5fd55aec9b6ceba1eec9f9fd/61932c032e0a0173df6d2377_What%20is%20Web%20Scraping.jpg',
      title: 'Web Scraping with C#',
      url: 'https://github.com/Reinax/AgileApplication',
    },
    {
      img: 'https://www.boardgamehalv.com/wp-content/uploads/2021/12/Carcassonne3rdEditionFeaturesNewArtwork.jpg',
      title: 'Simulation of Carcassonne',
      url: 'https://github.com/Reinax/Carcassonne',
    },
    {
      img: 'https://e1.pxfuel.com/desktop-wallpaper/1016/49/desktop-wallpaper-react-nodejs-express-mongodb-mern-stack.jpg',
      title: 'Mern Full Stack Application',
      url: 'https://github.com/Reinax/Mern-fullstack',
    },
  ]
  return (
    <div className='Container'>
    <ImageList className='Projectlist' sx={{ width: 1500, height: 450 }} cols={3} rowHeight={200} gap={1}>
      {itemData.map((item) => (
        <a href={item.url}>
        <ImageListItem key={item.img} className='ProjectImages'>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
        </a>
      ))}
    </ImageList>
    </div>
  );
}

export default Projects
