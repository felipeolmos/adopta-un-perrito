import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, name, desc, color, raza}) =>{
    return(
        <div className='card'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
                <div className="cardtags">
                <Tags 
              color = {color}
              raza = {raza}
              />
              </div>
              </Card.Body>
              
            </Card>
            
        </div>
        
    )
};
export default MyCard;