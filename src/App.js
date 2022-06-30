
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddTask from './components/ToDoTask/AddTask';
import TaskList from './components/ToDoTask/TaskList';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TaskList />} />
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/calender" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
