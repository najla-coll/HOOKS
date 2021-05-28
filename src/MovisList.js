import React from 'react'

import {Card , ListGroup ,ListGroupItem} from 'react-bootstrap'

const MovisList = ({el}) => {
    return (
        <div>
                <Card style={{ width: '18rem' }} >
          
              <Card.Img variant="top" src= {el.posterURL}  alt =''  width='150px' height ='260px'   />
          
              <Card.Body   height='300px'>
               <Card.Title  >{el.title}</Card.Title>
               <Card.Text  >
                {el.description}
              </Card.Text>
              </Card.Body>
             <ListGroup className="list-group-flush" >
            <ListGroupItem >{el.rating}</ListGroupItem>
 
       </ListGroup>

       </Card>
        </div>
    )
}

export default MovisList
