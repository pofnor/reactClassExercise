import { Link } from 'react-router-dom'
import '../assets/global.css'
import Exercise from './Exercise'

const SearchItem = ({ matchItems,searchShowAnswer }) => {
  return (
    <>
    {matchItems.map(exercise => {
      return (
        <Link key={crypto.randomUUID()}
          className="searchItem-link" to={'/session/' + exercise.session + '#' + exercise.question[0] }>
          <Exercise
          questionHeader={exercise.questionHeader}
          question={exercise.question}
          questionCode={exercise.questionCode}
          answerHeader={exercise.answerHeader}
          answer={exercise.answer}
          answerCode={exercise.answerCode}
          searchShowAnswer={searchShowAnswer} //for showing answer in search page
          />
        </Link>
      )
    })}
  </>
  )
}

export default SearchItem
