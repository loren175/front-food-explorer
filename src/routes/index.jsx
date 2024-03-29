import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../hooks/auth"
import { useEffect } from "react"
import { api } from "../services/api"

export function Routes() {
  const { user, signOut } = useAuth()
  const isAdmin = user ? user.is_admin : false

  useEffect(() => {
    api.get("/users/validated").catch((error) => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  return (
    <BrowserRouter>
      {
        user ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes />
      }
    </BrowserRouter>
  )
}
