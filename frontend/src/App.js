import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Home } from './Pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
