import React, { useEffect, useState} from "react";
import './TodoList.css';

export default function Login() {

    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    return(

         <div className="div_center">
            <div className="div_login">
                <h1>Acessar</h1>    
                <input 
                className="inputDefault"
                id="input-login"
                type="text"
                placeholder="Login"
                value={login}
                onChange={(e)=>{setLogin(e.target.value)}}
                />
                <input
                className="inputDefault"
                id="input-password"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e)=>{setSenha(e.target.value)}}
                />
                <button className="buttonConfirm">Acessar</button>
            </div>
        </div>
    )

}