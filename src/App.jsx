import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import { Camera } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0);
  const toast1 = () => {
    toast.error("NO");
  }
  const countChanger = () => {
    setCount(count + 1);
  }
  const btnOnClick = () => {
    toast1();
    countChanger();

  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='text-green-600' onClick={btnOnClick}>
          count is {count}
        </button>
        <Camera color='red' size={48} />

        <ToastContainer />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
