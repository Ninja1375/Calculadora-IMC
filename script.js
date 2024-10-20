function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    if (nome.trim() === '') {
        document.getElementById('resultado').innerText = 'Por favor, insira o seu nome.';
        return;
    }
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para altura e peso.';
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').innerHTML = 
        `<span>${nome}</span>, o seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}
