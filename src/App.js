
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TaskList from './components/ToDoTask/TaskList';
import TodoList from './components/ToDoTask/TodoList';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/calender" element={<Calendar />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
