const url = "https://botafogo-atletas.mange.li/2024-1/";
const pega_json = async (caminho) => {
    const resposta = await fetch (caminho);
    const dados = await resposta.json();
    return dados;
}

const container = document.getElementById("container");

const montaCard = (atleta) =>  {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");
    const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    nome.style.fontFamily = "sans-serif";
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

    link.innerText = "Saiba Mais...";
    link.href = `detalhes.html?id=${atleta.id}`;
    cartao.appendChild(link);
    container.appendChild(cartao);

    return cartao;
};

pega_json(`${url}feminino`).then(
    (r) => {
        r.forEach(
            (ele) => container.appendChild(montaCard(ele))
        )
    }
);

pega_json(`${url}26`).then( (r) => console.log(r));

console.log("isso imprime primeiro.");


