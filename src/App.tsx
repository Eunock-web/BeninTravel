import './App.css'
import { useRoutes } from 'react-router-dom'
import AppRoutes from './routes'
function App() {
  const elements = useRoutes(AppRoutes);

  return (
    <>
      <div className=''>
          <main>
            { elements }
          </main>
      </div>
    </>
  )
}

export default App
