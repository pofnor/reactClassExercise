import { useState } from 'react'
import '../assets/global.css'
import MultipleLine from './MultipleLine'

const Exercise = (props) => {

  const [showAnswer,setShowAnswer] = useState(false)

  // if from search page, show the answer
  if(props.searchShowAnswer && !showAnswer){
    setShowAnswer(true)
  }

  return (    
    <article id={props?.question} onClick={()=>setShowAnswer(true)} className="primary-container">
      {(props.question || props.questionHeader || props.questionCode)
        && (
        <div className="primary-question">
          <h1 className='primary-h1'>{props.questionHeader}</h1>
          <MultipleLine text={props.question} code={props.questionCode}/>
        </div>
          )
      }

      {(props.answer || props.answerHeader || props.answerCode)
        && (
        <div className={showAnswer ? "display-block primary-answer" : "display-none"  }>
          <h1 className='primary-h1 color-lightgray'>{props.answerHeader}</h1>
          <MultipleLine isAnswer={true} text={props.answer} code={props.answerCode}/>
      </div>
          )
      }
    </article>
  )
}

export default Exercise
