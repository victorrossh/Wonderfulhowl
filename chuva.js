document.addEventListener("DOMContentLoaded", function() {
    const chuvaContainer = document.querySelector(".chuva");

    for (let i = 0; i < 800; i++) { // Aumentado o número de partículas para 200
        const span = document.createElement("span");
        span.style.left = Math.random() * 100 + "vw";
        span.style.top = Math.random() * 100 + "vh";
        span.style.animationDelay = Math.random() + "s";
        span.style.animationDuration = Math.random() * 1 + 1 + "s"; // Ajustado o intervalo de duração da animação
        chuvaContainer.appendChild(span);
    }
});
