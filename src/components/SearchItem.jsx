import { Link } from 'react-router-dom'
import '../assets/global.css'
import Exercise from './Exercise'

const SearchItem = ({ matchItems,searchShowAnswer }) => {
  return (
    <>
    {matchItems.map(exercise => {
      return (
        <Link key={crypto.randomUUID()}
          className="searchItem-link" 
          to={
            '/session/' +
            exercise.session +
            '#' + 
            exercise.id }>
          <Exercise          
          question={exercise.question}          
          answer={exercise.answer}
          id={exercise.id}
          searchShowAnswer={searchShowAnswer} //for showing answer in search page
          />
        </Link>
      )
    })}
  </>
  )
}

export default SearchItem
