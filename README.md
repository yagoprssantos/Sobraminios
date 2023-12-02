# Branch SQL - Arquivos SQL do Banco de Dados

Esta branch contém todos os arquivos SQL necessários para o gerenciamento do banco de dados do projeto sistema de registro de ocorrências em condomínios.

## Estrutura de Pastas e Arquivos

### Pasta Dumps

- **dump.sql**: Este arquivo contém um dump do banco de dados pronto para restauração. Ele inclui a estrutura do banco de dados juntamente com os dados, oferecendo uma cópia exata do estado do banco de dados em um determinado momento.

### Pasta Scripts

- **create_database.sql**: Script responsável pela criação do banco de dados `condominio_ocorrencias_db`. Contém as instruções SQL para criar as tabelas e suas relações conforme descrito na seção anterior.

- **data_injection.sql**: Este arquivo contém scripts de injeção de dados iniciais para popular o banco de dados com informações de exemplo. Os dados inseridos podem ser utilizados para testes e demonstrações.

## Utilização

Para utilizar os arquivos contidos nesta branch, siga os seguintes passos:

1. **Restauração do Banco de Dados**:
   - Utilize o arquivo `dump.sql` para restaurar o banco de dados com todas as estruturas de tabelas e dados. Você pode importar esse arquivo em um servidor MySQL usando um software como o MySQL Workbench ou através de comandos no terminal.

2. **Criação do Banco de Dados (se necessário)**:
   - Execute o script `create_database.sql` para criar o banco de dados `condominio_ocorrencias_db` caso não esteja disponível.

3. **Injeção de Dados (opcional)**:
   - Se desejar dados de exemplo, execute o script `data_injection.sql` para preencher as tabelas do banco de dados com informações fictícias.

## Importante

- Certifique-se de ter um ambiente MySQL configurado e acessível para executar os scripts.
- Antes de executar os scripts de criação ou injeção de dados em um ambiente de produção, faça um backup dos dados existentes para evitar perda de informações importantes.

Este README fornece uma visão geral dos arquivos SQL nesta branch. Se precisar de mais detalhes ou assistência, não hesite em contatar a equipe responsável pelo projeto.
