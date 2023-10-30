import { Link } from "react-router-dom";
import './SearchItem.css'

const SearchItem = ({matchItems}) => {  
  return (
    <>
    {matchItems.map(item => {
      return(
        <li key={item.id}>
          <div className='searchItem'>
            <Link to={item.link} className='link'>
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