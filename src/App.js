import React, {useState, useEffect} from 'react'
import './App.css';
//import ReactPlayer from 'react-player';

function App() {
  const [x, setX] = useState("Z")
  const [run, setRun] = useState(false)
  const [rand, setRand] = useState()
  const [s, setS] = useState(-1)

  useEffect(() =>{
    if (s === 0){
      if (rand%2 === 0){setX("A");}
      else if (rand%2 === 1){setX("B");}
      if (x !== "Z"){
        setRun(true);
      }
    }
    else if (s === 1){
      if (rand / 10 < 1){setX("A");}
      else if (rand / 20 < 1){setX("C");}
      else {setX("B");}
      if (x !== "Z"){setRun(true);}

    }
  }, [rand, x, s])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function yClick(){
    setS(0);
    setRand(Math.floor(Math.random() * 100));
  }

  function hClick(){
    const t =  Math.floor(Math.random() * 2000);
    sleep(t)
    .then(() => {setRand(Math.floor(Math.random() * 100));});
  }

  function tClick(){
    setS(1);
    const r = Math.floor(Math.random() * 30);
    setRand(r);
  }

  function re(){
   //window.location.reload(false);
   setRun(false);
  }


  if (run){
    return(
      <div className={x}>
        <div className='rePad'>
        <div className='re' onClick={re}>
          <div className='reTxt'>RELOAD</div>
        </div>
        </div>
      </div>
    );
  }
  else {
    return(
      <div className='theall'>
        <div className='thetitle'>Choose</div>
  
        <div className='choice'>
          <div className='button' onClick={yClick}>
            <div className='btnTxt'>Y/N</div>
          </div>
        </div>
  
        <div className='choice'>
          <div className='button' onClick={tClick}>
            <div className='btnTxt'>1/3</div>
          </div>
        </div>
  
        <div className='choice'>
          <div className='button' onClick={hClick}>
            <div className='btnTxt'>Heavy</div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
