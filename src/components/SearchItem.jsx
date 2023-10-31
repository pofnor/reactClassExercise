import { Link } from "react-router-dom";
import "../assets/global.css"

const SearchItem = ({matchItems}) => {  
  return (
    <>
    {matchItems.map(item => {
      return(
        <li key={item.id}>
          <div className='primary-container'>
            <Link to={item.link} className='searchItem-link'>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </Link>
          </div>
        </li>
      )            
    })}
  </>
  )
}

export default SearchItem