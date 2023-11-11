import '../assets/global.css'
import MultipleLineCode from './MultipleLineCode'

const MultipleLine = ({ text,code, isAnswer = false }) => {
  return (
    <>    
    {text &&    
    text.map(line => {
      return (<p key={crypto.randomUUID()} className={isAnswer ? 'primary-p color-white' : 'primary-p'}>{line}</p>)
    }) 
    }
    {code &&
    <MultipleLineCode code={code} isAnswer={isAnswer} /> 
    }
    </>
  )
}

export default MultipleLine
