import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNotes from './pages/AppNotes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;