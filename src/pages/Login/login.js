import React, { useState } from 'react';

import './login.css'

export default function Login(props) {

    const [cpf, setCpf] = useState('');

    async function verifica() {
        console.log(cpf);
        const url = 'http://localhost:8081/verificaUser';

        const formData = {
            cpf: cpf
        };

        const resp = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        console.log(resp);
        const rep = await resp.json();
        console.log('rep', rep);

        if (resp.status === 200) {
            console.log('if');
            props.history.push('/home');
        }
    }

    return (
        <div>
            <form id="formLogin">
                <h1>
                    <label id="bemVindo">Bem vindo(a) ao Health Time.</label>
                </h1>
                <div className="formLogin">
                    <table>
                        <tr>
                            <td><label id="textCPF">CPF:</label>
                                <input
                                    id="inputCPF"
                                    placeholder="CPF"
                                    onChange={(input, value) => {
                                        setCpf(input.target.value);
                                    }}
                                    required
                                /></td>
                        </tr>

                        {/* <tr>
                            <td><label id="senhaText">Senha:</label>
                                <input
                                    id="senha"
                                    placeholder="Senha"
                                    onChange={(input, value) => {
                                        setDtNasc(input.target.value);
                                    }}
                                    required
                                /></td>
                        </tr> */}
                    </table>
                    <button id="botao" className="btn btn-success" onClick={verifica}>Entrar</button>
                </div>
            </form>
        </div>
    );
}