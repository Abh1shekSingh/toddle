import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import PostList from './components/PostList/PostList'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/board/:id' element={<PostList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
