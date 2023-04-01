import React, {useContext} from 'react'
import "./styles/Inventory.css"
import {Context} from "../App"
import Prendas from "./Prendas"

export default function Inventory() {

  const context = useContext(Context)

  return (
    <div className="inventory-middle">
      <div className="mid--inventory box">
        
          <Prendas active={context.prendas[0]} imgUrl={0} ></Prendas>
          <Prendas active={context.prendas[1]} imgUrl={1} ></Prendas>
          <Prendas active={context.prendas[2]} imgUrl={2} ></Prendas>
          <Prendas active={context.prendas[3]} imgUrl={3} ></Prendas>
          <Prendas active={context.prendas[4]} imgUrl={4} ></Prendas>
          <Prendas></Prendas>
          <Prendas></Prendas>
          <Prendas></Prendas>
        
      </div>
      <div className="mid-music box"></div>
    </div>
  )
}
