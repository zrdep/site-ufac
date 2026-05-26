const livros = [
{
    id:1,
    titulo:"Dom Casmurro",
    autor:"Machado de Assis",
    disponivel:true
},
{
    id:2,
    titulo:"1984",
    autor:"George Orwell",
    disponivel:true
},
{
    id:3,
    titulo:"O Pequeno Príncipe",
    autor:"Antoine de Saint-Exupéry",
    disponivel:true
},
{
    id:4,
    titulo:"Harry Potter e a Pedra Filosofal",
    autor:"J.K. Rowling",
    disponivel:false
}
];

let meusLivros = [
{
    id:10,
    titulo:"Clean Code",
    autor:"Robert C. Martin",
    dataLocacao:"01/06/2026",
    dataDevolucao:"15/08/2026",
    renovacoes:1,
    maxRenovacoes:2
},
{
    id:11,
    titulo:"Algoritmos",
    autor:"Thomas Cormen",
    dataLocacao:"05/06/2026",
    dataDevolucao:"10/07/2026",
    renovacoes:2,
    maxRenovacoes:2
}
];

function mostrarMensagem(texto){

    const msg = document.getElementById("mensagem");

    msg.textContent = texto;
    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);
}

function renderizarAcervo(){

    const container = document.getElementById("acervo");
    container.innerHTML = "";

    livros.forEach(livro => {

        const div = document.createElement("div");
        div.className = "livro";

        div.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p class="status ${livro.disponivel ? 'disponivel' : 'emprestado'}">
                ${livro.disponivel ? 'Disponível para locação' : 'Indisponível'}
            </p>
        `;

        if(livro.disponivel){

            const btn = document.createElement("button");
            btn.className = "locar";
            btn.textContent = "Locar Livro";
            btn.onclick = () => locarLivro(livro.id);

            div.appendChild(btn);
        }

        container.appendChild(div);
    });
}

function renderizarMeusLivros(){

    const container = document.getElementById("meusLivros");
    container.innerHTML = "";

    meusLivros.forEach(livro => {

        const podeRenovar =
            livro.renovacoes < livro.maxRenovacoes;

        const div = document.createElement("div");
        div.className = "livro";

        div.innerHTML = `
    <h3>${livro.titulo}</h3>

    <p><strong>Autor:</strong> ${livro.autor}</p>

    <p>
        <strong>📅 Data da Locação:</strong>
        ${livro.dataLocacao}
    </p>

    <p>
        <strong>⏳ Devolver até:</strong>
        ${livro.dataDevolucao}
    </p>

    <p>
        <strong>🔄 Renovações:</strong>
        ${livro.renovacoes}/${livro.maxRenovacoes}
    </p>
`;

        const btn = document.createElement("button");

        if(podeRenovar){
            btn.className = "renovar";
            btn.textContent = "Renovar Locação";
            btn.onclick = () => renovarLivro(livro.id);
        } else {
            btn.className = "bloqueado";
            btn.textContent = "Renovação não permitida";
            btn.disabled = true;
        }

        div.appendChild(btn);
        container.appendChild(div);
    });
}

function locarLivro(id){

    const livro = livros.find(l => l.id === id);

    if(!livro) return;

    livro.disponivel = false;

    meusLivros.push({
        id: Date.now(),
        titulo: livro.titulo,
        autor: livro.autor,
        dataDevolucao:"30/06/2026",
        renovacoes:0,
        maxRenovacoes:2
    });

    mostrarMensagem(`Livro "${livro.titulo}" locado com sucesso!`);

    renderizarAcervo();
    renderizarMeusLivros();
}

function renovarLivro(id){

    const livro = meusLivros.find(l => l.id === id);

    if(!livro) return;

    if(livro.renovacoes < livro.maxRenovacoes){

        livro.renovacoes++;

        mostrarMensagem(
            `Locação renovada para "${livro.titulo}" com sucesso!`
        );

        renderizarMeusLivros();
    }
}

renderizarAcervo();
renderizarMeusLivros();