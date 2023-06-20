const button = document.getElementById('Botão');
const nome = document.getElementById('Nome');
const peso = document.getElementById('Peso');
const altura = document.getElementById('Altura') ;
const resultado = document.getElementById('resultado');

const getText = (imc) => {
        if(imc > 40) return 'OBESIDADE III';
        if(imc > 35) return 'OBESIDADE II';
        if(imc > 30) return 'OBESIDADE I';
        if(imc > 25) return 'LEVEMENTE ACIMA DO PESO';
        if(imc > 18.5)  return ' PESO IDEAL';
        return 'ABAIXO DO PESO';
}

const imcCalc = () => {
        const valorImc =(+peso.value / (+altura.value * +altura.value));

        resultado.textContent =`${nome.value}  ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc);