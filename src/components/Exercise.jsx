import { useState } from 'react'
import '../assets/global.css'
import MultipleLine from './MultipleLine'

const Exercise = (probs) => {

  const [showAnswer,setShowAnswer] = useState(false)

  // if from search page, show the answer
  if(probs.searchShowAnswer && !showAnswer){
    setShowAnswer(true)
  }

  return (
    <article id={probs.question[0]} onClick={()=>setShowAnswer(true)} className="primary-container"> 
      {probs.question
        ? (
        <div className="primary-question">
          <h1 className='primary-h1'>{probs.questionHeader}</h1>
          <MultipleLine text={probs.question} code={probs.questionCode}/>
        </div>
          )
        : (<></>)}

      {probs.answer
        ? (
        <div className={showAnswer ? "display-block primary-answer" : "display-none"  }>
          <h1 className='primary-h1 color-lightgray'>{probs.answerHeader}</h1>
          <MultipleLine isAnswer={true} text={probs.answer} code={probs.answerCode}/>
      </div>
          )
        : (<></>)}

    </article>
  )
}

export default Exercise
