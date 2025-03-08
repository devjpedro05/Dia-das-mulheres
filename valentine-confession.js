$(document).ready(function () {
    let clickCount = 0; // Contador de cliques no coração

    $(".heart").on("click", function () {
        clickCount++;

        if (clickCount === 1) {
            // Primeira interação: Mostrar mensagem
            $(".message").removeClass("closed no-anim").addClass("openNor").fadeIn(1000);
            $(".heart").addClass("openedHer"); // Aplica a animação de movimento para baixo do coração
            $(".instruction").text("Clique novamente no coração!");
            console.log("Mensagem exibida");
        } else if (clickCount === 2) {
            // Segunda interação: Esconder a mensagem e exibir flor + estrelas
            
            // Esconder a mensagem e iniciar animação do coração
            $(".message").fadeOut(1000); // Esconde a mensagem após o clique
            
            // Exibir a flor e as estrelas após a animação de desaparecimento da mensagem
            $(".message").fadeOut(1000, function () {
                $(".container, .stars1, .stars2, .stars3").fadeIn(2000).addClass("show-flower");
            });

            $(".instruction").fadeOut(500); // Esconde a instrução
            console.log("Flor e estrelas exibidas");
        }
    });
});
