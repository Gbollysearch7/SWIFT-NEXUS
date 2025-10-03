import { ErrorBoundary } from '@/components/ErrorBoundary'
import Navigation from '@/components/Navigation'
import Home from '@/pages/Home'

function App() {
  return (
    <ErrorBoundary>
      <Navigation />
      <Home />
    </ErrorBoundary>
  )
}

export default App
