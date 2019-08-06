import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './components/create.js';
import TodoList from "./components/todo.js";
import EditTodo from "./components/edit.js";
import logo from "./logo.svg"

class App extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartway.com" />
            </a>
            <Link to="/create" className="navbar-brand">Mern Stack Todo application</Link>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>

      </Router>

    );
  }

}

export default App;
