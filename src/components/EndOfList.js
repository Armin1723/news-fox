import React from 'react'
import Emoji from './EndOfListEmoji.png'

function EndOfList() {
  return (
    <div className='text-center'>
      <img src={Emoji} alt="You have Seen it All!! Yay" style={{width: "10%", height:"10%"}}/>
    </div>
  )
}

export default EndOfList
