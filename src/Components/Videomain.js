import React from 'react';
import { Typography, Paper } from '@material-ui/core'

const Videomain = ({ video }) => {

    if(!video) return <div>loading...</div>
    console.log(video)
    const src = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
      <>
       <Paper elevation={4} style={{height:'70vh'}}>
          <iframe title='video player' src={src} height='100%' width='100%' frameBorder="0"></iframe>
          <Typography variant='h4' >{video.snippet.title}-{video.snippet.channelTitle}</Typography>
          <Typography variant='subtitle1'>{video.snippet.description}</Typography>
       </Paper>


      </>
  );
};

export default Videomain;
