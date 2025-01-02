### Typescript

#### 1. Iniciar o package.json

```bash
npm init
```
Observação para atualizar o npm **npm install -g npm@11.0.0** nesse momento

#### 2. Instalar o typescript em ambiente de desenvolvimento
```bash
npm i typescript -D
```
Observação

Caso queira pode-se instalar o typescript de forma global com o comando **npm i -g typescript** isso influencia na utilização
pois não será mais necessário a utilização do comando **npx** somente **tsc ...**

#### 3. Rodar arquivo ***.ts
- Nesse caso estou usando o arquivo main.ts
- para gerar(build) o arquivo *.js a partir do no arquivo main.ts execute o comando:
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

- Exclua o arquivo **.js** criado e compile novamente o arquivo com o comando
```bash
npx tsc
```
#### 5. Para padronizar o editor crie o arquivo **.editorconfig** com os seguintes parâmetros.
```
# Função: Indica que este é o arquivo de configuração principal (root). Isso significa que, se o EditorConfig encontrar este arquivo, ele não procurará por arquivos de configuração em diretórios superiores.
root = true

# Função: Define que as configurações a seguir são aplicáveis a todos os arquivos no projeto (o * é um "curinga" que corresponde a todos os tipos de arquivos).
[*]

# Função: Define o estilo de indentação no código.
# space: A indentação será feita com espaços.
# Alternativa: Se fosse tab, a indentação seria feita com tabulações.
indent_style = space

# Função: Define o número de espaços que serão usados para cada nível de indentação.
# 2: Cada indentação será feita com 2 espaços.
# Alternativa: Se fosse 4, cada nível de indentação seria feito com 4 espaços.
indent_size = 2

# Função: Define o conjunto de caracteres usado para codificar os arquivos.
# utf-8: O arquivo será codificado usando o padrão UTF-8, que é amplamente utilizado para garantir compatibilidade com caracteres especiais e múltiplos idiomas.
charset = utf-8

# Função: Remove qualquer espaço em branco ou tabulação no final das linhas.
# true: Remove automaticamente os espaços em branco no final de cada linha ao salvar o arquivo.
# Alternativa: Se fosse false, os espaços em branco finais seriam mantidos.
trim_trailing_whitespace = true

# Função: Garante que o arquivo termine com uma linha em branco (um \n no final).
# true: Insere automaticamente uma linha em branco no final do arquivo ao salvar.
# Alternativa: Se fosse false, o arquivo não teria uma linha final em branco.
insert_final_newline = true

# Função: Define o tipo de terminação de linha (como as linhas terminam no arquivo).
# lf: Usa a terminação de linha "Line Feed" (\n), que é o padrão em sistemas UNIX/Linux e no macOS.
# Alternativa: Se fosse crlf, a terminação de linha seria "Carriage Return + Line Feed" (\r\n), que é o padrão no Windows.
end_of_line = lf
```
#### 6. Tipos básicos

Aqui está a documentação do que cada tipo faz em TypeScript para o código fornecido:

---

- 6.1. `number`
O tipo `number` em TypeScript é usado para representar números, incluindo inteiros e números de ponto flutuante.

```typescript
let name_var: number = 321;
name_var = 123;   // Atribuição de um número inteiro
name_var = 1.2;   // Atribuição de um número de ponto flutuante
name_var = 0xFA;  // Atribuição de um número hexadecimal (0xFA é 250 em decimal)
console.log(name_var);
```
- O tipo `number` pode armazenar números em diversos formatos:
  - Inteiros (`123`)
  - Números decimais (`1.2`)
  - Hexadecimais (`0xFA`)

---

 - 6.2. `boolean`
O tipo `boolean` é usado para valores lógicos, podendo ser `true` ou `false`.

```typescript
let active: boolean = true;
```
- O tipo `boolean` só pode ter dois valores: `true` ou `false`.

---

 - 6.3. `string`
O tipo `string` é utilizado para representar sequências de caracteres (texto).

```typescript
let firstName = 'Fulano';
let lastName = 'Detal';
let fullName: string = `${firstName} ${lastName}`;
```
- O tipo `string` pode ser declarado de três formas:
  - Usando aspas simples (`'Fulano'`)
  - Usando aspas duplas (`"Fulano"`)
  - Usando template literals (interpolação de variáveis) com crase (`` `Fulano ${lastName}` ``)

---

 - 6.4. `enum`
O tipo `enum` (abreviação de "enumeration") é usado para definir um conjunto de valores nomeados.

```typescript
enum ROLES {
  MANAGER = 'manager',
  ADMIN = 'Admin',
  CEO = 'CEO',
  CTO = 'CTO'
};
```
- `enum` permite a criação de um tipo que pode ter um conjunto limitado de valores. Cada valor dentro de um `enum` pode ser associado a uma string ou número.
- Nesse exemplo, o `enum ROLES` define os papéis de usuários na aplicação, com valores como `'manager'`, `'Admin'`, `'CEO'`, e `'CTO'`.

```typescript
function setRole(role: ROLES): void {
  // Lógica para definir o papel
}
setRole(ROLES.CEO);
```
- A função `setRole` recebe um valor do tipo `ROLES`, garantindo que o valor passado seja um dos valores definidos no `enum`.

---

 - 6.5. `array`
Arrays em TypeScript podem ser de tipos específicos, o que significa que todos os elementos no array devem ter o mesmo tipo.

##### **Array com qualquer tipo (`any`)**
```typescript
let names = ['Fulano', 'Tecnologia', 'TI', true, 1];
```
- O tipo `any` permite que o array contenha qualquer tipo de valor (string, número, booleano, etc.).

##### **Array de strings**
```typescript
let names1: string[] = ['Fulano', 'Tecnologia'];
let names2: Array<string> = ['Fulano', 'Tecnologia'];
```
- Arrays de strings podem ser declarados de duas formas:
  - Usando a notação `string[]`, o que significa um array de strings.
  - Usando a notação genérica `Array<string>`, que também define um array contendo apenas strings.

##### **Array de qualquer tipo (`any`)**
```typescript
let names3: Array<any> = ['Fulano', 'Tecnologia', true, 0xFA];
```
- Aqui, o array pode conter valores de qualquer tipo, devido ao uso de `any`.

---

##### **Resumo de Tipos em TypeScript:**
1. **`number`**: Usado para números (inteiros, ponto flutuante, hexadecimais).
2. **`boolean`**: Representa valores lógicos (`true` ou `false`).
3. **`string`**: Usado para texto (sequências de caracteres).
4. **`enum`**: Um conjunto de valores nomeados, onde você pode definir opções para o valor de uma variável.
5. **`array`**: Usado para armazenar coleções de dados. Pode ser de tipos específicos, como `string[]`, ou genérico, como `Array<any>`.

#### 7. Funções

 - 7.1 Função `add`
```typescript
const add = (a: number, b: number): number => a + b;
```

   - Esta é uma função de soma simples que recebe dois parâmetros (`a` e `b`), ambos do tipo `number`, e retorna a soma de `a` e `b` também como um `number`.
  - **Parâmetros:**
    - `a`: um número.
    - `b`: outro número.
  - **Retorno:** A soma de `a` e `b`.

---

 - 7.2 Função `addWithOptionalTax`
```typescript
const addWithOptionalTax = (a: number, b: number, tax?: number): number => {
  if (typeof tax != 'undefined') {
    return (a + b) - tax;
  }

  return a + b;
}
```
   - Esta função soma dois números (`a` e `b`) e, se o parâmetro `tax` for fornecido, subtrai o valor de `tax` da soma. O parâmetro `tax` é **opcional** e seu valor é `undefined` caso não seja passado.
  - **Parâmetros:**
    - `a`: um número.
    - `b`: outro número.
    - `tax`: um número opcional que

 representa o valor do imposto a ser subtraído.
  - **Retorno:** A soma de `a` e `b`, possivelmente subtraída pelo valor de `tax`.

---

 - 7.3 Função `multiply`
```typescript
const multiply = (a: number, b: number): number => a * b;
```
  - A função `multiply` simplesmente retorna o produto de `a` e `b`.
  - **Parâmetros:**
    - `a`: um número.
    - `b`: outro número.
  - **Retorno:** O produto de `a` e `b`.

---

 - 7.4 Função `printSomething`
```typescript
const printSomething = (message: string, prefix: string = ''): string => {
  console.log(prefix + message);
  return prefix + message;
}
```
   - Esta função imprime uma mensagem na tela, podendo adicionar um prefixo opcional.
  - **Parâmetros:**
    - `message`: uma string contendo a mensagem a ser impressa.
    - `prefix`: um prefixo opcional (valor padrão é uma string vazia).
  - **Retorno:** A string com o prefixo (se fornecido) e a mensagem.

**Exemplo de uso:**
- `calcTotal('Fulano', 2, 3, 5, 10)` retorna `20` (soma de `2 + 3 + 5 + 10`).

---

##### **Resumo:**
- **`add`**: Soma dois números e retorna o resultado.
- **`addWithOptionalTax`**: Soma dois números e subtrai um valor opcional (taxa), se fornecido.
- **`applyDiscount`**: Aplica um desconto percentual a um preço e retorna o valor com desconto.
- **`calcTotal`**: Soma um número variável de valores numéricos e retorna o total.

#### 8. Classes

 - 8.1 Classe `User`
A classe `User` representa um usuário básico com propriedades como `firstName`, `lastName` e `age`. Ela tem um método para obter o nome completo do usuário.

```typescript
class User {
  protected readonly firstName: string;
  protected lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // this.validate();
  }

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

- **Propriedades:**
  - `firstName`: O primeiro nome do usuário (do tipo `string`). A propriedade é `protected` e `readonly`, o que significa que ela pode ser acessada por subclasses, mas não pode ser alterada depois de inicializada.
  - `lastName`: O sobrenome do usuário (do tipo `string`). É uma propriedade `protected`, portanto, acessível em subclasses.
  - `age`: A idade do usuário (do tipo `number`). Também é `protected`, permitindo o acesso nas subclasses.

- **Construtor:** O construtor inicializa as propriedades `firstName`, `lastName` e `age` com valores fornecidos como argumentos. A linha `// this.validate();` está comentada, mas parece ser uma chamada para algum método de validação, caso fosse implementado.

- **Método `getFullName`:** Retorna o nome completo do usuário no formato "Primeiro Nome Sobrenome".

**Exemplo de uso:**
```typescript
let user = new User('Fulano', 'Detal', 30);
console.log(user.getFullName()); // Fulano Detal
```

---

 - 8.2 Classe `Admin`
A classe `Admin` é uma extensão da classe `User`, com a modificação do método `getFullName` para incluir o título de "Dr." antes do nome do usuário.

```typescript
class Admin extends User {
  public getFullName() {
    return `Dr. ${this.firstName} ${this.lastName}`;
  }
}
```

- **Herança:** `Admin` estende a classe `User`, o que significa que ela herda as propriedades e métodos da classe `User`, como `firstName`, `lastName`, `age` e `getFullName`.

- **Método `getFullName`:** O método é sobrescrito na classe `Admin`. Em vez de apenas retornar o nome completo, ele adiciona o prefixo "Dr." antes do nome.

**Exemplo de uso:**
```typescript
let admin = new Admin('Fulano', 'Detal', 30);
console.log(admin.getFullName()); // Dr. Fulano Detal
```

---

##### Resumo:
- **Classe `User`**: Representa um usuário com propriedades básicas (`firstName`, `lastName`, `age`) e um método para obter o nome completo (`getFullName`).
- **Classe `Admin`**: Herda da classe `User` e sobrescreve o método `getFullName` para adicionar um título de "Dr.".

##### **Notas:**
- O modificador **`protected`** permite que as propriedades sejam acessadas dentro da própria classe e em classes que a estendem (subclasses).
- O modificador **`readonly`** impede que a propriedade seja alterada após ser inicializada, garantindo imutabilidade.
- O método **`getFullName`** é sobrescrito na classe `Admin` para fornecer um comportamento diferente para os administradores.

#### 9. Interfaces

Em TypeScript, uma interface é uma forma de definir um contrato ou uma estrutura para objetos, funções, classes ou outras entidades no código. Ela serve para especificar como um objeto deve ser estruturado e quais propriedades e métodos ele deve ter. Diferente das classes, as interfaces não possuem implementação; elas apenas descrevem a forma de um objeto ou a assinatura de um método.

 - 9.1 Interface `UserInterface`
A interface `UserInterface` define um contrato para objetos ou classes que representam usuários, incluindo as propriedades `firstName`, `lastName`, `age`, e o método `getFullName()`.

```typescript
interface UserInterface {
    firstName: string;
    readonly lastName?: string;
    age: number;

    getFullName(): string;
}
```

 - **Propriedades:**
   - `firstName`: O primeiro nome do usuário (do tipo `string`). Esta propriedade é obrigatória.
   - `lastName`: O sobrenome do usuário (do tipo `string`). A propriedade é **opcional** (indicado pelo `?`), o que significa que pode ser omitida. Também é marcada como **somente leitura** (`readonly`), então não pode ser alterada após ser atribuída.
   - `age`: A idade do usuário (do tipo `number`). Esta propriedade é obrigatória.

- **Método `getFullName`:** Um método que deve retornar uma string representando o nome completo do usuário. Este método deve ser implementado por qualquer classe ou objeto que use esta interface.

---

 - 9.2 Função `getUser`
A função `getUser` recebe um objeto do tipo `UserInterface` como argumento e retorna uma string com o nome completo e a idade do usuário.

```typescript
const getUser = (user: UserInterface): string => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
}
```

 - **Parâmetros:**
   - `user`: Um objeto que implementa a interface `UserInterface`. Ele deve ter as propriedades `firstName`, `lastName` (opcional) e `age`, além de implementar o método `getFullName`.

 - **Retorno:** A função retorna uma string formatada contendo o nome completo (`firstName` e `lastName`, se disponível) e a idade do usuário.

**Exemplo de uso:**
```typescript
let person = new Person('Fulano', 'Detal', 30);
console.log(getUser(person));  // "Fulano Detal, age: 30"
```

---

 - 9.3 **Classe `Person`**
A classe `Person` implementa a interface `UserInterface`. Ela define as propriedades `firstName`, `lastName` e `age`, além de implementar o método `getFullName`.

```typescript
class Person implements UserInterface {
    firstName: string;
    readonly lastName?: string;
    age: number;

    constructor(firstN: string, lastN: string, ageU: number) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
```

 - **Propriedades:**
   - `firstName`: O primeiro nome da pessoa (do tipo `string`).
   - `lastName`: O sobrenome da pessoa (do tipo `string`). Esta propriedade é **opcional** e **somente leitura**.
   - `age`: A idade da pessoa (do tipo `number`).

- **Construtor:** O construtor recebe três argumentos (`firstN`, `lastN`, `ageU`) e inicializa as propriedades `firstName`, `lastName` e `age`.

- **Método `getFullName`:** Este método retorna o nome completo da pessoa, concatenando `firstName` e `lastName`.

**Exemplo de uso:**
```typescript
let person = new Person('Fulano', 'Detal', 30);
console.log(person.getFullName());  // "Fulano Detal"
```

---

##### **Resumo:**
- **Interface `UserInterface`:** Define um contrato para objetos ou classes que representam usuários, com propriedades `firstName`, `lastName`, `age` e o método `getFullName`.
- **Função `getUser`:** Aceita um objeto que implementa a interface `UserInterface` e retorna uma string com o nome completo e a idade do usuário.
- **Classe `Person`:** Implementa a interface `UserInterface` e fornece uma implementação para o método `getFullName`, retornando o nome completo da pessoa.

##### **Notas:**
- A interface `UserInterface` permite que diferentes objetos ou classes possam seguir a mesma estrutura, garantindo que tenham as propriedades e métodos necessários.
- A propriedade `lastName` na interface é **opcional** e **somente leitura**, o que significa que, se fornecida, não pode ser modificada.
- A classe `Person` é uma implementação concreta da interface `UserInterface` e deve cumprir o contrato definido pela interface.
