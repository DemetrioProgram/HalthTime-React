import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './principal.css'

export default function Principal() {

    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>

                    <th scope="col">Segunda</th>
                    <th scope="col">Terça</th>
                    <th scope="col">Quarta</th>
                    <th scope="col">Quinta</th>
                    <th scope="col">Sexta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">14:00</th>
                    <td>08:00</td>
                    <td>08:30</td>
                    <td>Não ha consultas disponíveis.</td>
                    <td>Feriado</td>
                </tr>
                <tr>
                    <th scope="row">16:30</th>
                    <td>08:30</td>
                    <td>10:00</td>
                    <td>Não ha consultas disponíveis.</td>
                    <td>Feriado</td>
                </tr>
                <tr>
                    <th scope="row">17:00</th>
                    <td>09:00</td>
                    <td>10:30</td>
                    <td>Não ha consultas disponíveis.</td>
                    <td>Feriado</td>
                </tr>
            </tbody>
        </table>
    );
}