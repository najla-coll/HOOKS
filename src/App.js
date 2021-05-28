import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import MoviesCard from './MoviesCard'
import {Data}  from './Data'
import AddMovie from './AddMovie'
import Filter from './Filter'

const App = () => {
	const [movies, setMovies] = useState(Data);
	const  Add = (newMovie) =>{
            setMovies([...movies,newMovie])
	}
	const[search,setSearch] = useState(' ');

   

	return (
		     
		<>
			     <div className='navbar'>
			     <AddMovie   Add={Add}/>
				 <Filter   setSearch={setSearch}  />
				 </div>
				 <MoviesCard movie={movies}  search={search}  />
				
				 
				
			
		</>
	);
};

export default App;