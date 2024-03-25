import './App.css'
import Card from './components/Card'


function App() {
  return (
    <>
     <h1 className="text-3xl font-bold underline bg-green-400">
      Tailwind testing!
    </h1>
    <Card laptop="Dell" btnText = "This Is Dell site"/>
    <Card laptop="Macbook"/>
    </>
  )
}

export default App
