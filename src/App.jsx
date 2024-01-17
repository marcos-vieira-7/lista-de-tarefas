import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList'
import ListaCompras from './ListaCompras';
import Menu from './Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <ListaCompras /> */}
    <Menu />
  </React.StrictMode>,
)
