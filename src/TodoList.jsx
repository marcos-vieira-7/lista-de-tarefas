import React, {useState, useEffect} from "react";
import './TodoList.css';
import Icone from './assets/listaTarefa.jpg';

function TodoList(){

    const listaStorage = localStorage.getItem('Lista');
    const [lista, setLista] = useState(listaStorage? JSON.parse(listaStorage):[""]);
    const [novoItem, setNovoItem] = useState("");
    
    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista));
    }, [lista])

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        } 
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index,1);
        setLista(listaAux);
    }

    function deletaTudo(){
        setLista([]);
    }

    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                id="input-entrada"
                type="text"
                value={novoItem}
                placeholder="Adicione uma Tarefa"
                onChange={(e)=>{setNovoItem(e.target.value)}}
                />
                <button type="submit" className="add">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign: 'center '}}>
                {
                    lista.length < 1
                    ?
                    <img className="icone-central" src={Icone}/>
                    :
                    lista.map((item, index)=> (
                    <div
                        key={index}
                        className={item.isCompleted? "item completo": "item"}>
                        <span onClick={()=>{clicou(index)}}>{item.text}</span>
                        <button className="del" onClick={()=>{deleta(index)}}>Deletar</button>
                    </div>
                    ))
                }
                {
                    lista.length > 0 &&
                    <button className="deleteAll" onClick={()=>{deletaTudo()}}>Deletar Todas</button>
                }
                </div>
            </div>
        </div>
    )
}

export default TodoList