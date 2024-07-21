<!-- 
	FIZ UM VÍDEO NO MEU CANAL (), 
 	MOSTRANDO PASSO-A-PASSO DE COMO
  	UTILIZAR ESSA DESCRIÇÃO
 
-->

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO PROJETO FINALIZADO -->
<h1 align="center"> 
	  🚀✅ Tedyy 360 - Concluído ✅🚀
</h1>

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO MENU DE NAVEGAÇÃO -->
<p align="center">
 <a href="#-Descrição-do-entregável">Descrição do Entregável</a> •
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE DESCRIÇÃO -->
## 📄 Descrição do entregável

<!-- EXEMPLO DE DESCRIÇÃO DE UM PROJETO: -->
- teddy360 (Pasta que armazena a base do projeto de Micro Front-Ends)

- projects (Pasta que agrupa os Micro Front-Ends, modelos e arquivos de stilo globais)
  
- about (MFE responsável pelo "Sobre o Projeto")

- core (MFE host do projeto, reponsável por interligars todos os outros MFEs)

- external-companies (MFE de cadastro do empresas externas)

- list-external-companies (MFE resposável por listar, editar e excluir as empresas externas cadastradas)

- list-partner (MFE resposável por listar, editar e excluir os parceiros cadastrados)

- models (Pasta com os modelos de empresa e parceiro)

- partner (MFE de cadastro de parceiro)

- styles (Pasta contendo todos os estilos globais separados por arquivos)
  

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DESCRIÇÃO SOBRE O PROJETO: -->
## 💻 Sobre o projeto

<!-- EXPLICA O MOTIVO DO PROJETO -->
O teddy360 é um projeto que foi desenvolvido utilizando tecnologias como Angular 15, Material Design, PrimeFlex, TypeScript, JavaScript e SCSS, adotando a abordagem de Micro Front-ends. Iniciei o projeto preparando a estrutura adequada para receber os MFEs e efetuando a configuração do Webpack. Com essa abordagem, tenho componentes, projetos ou páginas independentes, o que permite que cada projeto tenha suas próprias dependências e configurações de build, oferecendo flexibilidade e isolamento. Desenvolvi primeiramente o MFE Core, que atua como orquestrador dos demais MFEs, ou seja, todos estão interligados a ele, mas com a possibilidade de serem executados individualmente. Em seguida, desenvolvi os demais MFEs com suas respectivas funcionalidades.
O sistema em si aborda um CRUD de Parceiros e Empresas Externas, com implementações adicionais como guard, compartilhamento de link e paginação no front (não recomendada).

<!-- LINHA DE DIVISÃO: -->
---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO FUNCIONALIDADES: -->
## ⚙️ Funcionalidades

<!-- EXEMPLO DE FUNCIONALIDADES: -->
- [x] CRUD de Parceiros.
- [x] Listagem de Parceiros cadastrados.
- [x] CRUD de Empresas Externas.
- [x] Listagem de Empresas Externas.
- [x] Redirecionamento para página específica das listagens através do link compartilhado, redirecionando para a página
de Login caso o usuário não esteja logado.
- [x] Após efetuar login, é redirecionado para a url colada no navegador, seja pela rota padrão ou por um link compartilhado.
      

---

<!-- ---------------------------------------------------------------------- -->

<!-- EXEMPLO DE LAYOUT: -->
## 🎨 Layout

<!-- AQUI VOCÊ PASSA O CAMINHO DA IMAGEM -->
![Mobile1](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/login.png)<br>
![Mobile2](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/home.png)<br>
![Mobile3](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/crud-partner.png)
![Mobile1](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/crud-companies.png)<br>
![Mobile2](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/cad-partner.png)<br>
![Mobile3](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/cad-companies.png)<br>
![Mobile3](https://github.com/TawanGMenezes/teddy360/blob/master/_assets/about.png)


---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE COMO EXECUTAR O PROJETO -->
## 🚀 Como executar o projeto

1 - Baixar o Projeto. <br>
2 - Abrir a pasta do projeto no VsCode ou na IDE de sua preferência. <br>
3 - Abra o terminal e execute o comando (npm install). <br>
4 - Rodar o projeto core (ng s core). <br>
5 - Rodar o projeto partner (ng s partner). <br>
6 - Rodar o projeto external-companies (ng s external-companies). <br>
7 - Rodar o projeto list-partner (ng s list-partner). <br>
8 - Rodar o projeto list-external-companies (ng s list-external-companies). <br>
9 - Rodar o projeto about (ng s about). <br>
10 - Abrir o projeto core na porta informada no navegador. <br>
11 - Caso deseja acessar um MFE especifico, altere a porta na url.




<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE PRÉ REQUISITOS -->
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE TECNOLOGIAS -->
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-End**  ([Angular 15](https://v15.angular.io/docs)) 

-   **[Angular Material](https://v15.material.angular.io/)**
-   **[PrimeFlex](https://primeflex.org/)**

#### **Prototipação** (🧠)

- **[Especialista](https://github.com/TawanGMenezes)**

---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO FUNCIONALIDADES: -->
## ⚙️ Tasks Realizadas

<!-- EXEMPLO DE FUNCIONALIDADES: -->
- [x] Criar a estrutura do projeto em MFEs (Micro Front-Ends) para a modularidade e independência dos componentes, integrando o Webpack Module Federation para permitir a carga dinâmica.
- [x] Configuração do roteamento para os determinados projetos e implementação de rotas lazy loading para otimizar o desempenho e a carga inicial do projeto, garantindo que cada MFE tenha sua própria rota configurada e que se integrem corretamente ao core.
- [x] Desenvolver a interface do Login com campos para Usuário e Senha além de suas respectivas validações de formulário e efetuar a estilização do forma que tenha uma aparecia moderna.
- [x] Criar a home do core de gerenciamento dos MFEs, e estilizar para refletir a identidade visual do projeto.
- [x] Implementação da lógica de mudança de MFE dentro do core, garantindo uma comunicação sem interrupções.
- [x] Criar layout MFE do cadastro de parceiro e estilizar de acordo com a identidade visual do projeto, além de fazer as devidas validações no cadastro e persistir os dados na API disponibilizada.
- [x] Criar layout MFE do cadastro de empresas externas e estilizar de acordo com a identidade visual do projeto, além de fazer as devidas validações no cadastro e persistir os dados na API disponibilizada.
- [x] Criar Layout MFE da listagem de parceiro disponibilizando coluna de ações para cara linha da tabela onde irá conter o redirecionamento para as funções de edição e delete além de estilizar de acordo com a identidade visual proposta.
- [x] Implementação das funcionalidades de editar e deletar parceiros.
- [x] Criar modal para atender o delete e o editar de parceiros, criar logicas de operação e estilizar.
- [x] Implementação do compartilhamento de dados da tabela, juntamente com a funcionalidade de verificação de acesso e implementação da logica para realizar o acesso ao link compartilhado em caso de não estar logado.
- [x] Criar Layout MFE da listagem de empresas disponibilizando coluna de ações para cara linha da tabela onde irá conter o redirecionamento para as funções de edição e delete além de estilizar de acordo com a identidade visual proposta.
- [x] Mudança no layout do modal para atender os 2 projetos no que se refere a edição e delete.
- [x] Implementação do guard para verificação se o usuário esta logado e redirecionamento para a url desejada colado ao navegador e não seguindo a rota padrão.
      

---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO FUNCIONALIDADES: -->
## ⚙️ Possíveis Melhorias

<!-- EXEMPLO DE FUNCIONALIDADES: -->
- [x] Deixar todo o projeto compatível com mobile, alterando os layouts principalmente das tabelas para um componente dinâmico em que seja possível visualizar apenas as principais informações e o restante expansível em detalhes. [8hrs]
- [x] Inclusão de novos MFEs, para novos assuntos como: Área de venda de produtos para parceiros cadastrados. [12hr]
- [x] Implementação de um sistema de geolocalização onde o usuário encontraria o parceiro cadastrado mais próximo. [18hrs]    

---

<!-- ---------------------------------------------------------------------- -->
<!-- MODELO DE AUTOR-->
## 🦸 Autor

<a href="https://www.linkedin.com/in/tawan-menezes/">
Tawan Gomes Menezes</a>
 <br />
 
[![Gmail Badge](https://img.shields.io/badge/-tawanmenezes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tawanmenezes@gmail.com)](mailto:tawanmenezes@gmail.com)

---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE LICENÇA -->
## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Tawan Gomes Menezes👋🏽 [Entre em contato!](https://br.linkedin.com/in/tawan-menezes)

