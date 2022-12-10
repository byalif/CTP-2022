import React from 'react'
import Img from '../Img'


export  function Avatar(props) {
  return <div className="avatar" ><Img alt="Avatar" src={`${props.avatar}`} 
  defaultSrc={require('../assets/default_avatar.jpg')}/></div>
  
}
