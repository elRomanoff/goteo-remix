import React, {useContext} from 'react'
import "./styles/Description.css"
import {Context} from "../App"


import duki from "../media/img/duki.png"
import cro from "../media/img/cro.png"
import ronny from "../media/img/ronny.png"
import pablo from "../media/img/pablo.png"
import capo from "../media/img/capo.png"

//inv duki
import dukiZapas from "../media/img/duki-guccis.png"
import dukiShort from "../media/img/duki-short.png"
import dukiBuzo from "../media/img/duki-buzo.png"
import dukiCadena from "../media/img/duki-cadena.png"
import dukiGoteo from "../media/img/duki-goteo.png"

//inv cro
import croZapas from "../media/img/cro-llantas.png"
import croShort from "../media/img/cro-short.png"
import croBuzo from "../media/img/cro-buzo.png"
import croLentes from "../media/img/cro-lentes.png"
import croPucho from "../media/img/cro-pucho.png"

//inv ronny
import ronnyZapas from "../media/img/ronny-botas.png"
import ronnyPantalon from "../media/img/ronny-pantalon.png"
import ronnyCampera from "../media/img/ronny-campera.png"
import ronnyLentes from "../media/img/ronny-lentes.png"

//inv pablo
import pabloZapas from "../media/img/pablo-llantas.png"
import pabloShort from "../media/img/pablo-pantalon.png"
import pabloKevlar from "../media/img/pablo-kevlar.png"
import pabloCadena from "../media/img/pablo-cadena.png"
import pabloBandana from "../media/img/pablo-bandana.png"

//inv capo
import capoZapas from "../media/img/capo-llantas.png"
import capoPantalon from "../media/img/capo-pantalon.png"
import capoChaqueta from "../media/img/capo-chaqueta.png"
import capoLentes from "../media/img/capo-lentes.png"
import capoPorro from "../media/img/capo-porro.png"

const trappers = [duki, cro, ronny, pablo, capo]
const prendas = [[dukiZapas, dukiShort, dukiBuzo, dukiCadena, dukiGoteo], [croZapas,croShort,croBuzo,croLentes,croPucho], [ronnyZapas, ronnyPantalon, ronnyCampera, ronnyLentes], [pabloZapas, pabloShort, pabloKevlar, pabloCadena, pabloBandana], [capoZapas,capoPantalon ,capoChaqueta,capoLentes,capoPorro]]


export default function Description() {

  let trapper = 0
  let prenda = 0

  const context = useContext(Context)

  if(context.trappers) context.trappers.forEach((x,i) =>{ if (x) trapper = i})
  if(context.prendas) context.prendas.forEach((x,i) =>{ if (x) prenda = i})



  return (
    <div className="box character-description">
        <img src={trappers[trapper]} style={{opacity: .5}} className="items-absolute" alt=""></img>
        <img src={prendas[trapper][prenda]} className="items-absolute" alt=""></img>
    </div>
  )
}
