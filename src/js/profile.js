function atualizarPost() {
    const textoPost = document.getElementById("input-texto-post").value;
    const urlBanner = document.getElementById("input-url-banner").value;

    // Cria uma nova div de postagem
    const postagemDiv = document.createElement("div");
    postagemDiv.classList.add("postagem");

    // Cria uma div para a foto do perfil da postagem
    const fotoPerfilDiv = document.createElement("div");
    fotoPerfilDiv.classList.add("foto-perfil-post");
    const fotoPerfilImg = document.createElement("img");
    fotoPerfilImg.src = "../assets/img/perfiluser.png";
    fotoPerfilImg.alt = "img-perfil-post";
    fotoPerfilDiv.appendChild(fotoPerfilImg);
    postagemDiv.appendChild(fotoPerfilDiv);

    // Cria uma div para o texto da postagem
    const textoDiv = document.createElement("div");
    textoDiv.classList.add("texto-post");
    const textoP = document.createElement("p");
    textoP.textContent = textoPost;
    textoDiv.appendChild(textoP);
    postagemDiv.appendChild(textoDiv);

    // Cria uma div para o banner da postagem
    const bannerDiv = document.createElement("div");
    bannerDiv.classList.add("post-banner");
    const bannerImg = document.createElement("img");
    bannerImg.src = urlBanner;
    bannerImg.alt = "banner-post";
    bannerDiv.appendChild(bannerImg);
    postagemDiv.appendChild(bannerDiv);

    // Adiciona a div de postagem ao container de postagens
    const postagensContainer = document.getElementById("postagens-container");
    postagensContainer.appendChild(postagemDiv);

    // Limpa os inputs de texto e imagem
    document.getElementById("input-texto-post").value = "";
    document.getElementById("input-url-banner").value = "";
}
