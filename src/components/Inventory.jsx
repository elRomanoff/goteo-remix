import React from 'react'
import "./styles/Inventory.css"


export default function Inventory() {
  return (
    <div className="inventory-middle">
      <div className="mid--inventory box">
        <div className="inventory--column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="inventory--column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="mid-music box"></div>
    </div>
  )
}
