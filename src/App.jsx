import { useState , useEffect} from 'react'
import './App.css'
function App() {
  const [can, setCan] = useState(0)
  const [tuba, setTuba] = useState(0)
  useEffect(()=>{
    console.log("Her Zaman Çalışır")
  });
  useEffect(()=>{
    console.log("İlk Kez Render Edildiğinde Çalışır Dada Da Çalışmaz")
  } , []);
  useEffect(()=>{
    console.log("İlk Kez Render Edildiğinde Ve Değer Değiştiğinde Çalışır")
  },[can]);
  const handleClickCan = () => {
    setCan(can+1);
  }
  const handleClickTuba = () => {
    setTuba(tuba+1);
  }

  return (
    <>
      <div className='App'>
        <button onClick={handleClickCan}>Can ++</button>
        <div>Can: {can}</div>
        <button onClick={handleClickTuba}>Tuba ++</button>
        <div>Tuba: {tuba}</div>
      </div>
    </>
  )
}

export default App
