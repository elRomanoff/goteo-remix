import React from 'react'

import duki from "../media/img/duki-animado2.gif"
import cro from "../media/img/cro-animado2.gif"
import ronny from "../media/img/ronny-animado2.gif"
import pablo from "../media/img/pablo-animado2.gif"
import capo from "../media/img/capo-animado2.gif"

import {Context} from "../App"


export default function StatsSinger() {

    const context = React.useContext(Context);

    if(context.trappers[0]) return(
        <>
            <img src={duki} alt="" className="duki-animado2 anima2"></img>
        </>
    )
    else if(context.trappers[1]) return(
        <>
            <img src={cro} alt="" className="cro-animado2 anima2"></img>
        </>
    )
    else if(context.trappers[2]) return(
        <>
            <img src={ronny} alt="" className="ronny-animado2 anima2"></img>
        </>
    )
    else if(context.trappers[3]) return(
        <>
            <img src={pablo} alt="" className="pablo-animado2 anima2"></img>
        </>
    )
    else if(context.trappers[4]) return(
        <>
            <img src={capo} alt="" className="capo-animado2 anima2"></img>
        </>
    )
  

}
