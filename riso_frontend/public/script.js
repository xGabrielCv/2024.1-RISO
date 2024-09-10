function initializeVideoScript() {
  const video = document.getElementById('video');
  let happinessCounter = 0; // Inicializa o contador de felicidade
  const smiledFaces = new Map(); // Mapa para rastrear rostos que já sorriram

  // Função para carregar os modelos necessários
  async function loadModels() {
    try {
      // Carrega os modelos necessários para o face-api.js
      await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('./models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('./models');
      await faceapi.nets.faceExpressionNet.loadFromUri('./models');

      console.log("Todos os modelos foram carregados com sucesso.");
      startVideo(); // Inicia o vídeo após os modelos serem carregados
    } catch (error) {
      console.error("Erro ao carregar os modelos:", error);
    }
  }

  // Função para iniciar o vídeo
  function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(err => console.error("Erro ao acessar a câmera:", err));
  }

  // Função para verificar se todos os modelos foram carregados
  function areModelsLoaded() {
    return (
      faceapi.nets.tinyFaceDetector.isLoaded &&
      faceapi.nets.faceLandmark68Net.isLoaded &&
      faceapi.nets.faceRecognitionNet.isLoaded &&
      faceapi.nets.faceExpressionNet.isLoaded
    );
  }

  // Adiciona um ouvinte de evento 'play' para quando o vídeo começar
  video.addEventListener('play', async () => {
    // Verifica se os modelos estão carregados antes de prosseguir
    if (!areModelsLoaded()) {
      console.error("Modelos não carregados corretamente.");
      return;
    }

    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      try {
        // Verifica novamente se os modelos estão carregados antes da inferência
        if (!areModelsLoaded()) {
          console.error("Modelos ainda não carregados. Tentando novamente...");
          return;
        }

        // Realiza a detecção de rostos
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                                        .withFaceLandmarks()
                                        .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

        resizedDetections.forEach(detection => {
          const faceId = detection.detection.box.x.toFixed(2) + detection.detection.box.y.toFixed(2);
          const isSmiling = detection.expressions.happy > 0.9;

          if (isSmiling && !smiledFaces.has(faceId)) {
            happinessCounter++;
            smiledFaces.set(faceId, true); // Marca que esse rosto já teve o sorriso contado
            console.log(`A pessoa ficou feliz ${happinessCounter} vezes`);

            // Remove o rosto do mapa após um curto período
            setTimeout(() => {
              smiledFaces.delete(faceId);
            }, 5000); // Ajuste o tempo conforme necessário (5 segundos neste exemplo)
          }
        });
      } catch (error) {
        console.error("Erro durante a detecção de rostos:", error);
      }
    }, 100);
  });

  // Chama a função para carregar os modelos ao iniciar o script
  loadModels();
}

// Chama a função para inicializar o script
initializeVideoScript();
