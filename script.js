function verificarRespostas() {
    let pontuacao = 0;
    let feedback = document.getElementById('feedback');
    
    // Respostas corretas
    let respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'a',
        q4: 'c'
    };
    
    // Verificar respostas
    let form = document.forms['quizForm'];
    for (let q = 1; q <= 4; q++) {
        let respostaSelecionada = form['q' + q].value;
        if (respostaSelecionada === respostasCorretas['q' + q]) {
            pontuacao++;
        }
    }
    
    // Exibir feedback
    if (pontuacao === 4) {
        feedback.textContent = "Parabéns! Você acertou todas as questões!";
        feedback.style.color = '#2ecc71';
    } else {
        feedback.textContent = "Você acertou " + pontuacao + " de 4. Tente novamente!";
        feedback.style.color = '#e74c3c';
    }
}
