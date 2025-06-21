import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
      <Router basename="/straiv-product-challenge">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/:section" element={<Layout onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/overview" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<PasscodeGate onAuthenticated={handleAuthenticated} />} />
          </Routes>
        )}
      </Router>
      <Toaster />
    </div>
  )
}

export default App
