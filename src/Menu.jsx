import React, { useState, useEffect } from "react";
import './TodoList.css';
import Icone from './assets/shoppList.jpg';
import { Checkbox } from "@mui/joy";


export default function Menu() {

    const listaStorage = localStorage.getItem('ListaMenu');
    const [lista, setLista] = useState(listaStorage? JSON.parse(listaStorage): [""]);

    const [carne, setCarne] = useState(
        [
            {
              "nome": "Bife à Parmegiana",
              "tipo": "Carne Bovina",
              "preco": 25.99
            },
            {
              "nome": "Frango Grelhado",
              "tipo": "Frango",
              "preco": 18.99
            },
            {
              "nome": "Costelas de Porco BBQ",
              "tipo": "Carne Suína",
              "preco": 22.50
            }
          ]
    );
    const [guarnicao, setGuarnicao] = useState(
        [
            {
              "nome": "Arroz Branco",
              "tipo": "Acompanhamento",
              "preco": 5.99
            },
            {
              "nome": "Batata Frita",
              "tipo": "Acompanhamento",
              "preco": 6.50
            },
            {
              "nome": "Legumes Grelhados",
              "tipo": "Acompanhamento",
              "preco": 7.25
            }
          ]
    );
    const [complemento, setComplemento] = useState(
        [
            {
              "nome": "Molho Chimichurri",
              "tipo": "Complemento",
              "preco": 3.99
            },
            {
              "nome": "Geleia de Pimenta",
              "tipo": "Complemento",
              "preco": 4.50
            },
            {
              "nome": "Farofa de Bacon",
              "tipo": "Complemento",
              "preco": 5.25
            }
          ]
    );

    return(
        <div>
        <h1>Menu</h1>

            {/* <form onSubmit={adicionaItem}>
                <button type="submit" className="add">Add</button>
            </form> */}

            <div className="listaCompras">

                <div className="divConteudo" style={{textAlign: 'center'}}>
                    {/* TODO: */}

                    <div className="divMenu">
                      <h2 className="titulo">Carne</h2>
                      {
                          carne.length < 1
                          ?
                          null
                          // <img className="icone-central" src={Icone} />
                          :
                          carne.map((item, index)=> (
                              <div
                                  key={index}
                                  className={item.isCompleted? "item completo": "item"}>
                                  <span onClick={()=>{clicou(index)}}>{item.nome} - Preço: {item.preco}</span>
                                  {/* <input className="myBox" type="checkbox" value={item.nome }></input> */}
                              </div>
                          ))
                      }
                    </div>

                    <div className="divMenu">
                      <h2 className="titulo">Acompanhamento</h2>
                      {
                          guarnicao.length < 1
                          ?
                          null
                          // <img className="icone-central" src={Icone} />
                          :
                          guarnicao.map((item, index)=> (
                              <div
                                  key={index}
                                  className={item.isCompleted? "item completo": "item"}>
                                  <span onClick={()=>{clicou(index)}}>{item.nome} - Preço: {item.preco}</span>
                                  {/* <input className="myBox" type="checkbox" value={item.nome }></input> */}
                              </div>
                          ))
                      }
                    </div>

                    <div className="divMenu">
                      <h2 className="titulo">Complemento</h2>
                      {
                          complemento.length < 1
                          ?
                          null
                          // <img className="icone-central" src={Icone} />
                          :
                          complemento.map((item, index)=> (
                              <div
                                  key={index}
                                  className={item.isCompleted? "item completo": "item"}>
                                  <span onClick={()=>{clicou(index)}}>{item.nome} - Preço: {item.preco}</span>
                                  {/* <input className="myBox" type="checkbox" value={item.nome }></input> */}
                              </div>
                          ))
                      }
                    </div>

                </div>
            </div>
        </div>
    );

}
