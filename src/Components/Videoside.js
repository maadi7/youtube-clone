import React from 'react';
import { Grid } from '@material-ui/core'
import Videolist from './Videolist';

const Videoside = ({ videolist, select }) => {
    if(videolist.isEmpty ) return <div>hello</div>;


    const lov = videolist.map((videos, id) =>{
          return (<Videolist  selected = {select} key={id} video={videos}  />)
    });
    { console.log(lov)}
  return (
      <>
      <Grid container spacing={8}>
         { console.log(lov)}
           {lov} 
      </Grid>
   
      </>
  );
};

export default Videoside;
