import React, { useState } from 'react';
import { Button, Col, FormGroup, Input, Row } from 'reactstrap';
import NavbarMenu from '../NavBar/navBar';

export default function CadastroUser(props) {

    //bairro, cep, cidade, numero, rua, uf

    const [cpf, setCpf] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [flGestante, setFlGestante] = useState(false);
    const [flIdoso, setFlIdoso] = useState(false);
    const [flMenorIdade, setFlMenorIdade] = useState(false);
    const [flPne, setFlPne] = useState(false);
    const [nome, setNome] = useState('');
    const [nomenomeMae, setNomeMae] = useState('');
    const [nuContatoPrincipal, setNuContatoPrincipal] = useState('');
    const [nuContatoSecundario, setNuContatoSecundario] = useState('');
    const [nuSus, setNuSus] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [numero, setNumero] = useState(0);
    const [rua, setRua] = useState('');
    const [uf, setUf] = useState('');


    return (
        <div>
            <NavbarMenu />

            <h1>Cadastre-se</h1>


            <Row style={{ marginRight: '25%', background: '#a7c3e8', marginLeft: '25%' }}>
                <Col xs='6' style={{ textAlign: "center", marginLeft: '25%' }}>

                    <FormGroup>
                        {'CPF:'}
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
                    </FormGroup>

                    <FormGroup>

                        {'Data de Nascimento:'}
                        <Input
                            id="dtNascimento"
                            name="dtNascimento"
                            placeholder="Data de Nascimento"
                            type="text"
                            onChange={(input, value) => {
                                setDtNascimento(input.target.value);
                            }}
                            required
                        />

                    </FormGroup>

                    <FormGroup>
                        {'Data de Nascimento:'}
                        <Input
                            id="dtNascimento"
                            name="dtNascimento"
                            placeholder="Data de Nascimento"
                            type="text"
                            onChange={(input, value) => {
                                setDtNascimento(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Email:'}
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                            onChange={(input, value) => {
                                setEmail(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Nome:'}
                        <Input
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            type="text"
                            onChange={(input, value) => {
                                setNome(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Nome da Mãe:'}
                        <Input
                            id="nomeMae"
                            name="nomeMae"
                            placeholder="Nome da Mãe"
                            type="text"
                            onChange={(input, value) => {
                                setNomeMae(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Contato:'}
                        <Input
                            id="contato"
                            name="contato"
                            placeholder="Contato"
                            type="text"
                            onChange={(input, value) => {
                                setNuContatoPrincipal(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Contato:'}
                        <Input
                            id="contato2"
                            name="contato2"
                            placeholder="Contato"
                            type="text"
                            onChange={(input, value) => {
                                setNuContatoSecundario(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Número do Sus:'}
                        <Input
                            id="numeroSus"
                            name="numeroSus"
                            placeholder="Número do Sus"
                            type="text"
                            onChange={(input, value) => {
                                setNuSus(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <h2>Endereço</h2>
                    </FormGroup>

                    <FormGroup>
                        {'Bairro:'}
                        <Input
                            id="bairro"
                            name="bairro"
                            placeholder="Bairro"
                            type="text"
                            onChange={(input, value) => {
                                setBairro(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Cep:'}
                        <Input
                            id="cep"
                            name="cep"
                            placeholder="Cep"
                            type="text"
                            onChange={(input, value) => {
                                setCep(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Cidade:'}
                        <Input
                            id="cidade"
                            name="cidade"
                            placeholder="Cep"
                            type="text"
                            onChange={(input, value) => {
                                setCep(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Número:'}
                        <Input
                            id="numero"
                            name="numero"
                            placeholder="Número"
                            type="text"
                            onChange={(input, value) => {
                                setNumero(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'Rua:'}
                        <Input
                            id="rua"
                            name="rua"
                            placeholder="Rua"
                            type="text"
                            onChange={(input, value) => {
                                setRua(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        {'UF:'}
                        <Input
                            id="uf"
                            name="uf"
                            placeholder="UF"
                            type="text"
                            onChange={(input, value) => {
                                setUf(input.target.value);
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Button color='success' outline onClick={{}}>Cadastrar</Button>
                    </FormGroup>

                </Col>
            </Row>

        </div>
    );
}