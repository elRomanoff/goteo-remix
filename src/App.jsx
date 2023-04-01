import React, {useContext, createContext, useEffect} from 'react'
import Container from "./components/Container"
import "./App.css"
import lyrics from "./lyrics"
import video from "./media/goteo-video.mp4"

export const Context = createContext({user: 1234}); 
const context = {
  context: 1,
  trappers: [1,0,0,0,0],
  prendas: [1,0,0,0,0],
  lyrics: "solamente siento que me va a atrapar lento la muerte"
}


export default function App({referencia}) {

  const [data, setData] = React.useState(context)
  const dataRef = React.useRef(data)

  const videoRef = React.useRef(null)

  dataRef.current = data


  function arrancarTodo(){
    referencia.current.play()

    lyrics.forEach(element => {
      setTimeout(() => {
        
        const newData = {
          context: dataRef.current.context,
          trappers: dataRef.current.trappers,
          lyrics: dataRef.current.lyrics,
          prendas: dataRef.current.prendas
        }
        if(element.context) newData.context = element.context
        if(element.trappers) newData.trappers = element.trappers
        if(element.text) newData.lyrics = element.text
        if(element.prendas) newData.prendas = element.prendas
        setData(newData)
      }, element.time);
  
    });
  }


const AppClassName = getClass(data.context) 

function getClass(context){
  if(context === 1)  return "App App__main_screen"
  else if (context === 2) return "App App__inventory"
  else if (context === "luna") return "App App__luna"
}

function tiempo(){
  console.log(videoRef.current.currentTime * 1000) 
}


  return  (
    <Context.Provider value={data}>
      <div className={AppClassName}>
        <Container/>
      </div>    
      <button onClick={arrancarTodo}> dale!</button>

    </Context.Provider>

  )

}
