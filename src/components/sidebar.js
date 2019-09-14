import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import text from '../assets/texts/home'
export default class SideBar extends Component{
  render(){
    return (
      <div>
        <header>Sidebar</header>
        <p>p1</p>
        <footer>
          <a href={text.Links.linkedin}>linkedin</a>
          <a href={text.Links.github}>github</a>
        </footer>
      </div>
    )
  }
}
