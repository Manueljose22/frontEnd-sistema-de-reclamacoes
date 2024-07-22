import { Index } from "./routes/Index"
import { ComplaintProvider } from "./contexts/ComplaintContext"
import { ChakraProvider } from "@chakra-ui/react"



function App() {

  return (
      <ComplaintProvider>
        <ChakraProvider>
        <Index />
        </ChakraProvider>
      </ComplaintProvider>
  )
}

export default App
