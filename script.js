const produtos = [
    // BEBIDAS
    {
        id: 1,
        nome: "Suco de polpa 300ml",
        descricao: "Abacaxi, acerola, caju, cajá e outros sabores",
        preco: 5.00,
        categoria: "bebidas",
        emoji: "🧃"
    },
    {
        id: 2,
        nome: "Suco natural de laranja 300ml",
        descricao: "Suco natural de laranja",
        preco: 7.00,
        categoria: "bebidas",
        emoji: "🍊"
    },
    {
        id: 3,
        nome: "Café 100ml",
        descricao: "Café com açúcar",
        preco: 3.00,
        categoria: "bebidas",
        emoji: "☕"
    },
    {
        id: 4,
        nome: "Leite 200ml",
        descricao: "Leite puro",
        preco: 3.50,
        categoria: "bebidas",
        emoji: "🥛"
    },
    {
        id: 5,
        nome: "Pingado 200ml",
        descricao: "Leite com café",
        preco: 4.50,
        categoria: "bebidas",
        emoji: "☕"
    },
    {
        id: 6,
        nome: "Achocolatado 200ml",
        descricao: "Leite com achocolatado",
        preco: 4.50,
        categoria: "bebidas",
        emoji: "🥤"
    },
    {
        id: 7,
        nome: "Iogurte",
        descricao: "Iogurte",
        preco: 4.00,
        categoria: "bebidas",
        emoji: "🥛"
    },
    {
        id: 8,
        nome: "Água mineral sem gás 500ml",
        descricao: "Água sem gás",
        preco: 4.00,
        categoria: "bebidas",
        emoji: "💧"
    },
    {
        id: 9,
        nome: "Água mineral com gás 500ml",
        descricao: "Água com gás",
        preco: 4.50,
        categoria: "bebidas",
        emoji: "💧"
    },
    {
        id: 10,
        nome: "Suco de caixinha 200ml",
        descricao: "Suco industrializado",
        preco: 3.00,
        categoria: "bebidas",
        emoji: "🧃"
    },
    {
        id: 11,
        nome: "Água de coco 200ml",
        descricao: "Água de coco industrializada",
        preco: 4.00,
        categoria: "bebidas",
        emoji: "🥥"
    },
    {
        id: 12,
        nome: "Refrigerante lata 310ml",
        descricao: "Coca-Cola, Guaraná e outros sabores",
        preco: 6.00,
        categoria: "bebidas",
        emoji: "🥤"
    },
    {
        id: 13,
        nome: "Energético lata 250ml",
        descricao: "Energético de 1ª linha",
        preco: 15.00,
        categoria: "bebidas",
        emoji: "⚡"
    },

    // DOCES
    {
        id: 14,
        nome: "Chocolate Laka e Diamante Negro 20g",
        descricao: "Chocolate branco ou ao leite",
        preco: 4.00,
        categoria: "doces",
        emoji: "🍫"
    },
    {
        id: 15,
        nome: "Bala Butter Toffee",
        descricao: "Bala sabores diversos",
        preco: 0.80,
        categoria: "doces",
        emoji: "🍬"
    },
    {
        id: 16,
        nome: "Bala 7 Belo",
        descricao: "Bala unitária",
        preco: 0.50,
        categoria: "doces",
        emoji: "🍬"
    },
    {
        id: 17,
        nome: "Chocolate Suflair 50g",
        descricao: "Chocolate ao leite aerado",
        preco: 6.00,
        categoria: "doces",
        emoji: "🍫"
    },
    {
        id: 18,
        nome: "Barra de cereal",
        descricao: "Barra de cereal",
        preco: 3.50,
        categoria: "doces",
        emoji: "🍪"
    },
    {
        id: 19,
        nome: "Bala Halls",
        descricao: "Bala Halls",
        preco: 3.00,
        categoria: "doces",
        emoji: "🍬"
    },
    {
        id: 20,
        nome: "Bala Mentos",
        descricao: "Bala mastigável",
        preco: 4.00,
        categoria: "doces",
        emoji: "🍬"
    },
    {
        id: 21,
        nome: "Trident",
        descricao: "Chiclete",
        preco: 3.50,
        categoria: "doces",
        emoji: "🍬"
    },
    {
        id: 22,
        nome: "Chocolate Talento 25g",
        descricao: "Chocolate ao leite",
        preco: 5.50,
        categoria: "doces",
        emoji: "🍫"
    },
    {
        id: 23,
        nome: "Bombom",
        descricao: "Ouro branco ou sonho de valsa",
        preco: 2.50,
        categoria: "doces",
        emoji: "🍫"
    },
    {
        id: 24,
        nome: "Doce tablete",
        descricao: "Sabores diversos",
        preco: 2.00,
        categoria: "doces",
        emoji: "🍬"
    },
    {
        id: 25,
        nome: "Paçoca",
        descricao: "Paçoca",
        preco: 1.50,
        categoria: "doces",
        emoji: "🥜"
    },
    {
        id: 26,
        nome: "Bolo com calda",
        descricao: "Cenoura, chocolate ou limão",
        preco: 5.00,
        categoria: "doces",
        emoji: "🍰"
    },
    {
        id: 27,
        nome: "Bolo de pote",
        descricao: "Sabores diversos",
        preco: 8.00,
        categoria: "doces",
        emoji: "🍰"
    },
    {
        id: 28,
        nome: "Brownie de chocolate",
        descricao: "Brownie",
        preco: 7.00,
        categoria: "doces",
        emoji: "🍫"
    },
    {
        id: 29,
        nome: "Salada de frutas",
        descricao: "Pote de 250g",
        preco: 7.00,
        categoria: "doces",
        emoji: "🍓"
    },
    {
        id: 30,
        nome: "Açaí 250g + complementos",
        descricao: "Açaí com leite condensado, banana e granola",
        preco: 14.00,
        categoria: "doces",
        emoji: "🍧"
    },

    // SALGADOS FRITOS
    {
        id: 31,
        nome: "Salgados fritos",
        descricao: "Risole, coxinha, enroladinho e quibe",
        preco: 6.50,
        categoria: "fritos",
        emoji: "🥟"
    },
    {
        id: 32,
        nome: "Salgado de hambúrguer",
        descricao: "Hambúrguer e queijo",
        preco: 8.00,
        categoria: "fritos",
        emoji: "🍔"
    },
    {
        id: 33,
        nome: "Empada de frango",
        descricao: "Empada de frango",
        preco: 7.00,
        categoria: "fritos",
        emoji: "🥟"
    },
    {
        id: 34,
        nome: "Enroladinho de queijo e coco",
        descricao: "Queijo, coco e leite condensado",
        preco: 6.50,
        categoria: "fritos",
        emoji: "🥐"
    },
    {
        id: 35,
        nome: "Mini pizza",
        descricao: "Calabresa, frango, napolitana e milho",
        preco: 7.00,
        categoria: "fritos",
        emoji: "🍕"
    },

    // SALGADOS ASSADOS
    {
        id: 36,
        nome: "Pão de queijo",
        descricao: "Pão de queijo",
        preco: 5.00,
        categoria: "assados",
        emoji: "🧀"
    },
    {
        id: 37,
        nome: "Combo mini pizza + refrigerante",
        descricao: "Calabresa, frango, napolitana e milho",
        preco: 11.00,
        categoria: "assados",
        emoji: "🍕"
    },
    {
        id: 38,
        nome: "Combo mini pizza + suco",
        descricao: "Calabresa, frango, napolitana e milho",
        preco: 9.00,
        categoria: "assados",
        emoji: "🍕"
    },
    {
        id: 39,
        nome: "Pão na chapa",
        descricao: "Pão com margarina",
        preco: 3.00,
        categoria: "assados",
        emoji: "🍞"
    },
    {
        id: 40,
        nome: "Pão com queijo",
        descricao: "Pão com queijo",
        preco: 6.00,
        categoria: "assados",
        emoji: "🥖"
    },
    {
        id: 41,
        nome: "Misto quente",
        descricao: "Pão, queijo e presunto",
        preco: 7.00,
        categoria: "assados",
        emoji: "🥪"
    },
    {
        id: 42,
        nome: "Bauru",
        descricao: "Pão, queijo, tomate e orégano",
        preco: 7.00,
        categoria: "assados",
        emoji: "🥪"
    },
    {
        id: 43,
        nome: "Sanduíche natural",
        descricao: "Patê de frango ou presunto e queijo",
        preco: 8.00,
        categoria: "assados",
        emoji: "🥪"
    },
    {
        id: 44,
        nome: "Hambúrguer de carne",
        descricao: "Pão, hambúrguer, queijo, alface e tomate",
        preco: 10.50,
        categoria: "assados",
        emoji: "🍔"
    },
    {
        id: 45,
        nome: "Cachorro-quente",
        descricao: "Pão, molho e salsicha",
        preco: 9.00,
        categoria: "assados",
        emoji: "🌭"
    }
];

let carrinho = [];
let nome = "";
let historico = [];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function entrar() {
    const campo = document.getElementById("nomeUsuario");
    const nomeDigitado = campo.value.trim();

    if (nomeDigitado === "") {
        alert("Digite seu nome para entrar.");
        return;
    }

    nome = nomeDigitado;

    document.getElementById("nomeExibido").textContent = nome;
    document.getElementById("login").classList.add("hidden");
    document.getElementById("appPrincipal").classList.remove("hidden");

    mostrarInicio();
    filtrar("todos");
}

function mostrarPagina(id) {
    document.querySelectorAll(".pagina").forEach(pagina => {
        pagina.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

function mostrarInicio() {
    mostrarPagina("inicio");
}

function filtrar(categoria, botao) {
    if (botao) {
        document.querySelectorAll(".categoria").forEach(item => {
            item.classList.remove("ativa");
        });

        botao.classList.add("ativa");
    }

    const lista = document.getElementById("listaProdutos");

    const filtrados = categoria === "todos"
        ? produtos
        : produtos.filter(item => item.categoria === categoria);

    lista.innerHTML = filtrados.map(produto => `
        <article class="produto">
            <div class="produto-imagem">${produto.emoji}</div>

            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="preco">${formatarPreco(produto.preco)}</div>
            </div>

            <button
                class="adicionar"
                onclick="adicionarCarrinho(${produto.id})"
                aria-label="Adicionar ${produto.nome}"
            >+</button>
        </article>
    `).join("");
}

function adicionarCarrinho(id) {
    const produto = produtos.find(item => item.id === id);

    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();

    alert(${produto.nome} foi adicionado ao carrinho!);
}

function atualizarCarrinho() {
    const quantidadeTotal = carrinho.reduce(
        (total, item) => total + item.quantidade,
        0
    );

    document.getElementById("contadorCarrinho").textContent = quantidadeTotal;
}

function calcularTotal() {
    return carrinho.reduce(
        (total, item) => total + item.preco * item.quantidade,
        0
    );
}

function abrirCarrinho() {
    mostrarPagina("carrinho");
    renderizarCarrinho();
}

function renderizarCarrinho() {
    const lista = document.getElementById("itensCarrinho");

    if (carrinho.length === 0) {
        lista.innerHTML = `
            <p class="vazio">
                Seu carrinho está vazio.<br>
                Adicione algum produto!
            </p>
        `;
    } else {
        lista.innerHTML = carrinho.map(item => `
            <article class="item-carrinho">
                <div class="item-emoji">${item.emoji}</div>

                <div class="item-detalhes">
                    <h3>${item.nome}</h3>
                    <p>${formatarPreco(item.preco * item.quantidade)}</p>

                    <div class="quantidade">
                        <button onclick="alterarQuantidade(${item.id}, -1)">−</button>
                        <span>${item.quantidade}</span>
                        <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
                    </div>
                </div>

                <button
                    class="remover"
                    onclick="removerItem(${item.id})"
                    aria-label="Remover ${item.nome}"
                >🗑️</button>
            </article>
        `).join("");
    }

    document.getElementById("totalCarrinho").textContent =
        formatarPreco(calcularTotal());
}

function alterarQuantidade(id, alteracao) {
    const item = carrinho.find(item => item.id === id);

    if (!item) return;

    item.quantidade += alteracao;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(item => item.id !== id);
    }

    atualizarCarrinho();
    renderizarCarrinho();
}

function removerItem(id) {
    carrinho = carrinho.filter(item => item.id !== id);

    atualizarCarrinho();
    renderizarCarrinho();
}

function abrirPagamento() {
    if (carrinho.length === 0) {
        alert("Adicione produtos ao carrinho antes de continuar.");
        return;
    }

    document.getElementById("totalPagamento").textContent =
        formatarPreco(calcularTotal());

    mostrarPagina("pagamento");
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    const formaPagamento = document.querySelector(
        'input[name="pagamento"]:checked'
    ).value;

    const numero = Math.floor(100 + Math.random() * 900);

    const pedido = {
        numero: numero,
        data: new Date().toLocaleString("pt-BR"),
        itens: carrinho.map(item => ({
            nome: item.nome,
            quantidade: item.quantidade
        })),
        total: calcularTotal(),
        pagamento: formaPagamento,
        status: "Recebido"
    };

    historico.unshift(pedido);

    document.getElementById("numeroPedido").textContent = #${numero};

    carrinho = [];
    atualizarCarrinho();

    mostrarPagina("confirmacao");
}

function mostrarHistorico() {
    mostrarPagina("historico");

    const lista = document.getElementById("listaHistorico");

    if (historico.length === 0) {
        lista.innerHTML = `
            <p class="vazio">
                Você ainda não fez nenhum pedido.
            </p>
        `;
        return;
    }

    lista.innerHTML = historico.map(pedido => `
        <article class="pedido-anterior">
            <div class="pedido-topo">
                <h3>Pedido #${pedido.numero}</h3>
                <span class="status">${pedido.status}</span>
            </div>

            <p>
                ${pedido.data}<br>
                ${pedido.itens.map(item =>
                    ${item.quantidade}x ${item.nome}
                ).join("<br>")}
            </p>

            <p>
                Pagamento: ${pedido.pagamento}
            </p>

            <strong>Total: ${formatarPreco(pedido.total)}</strong>
        </article>
    `).join("");
}

function sair() {
    const confirmar = confirm("Deseja sair do aplicativo?");

    if (!confirmar) return;

    nome = "";
    carrinho = [];

    atualizarCarrinho();

    document.getElementById("appPrincipal").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("nomeUsuario").value = "";
}