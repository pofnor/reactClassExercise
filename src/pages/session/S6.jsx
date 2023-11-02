import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S6 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '6')
    })}/>
  )
}

export default S6