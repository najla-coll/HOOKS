import React from 'react';
import MovisList from './MovisList';


const MovieCard = ({movie,search}) => {
	return (
		

   <>
       <div className ='list'>
		  	{movie.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()) || e.rating == search).map((el) => (
				 <MovisList  el={el}    />
					  
        
				))
       
		     }
        </div>
      </>
		
	)
}

export default MovieCard
