import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import ImageGallery from "./LazyImage/lazyImage"
import Test from "./ModelComponent/Test";
import Home from "./Home";


function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/image" element={<ImageGallery />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
