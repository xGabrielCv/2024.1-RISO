import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { CardRenderUnidades, ManipulacaoContainer, Modal, Pesquisa, UnidadesContainer, UnidadesRenderContainer, ConteinerPagina } from "./styled";
import { FillButton } from "../../components/Button/styled";
import AddUnitModal from "../../components/addUnitModal";
import CodeModal from "../../components/CodeModal";
import { createUnit, getAllUnits } from "../../services/unitServices";
import { createRelationByUnitCode } from "../../services/userUnit";

function HomePage() {

    //navigate
    const navigate = useNavigate();

    const [units, setUnits] = useState([]);
    const [unitName, setUnitName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [state, setState] = useState('');
    const [street, setStreet] = useState('');
    const [complement, setComplement] = useState('');
    const [number, setNumber] = useState('');
    const [code, setCode] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleCode, setIsVisibleCode] = useState(false);
 
    const handleChangeUnitName = (event) => setUnitName(event.target.value);
    const handleChangeEmployeeNumber = (event) => setEmployeeNumber(event.target.value);
    const handleChangeCnpj = (event) => setCnpj(event.target.value);
    const handleChangeState = (event) => setState(event.target.value);
    const handleChangeStreet = (event) => setStreet(event.target.value);
    const handleChangeComplement = (event) => setComplement(event.target.value);
    const handleChangeNumber = (event) => setNumber(event.target.value);
    const handleChangeCode = (event) => setCode(event.target.value);

    const modalIsVisible = () => setIsVisible(!isVisible);
    const modalCodeIsVisible = () => setIsVisibleCode(!isVisibleCode);

    // Função para buscar todas as unidades
    const fetchUnits = async () => {
        try {
            const response = await getAllUnits();
            setUnits(response.data.unit); // Define o state com as unidades recebidas
        } catch (error) {
            console.log("Erro ao buscar unidades:", error);
        }
    };

    // Chama a função de busca quando o componente monta
    useEffect(() => {
        fetchUnits();
    }, []);

    // Função para criar nova unidade e atualizar a lista
    const newUnit = async (event) => {
        event.preventDefault();
        try {
        await createUnit(unitName, employeeNumber, cnpj, state, street, complement, number);
        fetchUnits(); // Atualiza a lista de unidades após a criação
        setIsVisible(false); // Fecha o modal após criar a unidade
        } catch (err) {
        console.log(err.response);
        }
    };

    const searchUnit = async (event) => {
        event.preventDefault();
        try {
            await createRelationByUnitCode(code);
            fetchUnits();
            setIsVisibleCode(false);
        } catch (err) {
            console.log(err.response);
        }
    }

    function logOut() {
        Cookies.remove("token");
        navigate('/');
    }

    return (
        <ConteinerPagina>
            <NavBar onClick={logOut} text={'Sair'}/>

            <ManipulacaoContainer>
                    <Pesquisa placeholder="Pesquise uma Unidade Existente"/>
                    <FillButton onClick={modalIsVisible}>Criar Unidade</FillButton>
                    <FillButton onClick={modalCodeIsVisible}>Entrar em Unidade</FillButton>
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

            {isVisibleCode ? (
                <Modal>
                    <CodeModal
                        onChangeCode={handleChangeCode}
                        onClickButton={searchUnit}
                        onClickClose={modalCodeIsVisible}
                    />
                </Modal>
            ) : (
                <></>
            )}

            <UnidadesRenderContainer>
            {(units || []).map((unit) => (
                <CardRenderUnidades key={unit._id} onClick={() => navigate('/Dashboard')}>
                <h3>{unit.name}</h3>
                </CardRenderUnidades>
            ))}
            </UnidadesRenderContainer>

            <CodeModal></CodeModal>
        </ConteinerPagina>
    );
}

export default HomePage;