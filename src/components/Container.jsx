import React, {useContext} from 'react'
import {Context} from "../App"
import "./styles/Container.css"
import "./styles/header.css"
import Trapper from "./Trapper"

import Description from "./Description"
import Inventory from "./Inventory"
import Stats from "./Stats"

export default function Container() {
  
  const context = useContext(Context)

  return context.context === 1 ? (
    <div className="container container__main_screen">
        <div className="header">
          <div className="header__song">
                      <div className="header__song--title"><b>GOTEO&nbsp;&nbsp;RMX</b></div>
                      <div className="header__song--bottom">

                      </div>
                  </div>
                  <div className="header__lyrics lyrics" dangerouslySetInnerHTML={{__html: context.lyrics}}></div>
          </div>
        <h1 className="select">SELECT YOUR TRAPPER</h1>
        <div className="trappers">
          <Trapper name="duko" active={context.trappers[0]} />
          <Trapper name="cro" active={context.trappers[1]} />
          <Trapper name="ronny" active={context.trappers[2]} />
          <Trapper name="pablo" active={context.trappers[3]} />
          <Trapper name="capo" active={context.trappers[4]} />
        </div>
    </div>
  ) 
  :
  (
    <div className="container container__inventory">
      <Description/>
      <Inventory/>
      <Stats/>
    </div>
  )
}
