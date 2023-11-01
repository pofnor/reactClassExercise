import '../assets/global.css'
import MultipleLine from './MultipleLine'

const Exercise = (probs) => {

  return (
    <article className="primary-container">
      <div className="primary-question">
        <h1 className='primary-h1'>{probs.questionHeader}</h1>
        <MultipleLine code={probs.question} />
      </div>      
      <div className="primary-answer">
        <h1 className='primary-h1 color-lightgray'>{probs.answerHeader}</h1>
        <MultipleLine isAnswer={true} code={probs.answer} />
      </div>
    </article>
  )
}

export default Exercise