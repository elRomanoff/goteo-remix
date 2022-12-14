import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import goteo from "./media/goteo.mp3"

function Main() {

  const miReferencia = React.useRef()

  return (
    <>
    <App referencia = {miReferencia}/>
      <audio 
        src={goteo}
        controls
        ref={miReferencia}
        hidden
      />
    </>
  ) 
}


ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
