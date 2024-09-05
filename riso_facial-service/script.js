const video = document.getElementById('video');
let happinessCounter = 0;  // Inicializa o contador de felicidade
const smiledFaces = new Map();  // Mapa para rastrear rostos que já sorriram

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
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

    resizedDetections.forEach(detection => {
      const faceId = detection.detection.box.x.toFixed(2) + detection.detection.box.y.toFixed(2);
      const isSmiling = detection.expressions.happy > 0.9;

      if (isSmiling && !smiledFaces.has(faceId)) {
        happinessCounter++;
        smiledFaces.set(faceId, true);  // Marca que esse rosto já teve o sorriso contado
        console.log(`A pessoa ficou feliz ${happinessCounter} vezes`);
        
        // Remove o rosto do mapa após um curto período
        setTimeout(() => {
          smiledFaces.delete(faceId);
        }, 5000);  // Ajuste o tempo conforme necessário (5 segundos neste exemplo)
      }
    });
  }, 100);
});
