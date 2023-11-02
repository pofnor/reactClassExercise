import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S1 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '1')
    })}/>
  )
}

export default S1