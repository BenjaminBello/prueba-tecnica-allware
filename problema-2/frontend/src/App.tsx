import { RentCarForm } from './components/rent-car/RentCarForm'
import { RentCarPage } from './pages/RentCarPage'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className='px-2 sm:px-0 min-h-screen flex flex-col justify-center items-center max-w-6xl mx-auto'>
        <RentCarForm />
        <RentCarPage />
      </div>
    </QueryClientProvider>
  )
}

export default App
