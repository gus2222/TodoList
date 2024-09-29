# Lista de Tarefas (Task List)

Este é um aplicativo de lista de tarefas desenvolvido em React. O aplicativo permite que você crie, edite, conclua e exclua tarefas de forma fácil e intuitiva.

## Funcionalidades

- **Criar Tarefa**: Adicione uma nova tarefa com um título (obrigatório) e uma data (opcional).
- **Editar Tarefa**: Edite o título e a data de uma tarefa existente.
- **Concluir/Reabrir Tarefa**: Marque uma tarefa como concluída ou reabra-a.
- **Deletar Tarefa**: Exclua uma tarefa da lista.
- **Visualização de Status**: As tarefas podem ser visualizadas com status "Pendente" (amarelo) ou "Concluída" (verde).

## Tecnologias Utilizadas

- React
- CSS
- Docker (opcional)

## Como Executar o Projeto

### Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/gus2222/TodoList.git
   cd TodoList
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o aplicativo**:
   ```bash
   npm start
   ```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

### Usando Docker

Se você preferir executar o aplicativo usando Docker, siga as instruções abaixo:

1. **Certifique-se de ter o Docker instalado**. Você pode baixar e instalar o Docker [aqui](https://www.docker.com/get-started).

2. **Crie a imagem Docker**:
   ```bash
   docker build -t lista-de-tarefas .
   ```

3. **Execute o contêiner**:
   ```bash
   docker run -p 3000:3000 lista-de-tarefas
   ```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
/lista-de-tarefas
├── /public
├── /src
│   ├── /components
│   │   ├── TaskForm.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   └── AppHeader.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Contribuições

Sinta-se à vontade para contribuir! Abra um *issue* ou envie um *pull request*.

## Licença

Este projeto está sob a [MIT License](LICENSE).

