import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Home,Notice } from './Pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
