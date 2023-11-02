import React from 'react'
import Exercises from '../../components/Exercises'
import { sessions as exercises } from '../../data/sessionDB'

const S9 = () => {
  return (
    <Exercises exercises={exercises.filter(session => {
      return (session.session === '9')
    })}/>
  )
}

export default S9
