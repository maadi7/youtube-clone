import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core'

const Videolist = ({video, selected}) => {
  return (
      <>
      <Grid item xs={12}>
          <Paper style={{ display:'flex',cursor:"pointer", flexDirection:"column" }} onClick={() =>{selected(video)}} >
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{ marginTop:"20px"}} />
            <Typography variant='subtitle1' >
                {video.snippet.title}
            </Typography>
          </Paper>
      </Grid>
      
      </>
  );
};

export default Videolist;
