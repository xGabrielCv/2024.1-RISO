import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUnit } from "../../services/unitServices";
import './estilo.css';

function RegisterUnit() {
    
    const navigate = useNavigate();

    const [unitName, setUnitName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [state, setState] = useState('');
    const [street, setStreet] = useState('');
    const [complement, setComplement] = useState('');
    const [number, setNumber] = useState('');

 
    const handleChangeUnitName = (event) => setUnitName(event.target.value);
    const handleChangeEmployeeNumber = (event) => setEmployeeNumber(event.target.value);
    const handleChangeCnpj = (event) => setCnpj(event.target.value);
    const handleChangeState = (event) => setState(event.target.value);
    const handleChangeStreet = (event) => setStreet(event.target.value);
    const handleChangeComplement = (event) => setComplement(event.target.value);
    const handleChangeNumber = (event) => setNumber(event.target.value);


    async function newUnit(event) {
        event.preventDefault(); 
        try {
            const response = await createUnit(unitName, employeeNumber, cnpj, state, street, complement, number);
            navigate('/HomePage'); 
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
       
        <div className="container">
            <div>
                <div className="second-column">
                    <h2 className="title title-second">Registrar Nova Unidade/Empresa</h2>
                    <label className="label-input">
                        <input type="text" placeholder="Nome Unidade/Empresa" value={unitName} onChange={handleChangeUnitName} required/>
                    </label>
                    <label className="label-input">
                        <input type="number" placeholder="Númerode Funcionários" value={employeeNumber} onChange={handleChangeEmployeeNumber} required/>
                    </label>
                    <label className="label-input">
                        <input type="text" placeholder="CNPJ" value={cnpj} onChange={handleChangeCnpj} required/>
                    </label>
                    <label className="label-input">
                        <input type="text" placeholder="Estado" value={state} onChange={handleChangeState} required/>
                    </label>
                    <label className="label-input">
                        <input type="text" placeholder="Rua" value={street} onChange={handleChangeStreet} required/>
                    </label>
                    <label className="label-input">
                        <input type="text" placeholder="Complemento" value={complement} onChange={handleChangeComplement} required/>
                    </label>
                    <label className="label-input">
                        <input type="text" placeholder="Número" value={number} onChange={handleChangeNumber} required/>
                    </label>
                    <button className="btn btn-second" onClick={newUnit}>Registrar</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterUnit;
