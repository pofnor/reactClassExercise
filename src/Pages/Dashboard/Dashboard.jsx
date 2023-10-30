import Carousel from 'react-bootstrap/Carousel';
import DB from '../../Constants/carouselDB'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <header>
      <Carousel>
        {
          DB.map(carousel=>{
            return(
              <Carousel.Item key={carousel.id}>
                <img style={{width:"100%"}}
                  src={carousel.image}
                  alt={"slide" + carousel.id}
                />
                <Carousel.Caption>
                  <h2>{carousel.title}</h2>
                  <p>{carousel.description}</p>
                  <Link style={{textDecoration:"none",color:"whitesmoke",fontSize:"24px"}} to={carousel.link}>Read More</Link>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }      
      </Carousel>
    </header>
  )
}

export default Dashboard
