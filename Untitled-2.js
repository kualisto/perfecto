const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// initialize the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
    requestAnimationFrame(scanAndHideResult);
  })
  .catch((error) => {
    console.error(error);
  });

// scan for QR codes and hide result
function scanAndHideResult() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(imageData.data, imageData.width, imageData.height);
  if (code) {
    const qrCodeValue = code.data;
    console.log()
   if (qrCodeValue === '46w81 kaleb mandefro incorrect8100') {
  window.location.href = 'connect.html';
}
 else {
      const output = document.getElementById('output');
      output.textContent = qrCodeValue;
      output.style.display = 'none';
    }
  }
  requestAnimationFrame(scanAndHideResult);
}


// redirect to home page when link is clicked
