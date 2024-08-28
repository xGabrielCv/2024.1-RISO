import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ManipulacaoContainer, Modal, Pesquisa, UnidadesContainer } from "./styled";
import { FillButton } from "../../components/Button/styled";
import AddUnitModal from "../../components/addUnitModal";
import { createUnit } from "../../services/unitServices";

function HomePage() {

    //navigate
    const navigate = useNavigate();

    const [unitName, setUnitName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [state, setState] = useState('');
    const [street, setStreet] = useState('');
    const [complement, setComplement] = useState('');
    const [number, setNumber] = useState('');
    const [isVisible, setIsVisible] = useState(false);

 
    const handleChangeUnitName = (event) => setUnitName(event.target.value);
    const handleChangeEmployeeNumber = (event) => setEmployeeNumber(event.target.value);
    const handleChangeCnpj = (event) => setCnpj(event.target.value);
    const handleChangeState = (event) => setState(event.target.value);
    const handleChangeStreet = (event) => setStreet(event.target.value);
    const handleChangeComplement = (event) => setComplement(event.target.value);
    const handleChangeNumber = (event) => setNumber(event.target.value);

    function modalIsVisible() {
        if (isVisible === false) setIsVisible(true)
        else setIsVisible(false);
    }

    async function newUnit(event) {
        event.preventDefault(); 
        try {
            await createUnit(unitName, employeeNumber, cnpj, state, street, complement, number);
        } catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        console.log(Cookies.get("token"));
    })

    function logOut() {
        Cookies.remove("token");
        navigate('/');
    }

    return (
        <div>
            <NavBar onClick={logOut}/>

            <ManipulacaoContainer>
                    <Pesquisa placeholder="Pesquise uma Unidade Existente"/>
                    <FillButton onClick={modalIsVisible}>Criar Unidade</FillButton>
            </ManipulacaoContainer>
            <UnidadesContainer>
                
            </UnidadesContainer>

            {isVisible ? (
                <Modal>
                    <AddUnitModal
                        onChangeNome={handleChangeUnitName}
                        onChangeFuncionarios={handleChangeEmployeeNumber}
                        onChangeCNPJ={handleChangeCnpj}
                        onChangeEstado={handleChangeState}
                        onChangeRua={handleChangeStreet}
                        onChangeComplemento={handleChangeComplement}
                        onChangeNumero={handleChangeNumber}
                        onClickButton={newUnit}
                        onClickClose={modalIsVisible}
                    />
                </Modal>
            ) : (
                <></>
            )}
        </div>
    );
}

export default HomePage;