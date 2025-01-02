#### Trabalhando com Decorators

#### 1. Iniciar o package.json

```bash
npm init -y
```

Observação para atualizar o npm **npm install -g npm@11.0.0** nesse momento

#### 2. Instalar o typescript em ambiente de desenvolvimento

```bash
npm i typescript -D
```

Observação

Caso queira pode-se instalar o typescript de forma global com o comando **npm i -g typescript** isso influencia na utilização
pois não será mais necessário a utilização do comando **npx** somente **tsc ...**

#### 3. Rodar arquivo \*\*\*.ts

- Nesse caso estou usando o arquivo main.ts
- para gerar(build) o arquivo \*.js a partir do no arquivo main.ts execute o comando:

```bash
npx tsc main.ts
```

- Teste o arquivo com

```bash
node main.js
```

#### 4. Criando o arquivo de configuração do typescript

```bash
npx tsc --init
```

- Será criado o tsconfig.json, faça uma alteração, descomente a linha **outDir** e coloque e atribua o valor **"outDir": "./dist"**
- Procure por `experimentalDecorators` e descomente essa linha

#### Como funciona

Segue o código reorganizado e comentado, explicando o que está acontecendo em cada trecho:

```typescript
/**
 * Decorador para aplicar validação de comprimento mínimo em uma propriedade.
 * @param length - Comprimento mínimo exigido para o valor da propriedade.
 */
function minLength(length: number) {
  // Retorna o decorador real, que será aplicado na propriedade
  return (target: any, key: string) => {
    // Armazena o valor inicial da propriedade
    let val = target[key];

    // Getter: Retorna o valor da propriedade
    const getter = () => val;

    // Setter: Define o valor da propriedade, com validação
    const setter = (value: string) => {
      if (value.length < length) {
        // Lança um erro se o comprimento for menor que o exigido
        throw new Error(
          `Value for ${key} needs to have at least ${length} characters.`
        );
      }
      val = value; // Define o valor se a validação for bem-sucedida
    };

    // Define a propriedade com o getter e o setter personalizados
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

/**
 * Classe `Category` que utiliza o decorador `minLength` para validar o título.
 */
class Category {
  @minLength(3) // Aplica o decorador para exigir que o título tenha pelo menos 3 caracteres
  private title: string;

  /**
   * Construtor da classe.
   * @param t - Título da categoria.
   */
  constructor(t: string) {
    this.title = t; // Validação ocorre aqui ao definir o título
  }
}

// Exemplo de uso: Criação de uma instância da classe `Category`
console.log(new Category("Mobile")); // Instância criada com sucesso

// Exemplo de erro: Título com menos de 3 caracteres
// console.log(new Category('Io')); // Lança um erro: "Value for title needs to have at least 3 characters."

export default {};
```

---

### Explicação Detalhada

1. **Decorador `minLength`:**

   - **Recebe um comprimento mínimo como argumento (`length`).**
   - **Retorna uma função decoradora** que modifica o comportamento do campo decorado.
   - Utiliza `Object.defineProperty` para interceptar as operações de leitura (`get`) e escrita (`set`) no campo decorado.
   - Se o valor atribuído for menor que o comprimento mínimo, lança um erro.

2. **Classe `Category`:**

   - A propriedade `title` é privada e decorada com `@minLength(3)`.
   - Ao atribuir um valor ao `title` (no construtor ou em qualquer outro lugar), o decorador intercepta a operação e aplica a validação.

3. **Exemplo de Uso:**
   - `new Category('Mobile')`: Instância criada com sucesso, já que "Mobile" tem mais de 3 caracteres.
   - `new Category('Io')`: Lança um erro porque "Io" tem menos de 3 caracteres.

---

### Benefícios do Decorador

- Centraliza a lógica de validação, tornando o código mais limpo.
- Reutilizável: O decorador pode ser aplicado a qualquer propriedade de qualquer classe.
- Aplicado automaticamente ao criar ou modificar o campo decorado.

#### Compreensão

Imagine que você tem uma casa e quer adicionar um **alarme** na porta. O alarme não muda a porta em si; a porta ainda abre e fecha como antes. Mas agora, **toda vez que você usar a porta, o alarme verifica o que está acontecendo** — se alguém tenta forçar a porta, o alarme dispara.

Os **decorators** no código funcionam como esse alarme. Eles adicionam funcionalidades extras a alguma coisa (como uma função, classe ou propriedade) sem precisar alterar diretamente o que já existe.

---

#### Como Funciona em Código

1. **O que você tem:**

   - Você começa com algo simples, como uma propriedade ou função.

2. **O que o decorator faz:**

   - Ele "envolve" o que você já tem e adiciona algo extra. Pode ser uma validação, um log (mensagem), ou qualquer outro comportamento.

3. **Quando é ativado:**
   - O decorator entra em ação automaticamente quando a propriedade ou função decorada é usada.

---

### Exemplo Real: Senha com Validação

Imagine que você tem um cofre e quer garantir que as senhas tenham **pelo menos 5 caracteres**. O decorator seria como uma pessoa que verifica cada senha antes de você usá-la:

```typescript
function minLength(length: number) {
  return (target: any, key: string) => {
    let value = target[key]; // Valor original da propriedade

    const getter = () => value; // Função que retorna o valor
    const setter = (newValue: string) => {
      if (newValue.length < length) {
        throw new Error(`${key} precisa ter pelo menos ${length} caracteres.`);
      }
      value = newValue; // Atualiza o valor se estiver tudo certo
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Cofre {
  @minLength(5) // Decorator para validar a senha
  senha: string;

  constructor(senha: string) {
    this.senha = senha; // Aqui o decorator valida a senha
  }
}

// Criando um cofre com uma senha válida
const meuCofre = new Cofre("segura");
console.log("Senha configurada com sucesso!");

// Tentando criar um cofre com uma senha inválida
// const outroCofre = new Cofre('123'); // Isso lançará um erro.
```

---

### Traduzindo para Termos Leigos

1. **Propriedade sem decorator:**

   - Qualquer valor é aceito, sem regras.

2. **Propriedade com decorator:**

   - Agora a "senha" passa por uma "checagem" (o decorator) antes de ser aceita.

3. **Vantagens:**
   - Você não precisa se preocupar em lembrar de verificar a senha toda vez; o decorator faz isso automaticamente.

---

### Por Que Decorators São Úteis?

- **Automação:** Eles fazem o trabalho repetitivo por você.
- **Organização:** Deixam o código mais limpo, porque a lógica extra (como validação) fica separada.
- **Reutilização:** Você pode usar o mesmo decorator em vários lugares.

### O que está acontecendo

1. **Decorador `Get`:**

   - Serve como um interceptador que verifica se a URL passada como argumento coincide com a URL simulada (`/contato`).
   - Se a URL coincidir, o método decorado é executado.

2. **Classe `HomeController`:**

   - Possui dois métodos decorados:
     - `index`: Decorado com `@Get('/')`, mas **não é executado** porque a URL atual não coincide.
     - `contact`: Decorado com `@Get('/contato')` e **é executado** porque a URL atual coincide.

3. **Resultado na Execução:**
   - Ao criar uma instância de `HomeController`, o método `contact` é chamado porque o decorador verificou que a URL passada (`/contato`) coincide com a URL simulada.

---

### Saída do Código

```
HomeController@contato
```

### Observação

Este exemplo simula como decoradores podem ser usados para criar uma lógica de roteamento em um framework. Na prática, frameworks como NestJS implementam algo semelhante para mapear rotas HTTP em métodos de controladores.
