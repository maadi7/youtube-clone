import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core'

const SearchBar = ({ sumbit }) => {

    const [item, setItem] = useState('');  
  
    const handleChange = (e) => { setItem(e.target.value)
    console.log(item)
    }
    
    const sumbited = (e) =>{
        console.log(item)
        sumbit(item);
        
        e.preventDefault();
    }
    
  return (
      
      <>
      <Paper elevation={8}>
          <form onSubmit={sumbited} >
              <TextField fullWidth label='search...' onChange={handleChange} ></TextField>
          </form>
      </Paper>

      </>
  )
};

export default SearchBar;
