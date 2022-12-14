import React from 'react'
import goteo from "../media/goteo.mp3"

export default function Audio() {
  return (
    <audio src={goteo} autoPlay={true}></audio>
  )
}
// opcional este componente