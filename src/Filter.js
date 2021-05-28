import React from 'react'


const Filter = ({setSearch} )=> {
  
    

    return (
        <div className='filter'> 
           
            <input  type="text" placeholder='search'  onChange={(e) =>
          setSearch(e.target.value)
    } />
        </div>
    )
}

export default Filter
