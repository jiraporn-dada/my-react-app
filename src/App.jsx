import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';


function Home() {
  return (<div>
    <h1>สวัสดี React!</h1>
    <h2>หน้าหลัก</h2>
    <p>ยินดีต้อนรัยสู่การพัฒนาเว็บแอปด้วย React</p>
    </div>)
    
}
function About() {
  const handleClick = () => {
    alert('ปุ่มถูกคลิ้กแล้ว!');
  };
  return (
    <div>
      <Header title="React Workshop" />
      <p>เรียนรู้พื้นฐานของ React ผ่านการปฏิบัติจริง</p>
      <Button label="คลิกตรงนี้" onClick={handleClick} />
    </div>
  );
}
function Greeting() {
  const user = {
    name: 'Jiraporn Boonsob',
    age: 20,
  };

  return (
    <div>
      <Header title="React Workshop" />
      <p>ชื่อ: {user.name}, อายุ: {user.age}</p>
      <Button label="ตกลง" onClick={() => alert('สวัสดี ' + user.name)} />
    </div>
  );
}
function Store(){
  const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => { state.value += 1; },
      decrement: (state) => { state.value -= 1; }
    }
  });
  
  const store = configureStore({ reducer: { counter: counterSlice.reducer } });
  
  function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
      </div>
    );
  }
  return(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
function App() {
  return (
     <Router>
     <nav>
       <Link to="/">Home</Link> | <Link to="/about">About</Link>  | <Link to="/greeting">Greeting</Link> | <Link to="/store">Store</Link>
     </nav>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/greeting" element={<Greeting />} />
       <Route path="/store" element={<Store />} />
     </Routes>
   </Router>
  );
}

export default App
