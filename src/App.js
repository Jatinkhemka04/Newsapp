import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=14;
  state={
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress: progress
    }
    )
  }
  render() {
    return (
      <>
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
    
      />
      <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={8} country="in" category="general"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business"pageSize={8} country="in" category="business"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress}   key="general" pageSize={8} country="in" category="general"/>}></Route>
          <Route exact path="/health" ekement={<News setProgress={this.setProgress}  key="health" pageSize={8} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science"pageSize={8} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={8} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={8} country="in" category="technology"/>}></Route>
        </Routes>
    </Router>
    </div>
    </>
    )
  }
}

