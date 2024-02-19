import { BrowserRouter } from 'react-router-dom';
import Routes from './router/index';
function App() {
  return (
    <BrowserRouter basename={'/portfolio'}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
