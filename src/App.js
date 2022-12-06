import {useCallback, useEffect, useState} from 'react'




function App() {
  const [second, setSecond] = useState(0);
  const [play, setPlay] = useState(false);


  function formatTime(secon) {
    const minute = Math.floor(secon / 60);
    const second = secon % 60;
    const formattingTime = ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2);
  
    return formattingTime;
  }
  

  useEffect(() => {

    if(!play) return;

    const interval = setInterval(() => {
      setSecond((previousSecond) => previousSecond + 1)
    }, 1000)
    
    return () => {
      clearInterval(interval);
    }
  }, [play])

  const onReset = useCallback(() => {
    setSecond(0)
  }, []);
  
  const onToogle = useCallback(() => {
    setPlay((previousPlay) => !previousPlay)
  }, []);

  return (
    <div className="App">
      <h1>{formatTime(second)}</h1>
      <button onClick={onToogle}>{!play ? "Start" : "Stop"}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
