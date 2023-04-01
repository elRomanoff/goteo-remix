import React, {useContext} from 'react'
import {Context} from "../App"

//inv duki
import dukiZapas from "../media/img/prenda-duki-gucci.png"
import dukiShort from "../media/img/prenda-duki-short.png"
import dukiBuzo from "../media/img/prenda-duki-buzo.png"
import dukiCadena from "../media/img/prenda-duki-cadena.png"
import dukiGoteo from "../media/img/prenda-duki-goteo.png"

//inv cro
import croZapas from "../media/img/prenda-cro-llantas.png"
import croShort from "../media/img/prenda-cro-short.png"
import croBuzo from "../media/img/prenda-cro-buzo.png"
import croLentes from "../media/img/prenda-cro-lentes.png"
import croPucho from "../media/img/prenda-cro-pucho.png"

//inv ronny
import ronnyZapas from "../media/img/prenda-ronny-botas.png"
import ronnyPantalon from "../media/img/prenda-ronny-pantalon.png"
import ronnyCampera from "../media/img/prenda-ronny-campera.png"
import ronnyLentes from "../media/img/prenda-ronny-lentes.png"

//inv pablo
import pabloZapas from "../media/img/prenda-pablo-llantas.png"
import pabloShort from "../media/img/prenda-pablo-pantalon.png"
import pabloKevlar from "../media/img/prenda-pablo-kevlar.png"
import pabloCadena from "../media/img/prenda-pablo-cadena.png"
import pabloBandana from "../media/img/prenda-pablo-bandana.png"

//inv capo
import capoZapas from "../media/img/prenda-capo-llantas.png"
import capoPantalon from "../media/img/prenda-capo-pantalon.png"
import capoChaqueta from "../media/img/prenda-capo-chaqueta.png"
import capoLentes from "../media/img/prenda-capo-lentes.png"
import capoPorro from "../media/img/prenda-capo-porro.png"

const duki = [dukiZapas, dukiShort, dukiBuzo, dukiCadena, dukiGoteo]
const cro = [croZapas, croShort, croBuzo, croLentes, croPucho]
const ronny = [ ronnyZapas, ronnyPantalon, ronnyCampera, ronnyLentes]
const pablo = [pabloZapas, pabloShort, pabloKevlar, pabloCadena, pabloBandana]
const capo = [capoZapas, capoPantalon, capoChaqueta, capoLentes, capoPorro]

const trappers = [duki,cro,ronny,pablo,capo]

export default function Prendas({active, imgUrl}) {

  const context = useContext(Context)
    
  return active ? (
    <div className="box">
        <img src={trappers[context.trappers.indexOf(1)][imgUrl]} alt="" ></img>
    </div>
  ) : (
    <div className="box">
        <img src={trappers[context.trappers.indexOf(1)][imgUrl]} alt="" className="img_disabled"></img>
    </div>
  )
}
