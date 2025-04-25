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
      <RentCarForm />
      <div className="container mx-auto py-10 h-screen">
        <RentCarPage />
      </div>
    </QueryClientProvider>
  )
}

export default App
