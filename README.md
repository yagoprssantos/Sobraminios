# Projeto Final - Sistema de Registro de Ocorrências

<!-- É só uma base, não é pra fazer muuuuito sentido, então alterem como quiser -->

## Visão Geral

Este repositório GitHub contém o projeto final da disciplina de Programação Web, ministrada pelo professor Gilberto Hiragi. O projeto se concentra no desenvolvimento de um sistema web para o registro e gerenciamento de ocorrências públicas.

## Estrutura do Projeto

O projeto é organizado em várias partes distintas, que incluem:

<!-- Cada () deve conter o link para o respectivo arquivo -->

1. [Plano de Projeto](): Documento que descreve a visão, escopo e estratégia do projeto, além dos papéis de cada integrante.

2. [Modelo de Dados](): Desenvolvido no MySQL Workbench, representa a estrutura do banco de dados utilizado pelo sistema.

3. [Base de Dados com Dados para Testes Reais](): Inclui um backup do banco de dados (.sql) com dados de teste real para a aplicação.

4. [Protótipo em HTML/CSS/JavaScript](): Uma versão inicial da interface do sistema para visualização e testes.

5. [Organização do Projeto Final em MVC](): Divisão do projeto de acordo com o padrão Model-View-Controller.

6. [Camada Model (no Padrão DAO)](): Implementa a lógica de acesso aos dados e as operações de banco de dados.

7. [Camada View final (no Padrão HTML/CSS/JavaScript)](): Responsável pela apresentação e interação com o usuário.

8. [Camada Controller (em Python/Flask)](): Controla a lógica de negócios e a comunicação entre a camada Model e a View.

9. [Apresentação do Projeto (Slides)](): Documento de apresentação que resume os principais aspectos do projeto.


# Sobre o Projeto

O projeto é uma aplicação web que permite aos usuários registrar ocorrências públicas de várias categorias, incluindo lixo, buracos em pistas, assaltos, bueiros sem proteção, placas danificadas, bancos danificados, calçadas danificadas, entre outros. Os usuários podem anexar fotos e vídeos às ocorrências e também datá-las.

## Objetivos do Projeto

- Desenvolver uma aplicação web eficiente e segura para registrar ocorrências públicas.
- Permitir aos usuários o registro de várias categorias de ocorrências, incluindo detalhes, imagens e vídeos.
- Oferecer funcionalidades de pesquisa e visualização de ocorrências baseadas em tipo, área, mapa e horário.
- Facilitar a exportação de dados de ocorrências para formatos Excel, associando-as aos órgãos governamentais responsáveis.

## Equipe do Projeto

A equipe é composta por estudantes da Turma A da disciplina de Programação Web, sendo eles:
<div id="profiles" align="center">
  
  <!-- BASE PARA LINKAR PERFIL (coloquem em ordem alfabética!!)
  <a href="https://github.com/username"><img src="https://img.shields.io/badge/GitHub-username-blue?style=flat-squared&logo=github" alt="GitHub"></a>
  -->
  
  <a href="https://github.com/brunnaruass"><img src="https://img.shields.io/badge/GitHub-brunnaruass-blue?style=flat-squared&logo=github" alt="GitHub"></a>
  <a href="https://github.com/GabrielMousinho"><img src="https://img.shields.io/badge/GitHub-GabrielMousinho-blue?style=flat-squared&logo=github" alt="GitHub"></a>
  <a href="https://github.com/yagoprssantos"><img src="https://img.shields.io/badge/GitHub-yagoprssantos-blue?style=flat-squared&logo=github" alt="GitHub"></a>

</div>

## Cronograma base

### Fase 1: Planejamento (1 semana)

- Definir escopo do projeto e requisitos.
- Designar responsabilidades dentro de cada grupo.
- Criar um plano de desenvolvimento detalhado.

### Fase 2: Desenvolvimento (4 semanas)

- Desenvolver a camada Model (no Padrão DAO) para gerenciamento de dados.
- Criar a camada View final (no Padrão HTML/CSS/JavaScript) para a interface do usuário.
- Implementar a camada Controller (em Python/Flask) para a lógica de negócios.
- Desenvolver funcionalidades de registro e gerenciamento de ocorrências.
- Integrar anexação de fotos e vídeos.
- Implementar recursos de pesquisa e visualização de ocorrências.
- Desenvolver exportação de ocorrências para Excel.

### Fase 3: Testes (1 semana)

- Realizar testes de unidade e integração em cada componente.
- Testar a aplicação com dados de teste real.
- Corrigir e otimizar o código conforme necessário.

### Fase 4: Apresentação (1 semana)

- Preparar a apresentação do projeto para avaliação do coordenador do curso.
- Refinar a documentação e preparar os slides.


Além disso, a aplicação oferece funcionalidades para visualizar as ocorrências com base em diferentes critérios, como tipo, área, localização em mapas e horário. Também é possível exportar dados de ocorrências para um formato Excel, associando-as aos órgãos governamentais responsáveis por cada tipo de ocorrência.
