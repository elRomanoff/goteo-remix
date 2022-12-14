import React from 'react'
import "./styles/Trapper.css"
import duki from "../media/img/duki-animado.gif"
import dukiShadow from "../media/img/duki-blue.png"

import cro from "../media/img/cro-animado.gif"
import croShadow from "../media/img/cro-yellow.png"

import ronny from "../media/img/ronny-animado.gif"
import ronnyShadow from "../media/img/ronny-pink.png"

import pablo from "../media/img/pablo-animado.gif"
import pabloShadow from "../media/img/pablo-orange.png"

import capo from "../media/img/capo-animado.gif"
import capoShadow from "../media/img/capo-green.png"

const objImg = {
  duko: [duki, dukiShadow],
  cro: [cro, croShadow],
  ronny: [ronny, ronnyShadow],
  pablo: [pablo, pabloShadow],
  capo: [capo, capoShadow]
}

export default function Trapper({name, active}) {
  return active ? (
    <div className="trapper-box">
        <img src={objImg[`${name}`][0]} alt="" className={`animated-trapper animated-trapper__${name}`}></img>
        <div className={`globo ${name}`}><div><b>{name[0]}</b>{name.substring(1)} </div></div>
        <div className="trapper-bg"></div>
    </div>
  ) : (
    <div className="trapper-box">
      <img src={objImg[`${name}`][1]} alt="" className={`animated-trapper animated-trapper__${name}`}></img>
      <div className="trapper-bg"></div>
    </div>
  )

}
