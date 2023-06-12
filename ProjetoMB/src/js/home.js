// Dados de exemplo para preencher a div
const commentData = [
    {
      userImage: '../assets/img/user1.png',
      userName: 'Rodrigo Santos',
      comment: 'The Office é uma das melhores séries de humor que já assisti. Na 1a temporada o tom do humor ainda está sendo ajustado mas da segunda em diante fica imperdível. Dá uma esfriada na 8a com a saída do Steve Carrel mas ainda assim vale a pena assistir até o final. Muitos personagens coadjuvantes roubam a cena e nos cativam. Stanley, Kevin, e o Creed são os meus preferidos.',
      bannerImage: '../assets/img/banner/banner_to.webp'
    },
    {
      userImage: '../assets/img/user2.png',
      userName: 'Elena Gomes',
      comment: 'John Wick é um filme de ação eletrizante com cenas de luta impressionantes e uma trama envolvente. Keanu Reeves brilha como o protagonista, trazendo carisma e intensidade. A coreografia de luta é incrível e a cinematografia é estilizada. Recomendo para os fãs de ação que buscam um filme emocionante e cheio de adrenalina!',
      bannerImage: '../assets/img/banner/banner_wick.jpg'
    },
    {
      userImage: '../assets/img/user1.png',
      userName: 'Rodrigo Santos',
      comment: 'Attack on Titan é um anime de tirar o fôlego, repleto de ação e reviravoltas. A história é cativante, com uma trama envolvente que mantém você vidrado a cada episódio. Os personagens são bem desenvolvidos e as batalhas contra os titãs são emocionantes. A animação é de alta qualidade, capturando os detalhes dos combates e transmitindo toda a intensidade da história.',
      bannerImage: '../assets/img/banner/banner_att.webp'
    },
    {
      userImage: '../assets/img/user2.png',
      userName: 'Elena Gomes',
      comment: 'One Piece é um anime emocionante, com uma história envolvente e personagens carismáticos. A jornada dos Chapéus de Palha em busca do tesouro One Piece é repleta de ação e momentos emocionantes. Recomendo para os fãs de animes que procuram uma aventura empolgante e cheia de diversão!',
      bannerImage: '../assets/img/banner/banner_op.jpg'
    }
  ];
  
  // Função para preencher a div com os dados
  function populateCommentBox(data) {
    const commentBox = document.getElementById("comment-box");
  
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment"); // Adiciona a classe "comment" ao elemento
    commentElement.innerHTML = `
      <div>
        <div class="comment-box-user" style="width: 25%; justify-content: start; align-items: center;">
          <img id="comment-img" src="${data.userImage}" alt="user-1" width="200px" height="200px">
          <p id="comment-user">${data.userName}</p>
        </div>
        <div style="width: 50%; display: flex; justify-content: center; padding: 20px;">
          <p id="comment-description">${data.comment}</p>
        </div>
        <div class="comment-box-user" style="width: 25%; justify-content: center; align-items: center;">
          <img id="comment-banner" src="${data.bannerImage}" alt="bannet_to" width="95%" height="95%">
        </div>
      </div>
    `;
  
    commentBox.appendChild(commentElement);
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    const commentDataCopy = [...commentData]; // Cria uma cópia dos dados de comentários para a busca
  
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    // Função para realizar a busca
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
  
      const comments = document.querySelectorAll(".comment");
      comments.forEach(comment => {
        const commentText = comment.querySelector("#comment-description").innerText.toLowerCase();
        if (commentText.includes(searchTerm)) {
          comment.style.display = "block";
        } else {
          comment.style.display = "none";
        }
      });
    }
  
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
  
    commentDataCopy.forEach(comment => {
      populateCommentBox(comment);
    });
  });
  