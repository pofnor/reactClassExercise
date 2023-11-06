import { useState } from 'react'
import '../assets/global.css'
import MultipleLine from './MultipleLine'

const Exercise = (probs) => {

  const [showAnswer,setShowAnswer] = useState(false)

  // if from search page, show the answer
  if(probs.isSearch && !showAnswer){
    setShowAnswer(true)
  }

  return (
    <article onClick={()=>setShowAnswer(!showAnswer)} className="primary-container">
      {probs.question
        ? (
        <div className="primary-question">
          <h1 className='primary-h1'>{probs.questionHeader}</h1>
          <MultipleLine code={probs.question}/>
        </div>
          )
        : (<></>)}

      {probs.answer
        ? (
        <div className={showAnswer ? "display-block primary-answer" : "display-none"  }>
          <h1 className='primary-h1 color-lightgray'>{probs.answerHeader}</h1>
          <MultipleLine isAnswer={true} code={probs.answer}/>
      </div>
          )
        : (<></>)}

    </article>
  )
}

export default Exercise
