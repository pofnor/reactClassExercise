import { Link } from 'react-router-dom'
import '../assets/global.css'
import Exercise from './Exercise'

const SearchItem = ({ matchItems }) => {
  return (
    <>
    {matchItems.map(exercise => {
      return (
        <Link key={crypto.randomUUID()}
          className="searchItem-link" to={'/session/' + exercise.session}>
          <Exercise
          questionHeader={exercise.questionHeader}
          question={exercise.question}
          answerHeader={exercise.answerHeader}
          answer={exercise.answer}
          isSearch={true} //for showing answer in search page
          />
        </Link>
      )
    })}
  </>
  )
}

export default SearchItem
