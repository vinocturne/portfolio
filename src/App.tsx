import {BrowserRouter} from "react-router-dom";
import Routes from './router/index'
function App() {

  return (
    <BrowserRouter basename={'/'}>
        <Routes />
    </BrowserRouter>
  )
}

export default App
