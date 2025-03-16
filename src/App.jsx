import HomePage from "./pages/index.jsx"
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout/index.jsx"
import About from "./pages/about/index.jsx"
import Works from "./pages/works/index.jsx"
import Contact from "./pages/contact/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
