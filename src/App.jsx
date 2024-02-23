import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList'
import ListaCompras from './ListaCompras';
import Menu from './Menu';
import Login from './Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
    {/* <ListaCompras /> */}
    {/* <Menu /> */}
    {/* <Login /> */}
  </React.StrictMode>,
)
