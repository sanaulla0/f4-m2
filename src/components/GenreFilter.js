import React from 'react';
import './GenerFilter.css';
const GenreFilter = (props) => {

 const genres = props.genres;
 const handlegener = (item)=>{
      console.log(`filterd By ${item}`);
 }

  return (
    <div className='filter'>
       <h2> Filter by Genre </h2>
      {genres.map((item,index)=>(
          <button className='btn' key={index} onClick={()=>handlegener(item)}>{item}</button>
      ))}

    </div>
  )
}

export default GenreFilter;