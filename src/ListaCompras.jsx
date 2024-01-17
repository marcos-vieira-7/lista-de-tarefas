import React, { useState, useEffect } from "react";
import './TodoList.css';
//jpg para lista vazia
import Icone from './assets/shoppList.jpg';

export default function TodoList(){
    const listaStorage = localStorage.getItem('ListaCompra');
    const [lista, setLista] = useState(listaStorage? JSON.parse(listaStorage): [""]);
    
    const [descricao, setDescricao] = useState("");
    const [qtd, setQtd] = useState(0);
    const [preco, setPreco] = useState(0);
    const [total, setTotal] = useState(0);

    const [novoItem, setNovoItem] = useState("");
    
    useEffect(()=>{
        localStorage.setItem('ListaCompra', JSON.stringify(lista));
    }, [lista])

    useEffect(()=>{
        calculaTotalItem();
        console.log("segundo useEffect!");
    }, [qtd, preco])

    function calculaTotalItem(){
        if(preco && qtd){
            let precoFormatado = parseFloat(preco.replace(",", "."));
            let total = qtd * precoFormatado;
            setTotal(total);
        }
    }

    function adicionaItem(form){
        form.preventDefault();
        if(!descricao){
            return;
        }
        setLista([...lista, {descricao: descricao, qtd: qtd, preco: preco, total: total, isCompleted: false}]);
        setDescricao("");
        setQtd("");
        setPreco("");
        setTotal("");
        document.getElementById("input-descricao").focus();
    }

    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);
    }

    function deletaTudo(){

        let confirm = window.confirm("Essa deleção é realmente necessária?");
        if (confirm) {
            setLista([]);
        }
    }

    return(
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={adicionaItem}>
                <input 
                className="myInput"
                id="input-descricao"
                type="text"
                placeholder="Adicione uma descrição"
                value={descricao}
                onChange={(e)=>{setDescricao(e.target.value)}}
                />
                <input
                className="myInput"
                id="input-qtd"
                type="text"
                placeholder="QTD"
                value={qtd}
                onChange={(e)=>{setQtd(e.target.value)}}
                />
                <input
                className="myInput"
                id="input-preco"
                type="text"
                placeholder="Preço"
                value={preco}
                onChange={(e)=>{setPreco(e.target.value)}}
                />
                <button type="submit" className="add">Add</button>
            </form>

            <div className="listaCompras">
                <div style={{textAlign: 'center'}}>
                    {/* TODO: */}
                    {
                        lista.length < 1
                        ?
                        <img className="icone-central" src={Icone} />
                        :
                        lista.map((item, index)=> (
                            <div
                                key={index}
                                className={item.isCompleted? "item completo": "item"}>
                                <span onClick={()=>{clicou(index)}}>{item.descricao} - QTD: {item.qtd} - Preço: {item.preco} - Total: {item.total}</span>
                                <button className="del" onClick={()=>{deleta()}}>Deletar</button>
                            </div>
                        ))
                    }
                    {
                        lista.length > 0 &&
                        <button className="deleteAll" onClick={()=>{deletaTudo()}}>Deletar todas</button>
                    }
                </div>
            </div>
        </div>
    )
}