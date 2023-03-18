import React from 'react';
import './MovieList.css';
const MovieList = (props) => {
   
   const movies = props.movies;
    
  return (
    <div className='ta'>
     <table className='table' border={1}>
       <thead className='th'>
       <tr>
    <th>Title</th>
    <th>Gener</th>
    <th>Year</th>
    </tr>
       </thead>
       <tbody >
       {movies.map((item,index)=>(
           <tr key={index}>
             <td>{item.title}</td>
             <td>{item.genre}</td>
             <td>{item.year}</td>

           </tr>
  ))}

       </tbody>
    
     </table>
       
    </div>
  )
}

export default MovieList;