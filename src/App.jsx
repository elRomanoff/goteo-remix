import React, {useContext, createContext, useEffect} from 'react'
import Container from "./components/Container"
import "./App.css"
import lyrics from "./lyrics"

export const Context = createContext({user: 1234}); 
const context = {
  context: 1,
  trappers: [1,0,0,0,0],
  prendas: [1,0,0,0,0],
  lyrics: "ME PUSE LAS GUCCI <br/> CON UN SHORT DE NIKE"
}


export default function App({referencia}) {

  const [data, setData] = React.useState(context)
  const dataRef = React.useRef(data)
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


const AppClassName = data.context === 1 ? "App App__main_screen" : "App App__inventory"


function tiempo(){
  console.log(referencia.current.currentTime)
}


  return  (
    <Context.Provider value={data}>
      <div className={AppClassName}>
        <Container/>
      </div>    
      <button onClick={arrancarTodo}> dale!</button>
      <button onClick={tiempo}> asdas!</button>

    </Context.Provider>

  )

}
