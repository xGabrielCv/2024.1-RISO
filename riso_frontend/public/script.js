const video = document.getElementById('video');
let happinessCounter = 0;  // Inicializa o contador de felicidade
const smiledFaces = new Map();  // Mapa para rastrear o último sorriso de cada rosto
let lastCountTime = Date.now();  // Tempo do último incremento do contador

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  );
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                                    .withFaceLandmarks()
                                    .withFaceExpressions();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    let smileDetected = false;  // Flag para verificar se pelo menos um sorriso foi detectado

    resizedDetections.forEach(detection => {
      const faceId = detection.detection.box.x.toFixed(2) + detection.detection.box.y.toFixed(2);  // Cria um identificador único para o rosto
      const isSmiling = detection.expressions.happy > 0.9;  // Verifica se a pessoa está sorrindo

      if (isSmiling) {
        smileDetected = true;  // Marca que pelo menos um sorriso foi detectado
      }
    });

    const currentTime = Date.now();  // Pega o tempo atual

    // Verifica se passou 1 minuto desde o último incremento do contador e se algum sorriso foi detectado
    if (smileDetected && currentTime - lastCountTime > 7000) {  // 60 segundos (1 minuto)
      happinessCounter++;
      lastCountTime = currentTime;  // Atualiza o tempo do último incremento do contador
      console.log(`A pessoa ficou feliz ${happinessCounter} vezes`);
    }
  }, 100);
});
