import React, {useState, useEffect} from 'react'
import './App.css';
//import ReactPlayer from 'react-player';

function App() {
  const [x, setX] = useState("Z")
  const [run, setRun] = useState(false)
  const [rand, setRand] = useState()

  function yClick(){
    setRand(Math.floor(Math.random() * 100));
    
  }

  useEffect(() =>{
    if (rand%2 === 0){setX("A");}
    else if (rand%2 === 1){setX("B");}
    if (x !== "Z"){
      setRun(true)
    }
  }, [rand, x])

  function re(){
    window.location.reload(false);
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
          <div className='button'>
            <div className='btnTxt'>1/3</div>
          </div>
        </div>
  
        <div className='choice'>
          <div className='button'>
            <div className='btnTxt'>Heavy</div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
