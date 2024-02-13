import { useState } from "react"

function App() {
  const phrases = ["No", "Layyy?", "BBb 7aram ana?", "Pwetty pleasee?", "BBBB su beekk", "Hauf", "Wat?", "BBB kbeseee YESS"];

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => setNoCount((c)=>  c+1)

  let index = 0;

  const getNoText = ()=> { 
    return phrases[Math.min(noCount, phrases.length-1)];
  };

  return (
    <div className="container">
      {yesPressed? (
        <>
          <div className="img-container">
            <img src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif"
              alt="Bears Kissing" />
          </div>
          <div className="text">BURNIIII MINE</div>
        </>
      ):
      (
        <>
          <div className="img-container">
            <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                 alt="Cute bear jumping with roses" />
          </div>
          
          <div className="text">Will You Be My Valentine?</div>
          <div className="btn-container">
            <button className="yes-btn"
            style={{fontSize: yesButtonSize}}
            onClick={()=>setYesPressed(true)} >YES!</button>

            <button className="no-btn"
            onClick={handleNoClick}
            >
              {getNoText()}
            </button>
          </div>
        </>
      )}

    </div>
  )
}

export default App
