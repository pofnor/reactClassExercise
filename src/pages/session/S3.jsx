import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S3 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '3')
    })}/>
  )
}

export default S3