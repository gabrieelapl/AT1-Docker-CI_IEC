## ⚡ Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v22 ou superior)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (ativo e rodando)

---

### 1. Clonar o Repositório

Abra o terminal e execute:

```bash
git clone https://github.com/gabrieelapl/AT1-Docker-CI_IEC.git
cd AT1-Docker-CI_IEC
```

---

### 2. Instalar Dependências e Ativar Git Hooks

Na raiz do repositório, execute:

```bash
pnpm install
```

Esse comando instala as dependências do projeto e configura os hooks do **Husky**.

---

### 3. Subir os Contêineres

Certifique-se de que o **Docker Desktop** está aberto e execute:

```bash
docker compose up -d
```

O Docker iniciará automaticamente os dois serviços principais:

- **API Node.js:** disponível na porta `3000`
- **PostgreSQL:** disponível na porta `5432`

---

## 🔍 Endpoints Principais para Teste

Após subir os contêineres, a aplicação poderá ser testada através dos seguintes endpoints:

### Healthcheck

Verifica se a aplicação está funcionando corretamente:

```text
http://localhost:3000/api/health
```

### Documentação Swagger UI

Acessa a documentação interativa da API:

```text
http://localhost:3000/api-docs
```

### Listagem de Filmes

Retorna a lista de filmes cadastrados:

```text
http://localhost:3000/api/filmes
```

---

## 🧪 Validando a Qualidade do Código e CI/CD

### Verificações Manuais

Entre na pasta `backend`:

```bash
cd backend
```

### ESLint

Executa a verificação do código utilizando o ESLint:

```bash
pnpm run lint
```

### Prettier

Verifica se os arquivos estão formatados corretamente:

```bash
pnpm run format:check
```

### Corrigir Formatação

Corrige automaticamente problemas de formatação:

```bash
pnpm run format:fix
```

### TypeScript

Executa a checagem de tipos do TypeScript:

```bash
pnpm run type-check
```

---

## 🔄 Automações Ativas

### 1. Husky — Pre-commit Hook

O **Husky** executa automaticamente verificações de qualidade antes de cada `git commit`.

Entre as verificações realizadas estão:

- ESLint
- Prettier
- TypeScript

Caso alguma verificação apresente erro, o commit será bloqueado até que o problema seja corrigido.

---

### 2. GitHub Actions

A cada `git push` para a branch `main`, o workflow de **GitHub Actions** é executado automaticamente.

A esteira realiza as validações necessárias para garantir que o projeto esteja funcionando corretamente em um ambiente limpo, incluindo:

- Instalação das dependências
- Verificação de qualidade do código
- Testes
- Build da aplicação
- Construção da imagem Docker

O workflow utilizado está localizado em:

```text
.github/workflows/ci.yml
```

---

## 🐳 Comandos Docker

### Iniciar os Contêineres

```bash
docker compose up -d
```

### Visualizar os Contêineres em Execução

```bash
docker compose ps
```

### Visualizar os Logs

```bash
docker compose logs
```

Para acompanhar os logs em tempo real:

```bash
docker compose logs -f
```

### Parar os Contêineres

```bash
docker compose down
```

### Parar os Contêineres e Remover os Volumes

```bash
docker compose down -v
```

> ⚠️ O comando `docker compose down -v` também remove os volumes associados ao banco de dados PostgreSQL. Isso pode resultar na perda dos dados armazenados no banco.

---

## 📌 Resumo dos Comandos Principais

```bash
# Clonar o projeto
git clone https://github.com/gabrieelapl/AT1-Docker-CI_IEC.git

# Entrar no projeto
cd AT1-Docker-CI_IEC

# Instalar dependências
pnpm install

# Subir os containers
docker compose up -d

# Verificar containers
docker compose ps

# Entrar na pasta backend
cd backend

# Verificar lint
pnpm run lint

# Verificar formatação
pnpm run format:check

# Corrigir formatação
pnpm run format:fix

# Verificar tipos TypeScript
pnpm run type-check

# Voltar para a raiz
cd ..

# Parar os containers
docker compose down
```

---

