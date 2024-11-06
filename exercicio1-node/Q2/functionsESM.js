

function mediaNotas(vetor){
    let soma = 0;
    for(let i = 0; i<vetor.length; i++){
        soma += vetor[i]
    }
    const media = soma / vetor.length
    return media
}

function menorNota(vetor){
    vetor.sort(function(a, b) {
      return a - b;
    });
    return vetor[0]
}

function maiorNota(vetor){
    vetor.sort(function(a, b) {
        return a - b;
      });
    var ultimo = vetor[vetor.length - 1]
    return ultimo
}

export {mediaNotas, menorNota, maiorNota}
