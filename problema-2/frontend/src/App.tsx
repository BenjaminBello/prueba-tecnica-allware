import { RentCarForm } from './components/rent-car/RentCarForm'
import { RentCarPage } from './pages/RentCarPage'

function App() {
  return (
    <div className='px-2 sm:px-0 min-h-screen flex flex-col justify-center items-center max-w-6xl mx-auto'>
      <RentCarForm />
      <RentCarPage />
    </div>
  )
}

export default App
