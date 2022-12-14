import React, {useContext, createContext, useEffect} from 'react'
import Container from "./components/Container"
import "./App.css"
import lyrics from "./lyrics"

export const Context = createContext({user: 1234}); 
const context = {
  context: 0,
  trappers: [true,false,false,false,false],
  lyrics: "ME PUSE LAS GUCCI <br/> CON UN SHORT DE NIKE"
}


export default function App({referencia}) {

  const [data, setData] = React.useState(context)

  function arrancarTodo(){
    referencia.current.play()


    lyrics.forEach(element => {
      setTimeout(() => {
        console.log(data)

        const newData = {
          context: data.context,
          trappers: data.trappers,
          lyrics: data.lyrics
        }
        if(element.context) newData.context = element.context
        if(element.trappers) newData.trappers = element.trappers
        if(element.text) newData.lyrics = element.text
        setData(newData)
      }, element.time);
  
    });
  }


const AppClassName = data.context === 0 ? "App App__main_screen" : "App App__inventory"

  
  return  (
    <Context.Provider value={data}>
      <div className={AppClassName}>
        <Container/>
      </div>    
      <button onClick={arrancarTodo}> dale!</button>

    </Context.Provider>

  )

}
