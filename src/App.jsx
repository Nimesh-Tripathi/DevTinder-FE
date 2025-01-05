import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"

function App() {

  return (
    <>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
            <Route path="/login" element={<div>login page</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
