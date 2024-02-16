import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home/index.jsx"
import { Dish } from "../pages/Dish/index.jsx"
import { EditDish } from "../pages/EditDish/index.jsx"
import { NewDish } from "../pages/NewDish/index.jsx"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dish />} />
      <Route path="/edit" element={<EditDish />} />
      <Route path="/new" element={<NewDish />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
