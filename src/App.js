
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';
import Home from './components/Home';
import Task from './components/ToDoTask/Task';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Task />} />
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/calender" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
