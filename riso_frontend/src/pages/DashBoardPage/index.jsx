import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Card, Superior, TituloCard, SecaoDados } from "./styled";

function DashBoardPage() {

  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    // Adiciona face-api.min.js do diretório público
    const faceApiScript = document.createElement("script");
    faceApiScript.src = "/face-api.min.js"; // Ajuste o caminho conforme necessário
    faceApiScript.async = true;
    
    // Função para adicionar o script.js após face-api.min.js ser carregado
    const addScriptJs = () => {
      const script = document.createElement("script");
      script.src = "/script.js"; // Ajuste o caminho conforme necessário
      script.async = true;
      document.body.appendChild(script);
    };
  
    faceApiScript.onload = addScriptJs;
    document.body.appendChild(faceApiScript);
  
    // Cleanup: remove os scripts quando o componente é desmontado
    return () => {
      document.body.removeChild(faceApiScript);
      // Remove script.js se necessário
      const existingScript = document.querySelector('script[src="/script.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <NavBar onClick={() => navigate('/HomePage')} text={'Voltar'}/>

      <Superior>
        <video id="video" width="300" height="450" autoPlay muted></video>

      <SecaoDados>
        <h1><TituloCard>Taxa de Risos do Dia</TituloCard></h1>
        <Card>
          <p>Total de Pessoas Identificadas: <strong></strong></p>
          <p>Pessoas que Riram: <strong></strong></p>
          <p>Pessoas que Não Riram: <strong></strong></p>
          <p>Taxa de Risos: <strong>%</strong></p>
        </Card>        
      </SecaoDados>
      </Superior>

    </div>
  );
}

export default DashBoardPage;