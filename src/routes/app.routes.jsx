import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home/index.jsx"
import { Dish } from "../pages/Dish/index.jsx"
import { EditDish } from "../pages/EditDish/index.jsx"
import { NewDish } from "../pages/NewDish/index.jsx"

export function AppRoutes({ isAdmin }) {
  return (
    <Routes>

      <Route path="/" element={<Home isAdmin={isAdmin} />} />

      <Route path="/dish/:id" element={<Dish isAdmin={isAdmin} />} />

      {
        isAdmin ? (
          <Route 
            path="/new" element={<NewDish isAdmin={isAdmin} />} />
        ) : (
          <Route 
            path="/new" element={<Navigate to="/" replace />} />
        )
      }

      {
        isAdmin ? (
          <Route 
            path="/edit/:id" element={<EditDish isAdmin={isAdmin} />} />
        ) : (
          <Route 
            path="/edit/:id" element={<Navigate to="/" replace />} />
        )
      }

      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  )
}
