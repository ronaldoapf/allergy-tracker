import { Layout } from '@components/Layout'
import { Dashboard } from '@pages/Dashboard'
import { LandingPage } from '@pages/LandingPage'
import { Login } from '@pages/Login'
import { Register } from '@pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Protected } from './Protected'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="app">
            <Route
              path="dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
