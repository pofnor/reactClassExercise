import '../assets/global.css'

const MultipleLine = ({ code, isAnswer = false }) => {
  return (
    <>
    {code.map(line => {
      return (<p key={crypto.randomUUID()} className={isAnswer ? 'primary-p color-white' : 'primary-p'}>{line}</p>)
    })
    }
    </>
  )
}

export default MultipleLine
