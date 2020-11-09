import React, { useState } from 'react';
import { Col, Input, Row, Button, Label } from 'reactstrap';

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
        <body>

            <h1>
                <label id="bemVindo">Bem vindo(a) ao Health Time.</label>
            </h1>
            <div className="formLogin">
                <Row>
                    <Col xs='6'>
                        <Label id="textCPF">CPF:</Label>
                        <Input
                            id="inputCPF"
                            name="inputCPF"
                            placeholder="CPF"
                            type="text"
                            onChange={(input, value) => {
                                setCpf(input.target.value);
                            }}
                            required
                        />
                    </Col>
                </Row>

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
                        </tr> 
                    </table>*/}
                <Row>
                    <Col>
                        <Button id="botao" color="success" onClick={verifica}>Entrar</Button>
                    </Col>
                </Row>
            </div>

        </body>
    );
}