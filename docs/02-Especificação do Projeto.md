# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Esse projeto foi construído por uma equipe que através de nosso idealizador principal, notou que há muitas pessoas que precisam de apenas um lugar em específico para conseguir assistir e deixar a sua opinião sobre o mesmo, e também entenderem mais sobre o que as outras pessoas acharam sobre o que foi assistido. Vale lembrar que essa necessidade foi apontada através de percepções em vários streamings que não possuem esse diferencial.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

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
