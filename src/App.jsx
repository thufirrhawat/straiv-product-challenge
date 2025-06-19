import { useState, useEffect } from 'react'
import PasscodeGate from './components/PasscodeGate'
import Layout from './components/Layout'
import { getAuthStatus } from './utils/storage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status on app load
    const checkAuth = async () => {
      try {
        const authStatus = getAuthStatus()
        setIsAuthenticated(authStatus)
      } catch (error) {
        console.warn('Failed to check auth status:', error)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleAuthenticated = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-base-content/60">Loading Straiv Product Challenge...</p>
        </div>
      </div>
    )
  }

  return (
    <div data-theme="straiv">
      {isAuthenticated ? (
        <Layout onLogout={handleLogout} />
      ) : (
        <PasscodeGate onAuthenticated={handleAuthenticated} />
      )}
      <Toaster />
    </div>
  )
}

export default App
