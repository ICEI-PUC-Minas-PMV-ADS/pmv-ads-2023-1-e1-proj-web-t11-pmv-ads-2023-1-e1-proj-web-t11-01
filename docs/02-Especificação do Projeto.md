# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Esse projeto foi construído por uma equipe que através de nosso idealizador principal, notou que há muitas pessoas que precisam de apenas um lugar em específico para conseguir assistir e deixar a sua opinião sobre o mesmo, e também entenderem mais sobre o que as outras pessoas acharam sobre o que foi assistido. Vale lembrar que essa necessidade foi apontada através de percepções em vários streamings que não possuem esse diferencial.

## Personas

Luisa Almeida tem 17 anos, e é uma estudante que está terminando o último ano da escola. Ela é apaixonada por fotografia, música indie e escrever sobre questões sociais. Ela adora sair com seus amigos e experimentar novos cafés e bares na cidade. Costuma usar os aplicativos Instagram, Twitter, Linkedin, TikTok, Kindle e Netflix. Busca falar sobre os filmes que gosta com os amigos e deseja deixar sua opinião para os seus amigos sobre as suas séries favoritas. E tem dificuldade em encontrar um site onde pode deixar sua opinião sobre suas mídias favoritas.

Marcos Oliveira tem 35 anos,ele é um executivo de uma empresa de tecnologia. É casado e tem um filho de 6 anos. Ele é muito ocupado com o trabalho, mas tenta equilibrar sua vida pessoal e profissional. Gosta de fazer exercícios, ler livros de negócios e viajar com sua família. Costuma usar os aplicativos Facebook, Linkedin, Instagram, Kindle e Amazon Prime. Pretende passar mais tempo com o seu filho assistindo desenhos de super heróis, além de buscar assistir filmes românticos com sua esposa durante a noite. Infelizmente perde muito tempo procurando em sites vários o que assistir com o seu filho.

Rafaela Dias tem 45 anos, é uma advogada que trabalha em uma empresa de grande porte. É solteira e não tem filhos, mas adora seus sobrinhos. Gosta de fazer trilhas, nadar e ir a concertos de música clássica. Ela também gosta de cozinhar e experimentar novas receitas. Utiliza os aplicativos Linkedin, Instagram e HBO Max. Gostaria de assistir séries sobre histórias com seus sobrinhos e busca também está por dentro do que há de novo no mundo dos filmes e séries. Encontra dificuldade de saber qual filme assistir quando não encontra muitas avaliações em sua categoria favorita.

Rodrigo Marques tem 55 anos, é um empresário que possui sua própria empresa de construção. É casado e tem dois filhos adultos. Gosta de jogar golfe, fazer viagens de moto e ler livros sobre história e política. Também é um amante da gastronomia e gosta de cozinhar para sua família e amigos. Utliza os aplicativos Linkedin, Instagram e Apple Tv. Quer assistir mais documentários sobre assuntos intrigantes e busca analisar as opiniões de seus amigos e debater sobre tal mídia assistida. Não consegue deixar sua opinião sobre suas mídias assistidas, para gerar debates bem construtivos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luísa Almeida   | Comunicar com pessoas com o mesmo gosto de filmes, series.           | Para saber a opinião delas sobre os filmes.               |
|Marcos Oliveira      | Visualizar os filmes que estão em alta.                 | Gastar menos tempo procurando filme. |
|Rafaela Dias       | Compartilhar com meus amigos os filmes que estou vendo ultimamente.                 | Para que tenhamos mais assuntos envolvendo filmes, series. |
|Rodrigo Marques       | Fazer comentários em filmes que as pessoas estão vendo.                 | Ajudar pessoas com comentários e avaliações se o filme vale a pena ou não. |

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

Os requisitos do projeto abordam algumas das funcionalidades essenciais do site para uma projeção adequada de boa acessibilidade, estruturação harmoniosa e a boa usabilidade do site para o público-alvo. Entre estes requisitos, alguns são classificados como requisitos funcionais que descrevem as aplicações de interação com o usuário, já os requisitos não funcionais são aqueles que o sistema do site deverá apresentar para atender as demandas dos usuários. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar uma seção de cadastro/login  | ALTA | 
|RF-002| O site deve ter uma página principal onde deve apresentar as principais mídias do momento.    | ALTA |
|RF-003| O site deve apresentar, para cada mídia, uma imagem correspondente ao assunto apresentado (thumbnail)  | MÉDIA | 
|RF-004| O site deve permitir ao usuário visualizar o texto completo da sinopse da mídia com todos os detalhes da publicação    | MÉDIA |
|RF-005| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar as mídias de sua preferência. | ALTA | 
|RF-006| O site deve permitir visualizar as informações de contatos dos responsáveis pelo site    | BAIXA |
|RF-007| O site deve permitir o compartilhamento de avaliações das mídias assistidas em seu feed. | BAIXA | 
|RF-008| O site deve permitir salvar mídias preferidas    | BAIXA |
|RF-009| O site deve permitir verificar as mídias salvas como preferidas no perfil do usuário  | BAIXA | 
|RF-0010| O site deve permitir que usuários possam comentar mídias    | ALTA |
|RF-0011| O site deve exibir os comentários registrados juntamente com a mídia exibida  | ALTA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em diversos dispositivos de forma adequada  |  ALTA | 
|RNF-003| O site deve ser intuitivo e ter um designe agradável.  |  ALTA | 
|RNF-004|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Opera)  |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023.|
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|
|04| Todos os membros do grupo devem ser responsáveis por cada parte do Trabalho.|
|05| Todos os membros do grupo devem ser responsáveis por cada parte do Trabalho.|

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
