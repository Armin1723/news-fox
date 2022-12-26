import './App.css';
import Navbar from './components/navbar';
import News from './components/news';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  // const [theme, setTheme]= useState('light');
  const [progress, setProgress]= useState(0);
  let pageSize=12;
  let loadProgress=(progress)=>{ 
    setProgress(progress); 
  }
 return (
    <Router>
      <Navbar title='Home'/>
      <LoadingBar color='#ee0606' progress={progress} shadow="true"/>
        <Routes >
          <Route exact path='/' element={<News loadProgress={loadProgress}key='' pageSize={pageSize} category='general' country='in'/>} />
          <Route exact path='/Business' element={<News loadProgress={loadProgress}key='business' pageSize={pageSize} category='business' country='in'/>} />
          <Route exact path='/Entertainment' element={<News loadProgress={loadProgress}key='entertainment' pageSize={pageSize} category='entertainment' country='in'/>} />
          <Route exact path='/General' element={<News loadProgress={loadProgress}key='general' pageSize={pageSize} category='general' country='in'/>} />
          <Route exact path='/Health' element={<News loadProgress={loadProgress}key='health' pageSize={pageSize} category='health' country='in'/>} />
          <Route exact path='/Science' element={<News loadProgress={loadProgress}key='science' pageSize={pageSize} category='science' country='in'/>} />
          <Route exact path='/Sports' element={<News loadProgress={loadProgress}key='sports' pageSize={pageSize} category='sports' country='in'/>} />
          <Route exact path='/Technology' element={<News loadProgress={loadProgress}key='technology' pageSize={pageSize} category='technology' country='in'/>} />
        </Routes>
    </Router>
  )
}

export default App;
