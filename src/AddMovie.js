import React ,{useState} from 'react'

import {Modal , Button} from 'react-bootstrap'


const AddMovie = ({Add}) => {
    const [show, setShow] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie ,setNewMovie] = useState( {
      id:Math.random(),
      title:""  ,
      description: "",
      posterURL :"" ,
      rating : ""
      }
    );
   
    const {title , description ,postreURL ,rating} = newMovie
    const change = (e)=>{
           setNewMovie({...newMovie ,[e.target.name]:e.target.value})
    }
  
    return (
        <div className='nav'>
            <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Your Favorite Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
              
              <label>posterURL</label>
              <br/>
              <input    placeholder=   'enter url'   type ='text'  name="posterURL"  onChange={change}  />
              <br/>
              <label>Title</label>
              <br/>
              <input    placeholder=  'choose title'   type ='text'  name='title' onChange={change} />
              <br/>
              <label>Description</label>
              <br/>
              <input    placeholder=     'add description' type ='text'    name='description' onChange={change} />
              <br/>
               <label>Rating</label>
               <br/>
              <input    placeholder=      'add rating' type ='text'    name='rating' onChange={change} />
              </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={()=> Add(newMovie)} ondblclick= {useState(newMovie)}
   >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
    
}

export default AddMovie

