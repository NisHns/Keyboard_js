function showKeyInfo() {
  const keyButton = document.getElementById('keyButton');
  const refreshButton = document.getElementById('refreshButton');
  const keyBox = document.getElementById('keyBox');
  const codeBox = document.getElementById('codeBox');

  document.addEventListener('keydown', function (event) {
    const key = event.key;
    const keyCode = event.keyCode;


    playKeySound();

    keyBox.innerHTML = `You Pressed: <span style="color: blue;">${key}</span>`;
    keyBox.style.display = 'block';

    codeBox.innerHTML = ` <span style="color: green; font-weight:bold">${keyCode}</span>`;
    codeBox.style.display = 'block';

    keyButton.style.display = 'none';
    refreshButton.style.display = 'inline-block';
  });
}

function refresh() {
  const keyButton = document.getElementById('keyButton');
  const refreshButton = document.getElementById('refreshButton');
  const keyBox = document.getElementById('keyBox');
  const codeBox = document.getElementById('codeBox');

  keyButton.style.display = 'inline-block';
  refreshButton.style.display = 'none';

  keyBox.innerHTML = '';
  keyBox.style.display = 'none';
  codeBox.innerHTML = '';
  codeBox.style.display = 'none';
}

function playKeySound() {
  const audio = new Audio('dore-dore.mp3');
  audio.play();
}