import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S8 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '8')
    })}/>
  )
}

export default S8