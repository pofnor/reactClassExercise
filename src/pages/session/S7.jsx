import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S7 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '7')
    })}/>
  )
}

export default S7