import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S4 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '4')
    })}/>
  )
}

export default S4