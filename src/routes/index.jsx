import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../hooks/auth"

export function Routes() {
  const { user } = useAuth()
  const isAdmin = user ? user.is_admin : false

  return (
    <BrowserRouter>
      {user ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
