function drawMonogram() {
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 48, 48);

    ctx.font = 'bold 42px Arial';
    ctx.fillStyle = '#fff';  // Weißer Text
    ctx.fillText('3x', 0, 40);

    return canvas;
}

function setIcon() {
    const canvas = drawMonogram();
    const imageData = canvas.getContext('2d').getImageData(0, 0, 48, 48);
    chrome.browserAction.setIcon({ imageData: imageData });
}

setIcon();
