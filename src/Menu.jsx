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

    const [modeloDisponivel, setModeloDisponivel] = useState(
      [
        {
          "id": 1,
          "nome": "MARMITEX PEQUENA",
          "descricao": "Acompanha 1 opção de carne. 3 opções de guarnições. 2 companhamentos e 2 saladas à escolha",
          "preco": 14.00
        },
        {
          "id": 2,
          "nome": "MARMITEX GRANDE",
          "descricao": "Acompanha 2 opções de carnes. 3 opções de guarnições. 2 companhamentos e 2 saladas à escolha",
          "preco": 19.00
        }
      ]
    );

    const [modeloEscolhido, setModeloEscolhido] = useState(false);
    const [modeloMarmita, setModeloMarmita] = useState();

    const formatCurrencyBR = (valor) => {
      if (isNaN(valor)) {
        return 'R$ 0,00';
      }
      const valorFormatado = parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      return valorFormatado;
  }

    return(
        <div>
        <h1>Menu</h1>

            {/* <form onSubmit={adicionaItem}>
                <button type="submit" className="add">Add</button>
            </form> */}

            <div className="listaCompras">

                <div className="divConteudo" style={{textAlign: 'center'}}>
                    {/* TODO: */}

                  { modeloEscolhido ?
                    <>
                    {/* Informativo do modelo escolhido pelo usuario */}
                    {modeloDisponivel.map((item)=> (
                      item.id == modeloMarmita ?
                        <>
                          <h3>{item.nome} - {formatCurrencyBR(item.preco)}</h3> <span style={{fontSize: "12px"}}>{item.descricao}</span>
                        </>
                        :
                        null
                    ))}

                    <div className="divMenu">
                      <h2 className="titulo">Carne</h2>
                      {
                          carne.length < 1
                          ?
                          null
                          // <img className="icone-central" src={Icone} />  {formatCurrencyBR(parseFloat(item.preco))}
                          :
                          carne.map((item, index)=> (
                              <div
                                  key={index}
                                  className={item.isCompleted? "item completo": "item"}>
                                  <span onClick={()=>{clicou(index)}}>{item.nome}</span>
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
                                  <span onClick={()=>{clicou(index)}}>{item.nome}</span>
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
                                  <span onClick={()=>{clicou(index)}}>{item.nome}</span>
                                  {/* <input className="myBox" type="checkbox" value={item.nome }></input> */}
                              </div>
                          ))
                      }
                    </div>
                    </>
                    :
                    <div className="divMenu">
                      <h2 className="titulo">Escolha o Modelo</h2>
                      {
                          modeloDisponivel.length < 1
                          ?
                          null
                          // <img className="icone-central" src={Icone} />
                          :
                          modeloDisponivel.map((item, index) => (
                              <div
                                  key={index}
                                  className={"item"}>
                                  <span onClick={()=>{setModeloMarmita(item.id), setModeloEscolhido(true)}}>{item.nome} - <strong>{formatCurrencyBR(parseFloat(item.preco))}</strong> : <span style={{fontSize: "12px"}}>{item.descricao}</span></span>

                                  {/* <input className="myBox" type="checkbox" value={item.nome }></input> */}
                              </div>
                          ))
                      }
                    </div>
                  }


                </div>
            </div>
        </div>
    );

}
