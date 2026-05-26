document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {

            const pagina = card.getAttribute("data-page");

            console.log("Abrindo:", pagina);

            if (pagina) {
                window.location.href = pagina;
            }

        });
    });

});