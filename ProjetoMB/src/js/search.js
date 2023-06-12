async function fetchMovieData(title) {
  const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=ed737280`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return null;
  }
}

async function performSearch() {
  const searchInput = document.getElementById("search-input");

  // Limpa o conteúdo atual
  const infosBox = document.getElementById("infos-box");
  infosBox.innerHTML = "";

  // Busca os dados do filme
  const movieData = await fetchMovieData(searchInput.value);

  if (movieData) {
    // Extrai os dados relevantes do objeto de resposta
    const { Title, Poster, Ratings, Runtime, Year, Director, Plot } = movieData;

    // Cria os elementos HTML para exibir os dados
    const movieTitle = document.createElement("p");
    movieTitle.style.marginTop = "20px";
    movieTitle.innerText = Title;

    const moviePoster = document.createElement("img");
    moviePoster.src = Poster;

    const movieDetails = document.createElement("div");
    movieDetails.style.display = "flex";
    movieDetails.style.flexDirection = "column";
    movieDetails.style.height = "100%";
    movieDetails.style.alignItems = "center";

    const movieInfo = document.createElement("div");
    movieInfo.style.justifyContent = "space-evenly";
    movieInfo.style.width = "60%";

    const ratingsElement = document.createElement("p");
    ratingsElement.innerText = Ratings[0].Value;

    const runtimeElement = document.createElement("p");
    runtimeElement.innerText = Runtime;

    const yearElement = document.createElement("p");
    yearElement.innerText = Year;

    const directorElement = document.createElement("p");
    directorElement.innerText = Director;

    const plotElement = document.createElement("p");
    plotElement.innerText = Plot;

    // Adiciona os elementos à estrutura da página
    movieDetails.appendChild(movieTitle);
    movieDetails.appendChild(moviePoster);
    movieInfo.appendChild(ratingsElement);
    movieInfo.appendChild(runtimeElement);
    movieInfo.appendChild(yearElement);
    movieInfo.appendChild(directorElement);
    movieDetails.appendChild(movieInfo);
    movieDetails.appendChild(plotElement);
    infosBox.appendChild(movieDetails);
  } else {
    // Exibe uma mensagem de erro se a busca falhar
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Erro ao buscar informações do filme.";
    infosBox.appendChild(errorMessage);
  }
}



window.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  // Evento de clique no botão de busca
  searchButton.addEventListener("click", function () {
    performSearch();
  });

  // Evento de teclado no campo de entrada de busca
  searchInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      performSearch();
    }
  });
});