import React,{useContext} from 'react'
import StatsSinger from "./StatsSinger"
import "./styles/Stats.css"

import {Context} from "../App"

const namesArr = [
    {
        name: "duki",
        country: "arg",
        forreo: 98,
        casheo: 97,
        trip: 94,
        chain: 95,
        hp: 82,
        att: 88,
        def: 92,
        sta: 79
    },
    {
        name: "c.r.o",
        country: "arg",
        forreo: 97,
        casheo: 92,
        trip: 99,
        chain: 90,
        hp: 86,
        att: 92,
        def: 98,
        sta: 81
    },
    {
        name: "ronny j",
        country: "usa",
        forreo: 95,
        casheo: 99,
        trip: 92,
        chain: 97,
        hp: 91,
        att: 91,
        def: 92,
        sta: 90
    },
    {
        name: "pablo chill-e",
        country: "chi",
        forreo: 97,
        casheo: 93,
        trip: 90,
        chain: 94,
        hp: 85,
        att: 95,
        def: 89,
        sta: 80
    },
    {
        name: "capo plaza",
        country: "ita",
        forreo: 96,
        casheo: 97,
        trip: 86,
        chain: 92,
        hp: 95,
        att: 89,
        def: 92,
        sta: 92
    }
]

export default function Stats() {

    const context = useContext(Context)
    const data = namesArr[context.trappers.findIndex(x => x)]


  return (
    <div className="box main--right">
      <div className="right--title title box">
                    <span className="pixel">{data.name}</span>
                    <span className="pixel">{data.country} / LVL 99</span>
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
                            |||||||||||||||||||||||||||| {data.forreo} <br/>
                            |||||||||||||||||||||||||||| {data.casheo} <br/>
                            |||||||||||||||||||||||||||| {data.trip} <br/>
                            |||||||||||||||||||||||||||| {data.chain} <br/>
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
                            ||||||||||||||||| {data.hp} <br/>
                            ||||||||||||||||| {data.att} <br/>
                            ||||||||||||||||| {data.def} <br/>
                            ||||||||||||||||| {data.sta} <br/>
                        </div>
                    </div>
                </div>
                <div className="right--lyrics  box">
                    <StatsSinger/>
                    <div className="lyrics lyrics--box" dangerouslySetInnerHTML={{__html: context.lyrics}}></div>
                </div>
    </div>
  )
}
