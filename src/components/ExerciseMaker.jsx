import '../assets/global.css'

const ExerciseMaker = ({item,isAnswer=false}) => {
  return (
    <>
    {(item.header) && item.header.map(line => {
      return  (<h1 
                key={crypto.randomUUID()}
                className={isAnswer ? 'primary-h1 h1-answer' : 'primary-h1'}>
                {line}
              </h1>)
      })
    }
    {(item.text) && item.text.map(line => {
      return  (<p 
                key={crypto.randomUUID()} 
                className={isAnswer ? 'primary-p color-white' : 'primary-p'}>
                {line}
              </p>)
      }) 
    }
    {(item.code) && (
      <pre className='primary-answer-code'>
        <span className='primary-answer-code-label'>CODE</span>
        {item.code.map(line => {
          return  (<p 
                    key={crypto.randomUUID()} 
                    className={isAnswer ? 'primary-p color-white' : 'primary-p'}>
                    {line}
                  </p>)
        })}
      </pre>)
    }
    {(item.image) && item.image.map(line => {
      return  (<img
                key={crypto.randomUUID()} 
                src={"/" + line} 
                alt={line} 
              />)
      })
    }
    </>    
  )
}

export default ExerciseMaker