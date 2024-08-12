import logo from './logo.svg';
import './App.css';
import React from 'react';
import Editor from "@monaco-editor/react";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [HTML, setHTML] = useLocalStorage("HTML","")
  const [CSS, setCSS] = useLocalStorage("CSS","")
  const [JS, setJS] = useLocalStorage("JS","")

  const [active, setActive] = React.useState("HTML")

  const IFRAMECODE = `
  <html>
    <head>
      <style>
        ${CSS}
      </style>
    </head>

    <body>
      ${HTML}

      <script> 
        ${JS}
      </script>
    </body>

  </html>
  `

  return (
    <div style={{ padding: "20px"}}>
      <h1>ICE Editor</h1>
      <div style={{ display:"flex", border:"1px solid white" }}>
        {/* editor */}
        <div style={{width:"100%"}}>
          <button className="btn" onClick={()=>setActive("HTML")} style={{color:active==="HTML"?"red":"white"}}>HTML</button>
          <button className="btn" onClick={()=>setActive("CSS")} style={{color:active==="CSS"?"red":"white"}}>CSS</button>
          <button className="btn" onClick={()=>setActive("JS")} style={{color:active==="JS"?"red":"white"}}>JS</button>

          {active==="HTML" && 
          <Editor
     height="60vh"
     defaultLanguage="html"
     defaultValue={HTML}
     onChange={(value,event)=>setHTML(value)}
   />
          // <textarea value={HTML} onChange={event=>setHTML(event.currentTarget.value)}></textarea>
          
          }
          {active==="CSS" && 
          <Editor
          height="60vh"
          defaultLanguage="css"
          defaultValue={CSS}
          onChange={(value,event)=>setCSS(value)}
        />

          // <textarea value={CSS}  onChange={event=>setCSS(event.currentTarget.value)}></textarea> 
          
          }
          {active==="JS" && 
          <Editor
          height="60vh"
          defaultLanguage="javascript"
          defaultValue={JS}
          onChange={(value,event)=>setJS(value)}
        />
          // <textarea value={JS} onChange={event=>setJS(event.currentTarget.value)}></textarea>
          }


        </div>

        {/* result */}
        <div style={{width:"100%", height:"66vh"}}>
        <iframe height={"100%"} width={"100%"} srcDoc={IFRAMECODE} />

        </div>
      </div>
    </div>
  );
}

export default App;
