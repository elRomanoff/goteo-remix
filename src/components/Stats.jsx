import React from 'react'
import StatsSinger from "./StatsSinger"
import "./styles/Stats.css"



export default function Stats() {
  return (
    <div className="box main--right">
      <div className="right--title title box">
                    <span className="pixel">DUKI</span>
                    <span className="pixel">ARG / LVL 99</span>
                </div>
                <div className="right--stats box">
                    <div className="stats--skills pixel">
                       <p className="stats--title">SKILLS</p>
                       <div className="stats--names pixel stats--font">
                            FORREO: <br/>
                            CASHEO: <br/>
                            TRIP: <br/>
                            CHAIN: <br/>
                       </div>
                       <div className="stats--points pixel stats--font">
                            |||||||||||||||||||||||||||| 99 <br/>
                            |||||||||||||||||||||||||||| 99 <br/>
                            |||||||||||||||||||||||||||| 98 <br/>
                            |||||||||||||||||||||||||||| 99 <br/>
                        </div>
                    </div>
                    <div className="stats--basics pixel">
                        <p className="stats--title">STATS</p>
                    
                        <div className="stats--names pixel stats--font">
                            HTH: <br/>
                            ATT: <br/>
                            DEF: <br/>
                            STA: <br/>
                        </div>
                        <div className="stats--points pixel stats--font">
                            ||||||||||||||||| 99 <br/>
                            ||||||||||||||||| 99 <br/>
                            ||||||||||||||||| 98 <br/>
                            ||||||||||||||||| 99 <br/>
                        </div>
                    </div>
                </div>
                <div className="right--lyrics  box">
                    <StatsSinger/>
                    <div className="lyrics lyrics--box">
                        ME PUSE LAS GUCCI CON UN SHORT DE NIKE <br/> BUZO, CADENA, ESTOY QUE GOTEO
                    </div>
                </div>
    </div>
  )
}
