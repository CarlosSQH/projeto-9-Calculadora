function praTela(value){
    document.getElementById('tela').value += value;
}

function calculate() {
    try {
      document.getElementById('tela').value = eval(document.getElementById('tela').value);
    } catch {
      document.getElementById('tela').value = 'Erro';
    }
  }

  function limpatela() {
    document.getElementById('tela').value = '';
  }
