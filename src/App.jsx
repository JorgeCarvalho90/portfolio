import HomePage from "./pages/index.jsx"
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
