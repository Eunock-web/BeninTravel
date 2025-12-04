import './App.css'
import Card from './components/Utils/Card'

function App() {

  return (
    <>
      <div className=''>

      <div className=' grid grid-cols-3 '>
          <div>
          <Card voyageTitre=' Envole ' voyageDescription='Voyage pour Bamako' voyageImage=' src\images\One Piece - manga wallpaper.jfif ' voyagePrix={1500} />
          </div>

          <div>
            <Card voyageTitre=' Envole ' voyageDescription='Voyage pour Bamako' voyageImage=' src\images\One Piece - manga wallpaper.jfif ' voyagePrix={1500} />
          </div>

          <div>
            <Card voyageTitre=' Envole ' voyageDescription='Voyage pour Bamako' voyageImage=' src\images\One Piece - manga wallpaper.jfif ' voyagePrix={1500} />
          </div>
          
        </div>

        
      </div>
    </>
  )
}

export default App
