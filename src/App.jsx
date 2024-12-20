import './App.css'
import Content from "./components/Content"
import ShootingStars from './components/ShootingStars';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="relative h-screen w-screen">
      {/*<div className="fixed inset-0 bg-gradient-to-tr from-black via-gray-900 to-black z-0"></div>*/}
      <div className="fixed inset-0 bg-black"></div>
      <ShootingStars />
      <div className="relative z-10">
        <Content />
      </div>
      <div className='h-40 w-full'></div>
    </div>
  );
}

export default App
