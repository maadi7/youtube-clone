import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './Components/SearchBar';
import Videoside from './Components/Videoside';
import youtube from './youtube';
import Videomain from './Components/Videomain';


const App = () => {

    const [data, setData] = useState({
        video:'',
        list:[]
       });

    const sumbit = async (search) =>{
         const res = await youtube.get('search',{
            params: {
                part:'snippet',
                maxResult : 5,
                key: 'AIzaSyDK6UrFvU8M4kr207-GtJjBgCEo1N8f3YU',
                q: search,
            }
         })
         console.log(res.data.items);
         setData({video: res.data.items[0], list: res.data.items});
         
     }
     console.log(data);

     const onVideoSelect = (videos) =>{
         setData({...data, video: videos})
     }
     

     
  return (
      <>
      <Grid container justifyContent='center'>
        <Grid item xs={11}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                   <SearchBar sumbit={sumbit}/>
                </Grid>
                <Grid item xs={8}>
                   <Videomain video={data.video} />
                </Grid>
                <Grid item xs={4}>
                   <Videoside videolist={data.list} select= {onVideoSelect}/>
                </Grid>
            </Grid>
         </Grid>
      </Grid>
      </> 
  )
};

export default App;
