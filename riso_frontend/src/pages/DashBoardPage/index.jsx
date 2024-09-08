import React, { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

function DashBoardPage() {

  //navigate
  const navigate = useNavigate();

  function logOut() {
    Cookies.remove("token");
    navigate('/');
  }

  useEffect(() => {
    // Adiciona face-api.min.js do diretório público
    const faceApiScript = document.createElement("script");
    faceApiScript.src = "/face-api.min.js"; // Ajuste o caminho conforme necessário
    faceApiScript.async = true;
    faceApiScript.onload = () => {
      // Adiciona script.js após face-api.min.js ser carregado
      const script = document.createElement("script");
      script.src = "/script.js"; // Ajuste o caminho conforme necessário
      script.async = true;
      document.body.appendChild(script);
    };
    document.body.appendChild(faceApiScript);

    // Cleanup: remove os scripts quando o componente é desmontado
    return () => {
      document.body.removeChild(faceApiScript);
    };
  }, []);

  return (
    <div>
        <NavBar onClick={logOut}/>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* Elemento de vídeo necessário para o reconhecimento facial */}
        <video id="video" width="720" height="560" autoPlay muted></video>
      </div>
    </div>
  );
}

export default DashBoardPage;