import { Index } from "./routes/Index"
import { ComplaintProvider } from "./contexts/ComplaintContext"



function App() {

  return (
      <ComplaintProvider>
        <Index />
      </ComplaintProvider>
  )
}

export default App
