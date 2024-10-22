### Projeto prático do quarto nivel de formação do curso ReactJS da plataforma Rocketseat

Aplicação dashboard de administrador para pizzaria, que contem as funcionalidades:
- login/cadastro de novo restaurante
- alteração dos dados do restaurante
- dados informativos: receita total no mes; pedidos totais no mês e no dia; cancelamentos no mes
- graficos de receita no periodo(com filtro), e grafico de produtos mais populares
- página de pedidos, com tabela listando todos os pedidos, seus respectivos status, e possiveis ações
- filtro para os pedidos, por ID, Nome ou Status
- paginação para listagem de pedidos

#### Ferramentas utilizadas:
- Vite
- React Router DOM(rotas)
- tailwind(css)
- eslint(linting)
- React Hook Form(formularios e validações)
- Shadcn/ui(gráficos e interface)
- Tanstack React Query(cache e paginação)
- Vitest e React Testing Library(para testes unitários)
- Mock Service Work(para criação de mocks - testes e2e)
- playwright(biblioteca de automatização - testes e2e)
- axios(chamadas http)

API backend usada para integração(em node.js): https://github.com/rocketseat-education/pizzashop-api

### Para rodar(Front):
- git clone 
- npm i
- "npm run dev" para inicializar a aplicação

### Para rodar(API):
- git clone
- bun install
- necessario iniciar o container, rodar no terminal "docker compose up -d" (comando "docker ps" para ver o container rodando)
- rode "bun migrate" para criação das tabelas
- rode "bun seed" para popular com dados ficticios o banco postgres
- rode "bun dev" para inicializar a aplicação

### Por fim,
- acessar: http://localhost:5173/sign-in
- digite o email admin@admin.com
- no terminal do projeto back-end, copie o link e cole no navegador

(é possivel criar um novo estabelecimento na página de login)

### Para rodar o ambiente de testes(não é necessario a API):
- rodar no terminal do front: "npm run dev:test"
- acessar: http://localhost:50789/
(Para rodar os testes e2e, utilizando os mocks, rodar "npx playwright test --ui")


![pizza-shop-1](https://github.com/user-attachments/assets/140cb477-2684-4508-871d-b3763bdbe26a)
  
![pizza-shop-2](https://github.com/user-attachments/assets/379d8a72-9da1-449a-bbb8-c4c583270d3a)

