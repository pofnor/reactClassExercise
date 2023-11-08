import '../assets/global.css'

const MultipleLineCode = ({ code, isAnswer = false }) => {
  return (
    <pre className='primary-answer-code'>
      <span className='primary-answer-code-label'>CODE</span>
    {code.map(line => {
      return (<p key={crypto.randomUUID()} style={{fontFamily:"monospace"}} className={isAnswer ? 'primary-p color-white' : 'primary-p'}>{line}</p>)
    })
    }
    </pre>
  )
}

export default MultipleLineCode
