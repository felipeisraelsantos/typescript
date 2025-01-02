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
### Resumo de Tipos no TypeScript

#### 1. **Type Alias**
Um type alias cria um nome para um tipo, tornando o código mais legível e reutilizável.

```typescript
type ID = string | number;
let id: ID = 'abc';
```

#### 2. **Evitar o uso de `any`**
O uso do tipo `any` deve ser evitado, pois desativa o sistema de tipos do TypeScript. É melhor usar tipos específicos.

```typescript
const showLog = (message: string): void => {
  console.log(message);
};
```

#### 3. **Arrays**
Arrays podem ser definidos usando `Array<T>` ou `T[]`.

```typescript
let numbers: Array<number> = [1, 2, 3];
let mixed: (string | number)[] = [1, 'text'];
```

#### 4. **Booleanos**
Variáveis booleanas são declaradas com o tipo `boolean`.

```typescript
let isActive: boolean = true;
```

#### 5. **Enums**
Enums permitem criar coleções de valores constantes e nomeados.

```typescript
enum Status {
  Published,
  Draft,
}
```

#### 6. **Interfaces e Classes**
Interfaces definem a estrutura de um objeto, enquanto classes implementam essas interfaces.

```typescript
interface Location {
  readonly latitude: number;
  longitude?: number;
}

class Localization implements Location {
  latitude: number;
  longitude?: number;
  constructor(lat: number, long?: number) {
    this.latitude = lat;
    this.longitude = long;
  }
}
```

#### 7. **Números**
Os números podem ser inteiros, de ponto flutuante, hexadecimais, octais ou binários.

```typescript
let example: number = 0x37cf; // Hexadecimal
```

#### 8. **Objetos**
Objetos podem ter suas estruturas tipadas de forma explícita.

```typescript
let employee: { firstName: string; lastName: string; score: number };
```

#### 9. **Strings**
O tipo `string` é usado para representar texto.

```typescript
let fullName: string = `John Doe`;
```

#### 10. **Literais de String**
Restringe os valores possíveis de uma variável a um conjunto de strings específicas.

```typescript
let mouseEvent: 'click' | 'mouseup';
```

#### 11. **Tuplas**
Tuplas permitem que um array tenha um número fixo de elementos com tipos específicos.

```typescript
const userData: [string, number] = ['John', 25];
```

#### 12. **Funções `void` e `never`**
- `void`: Usado em funções que não retornam valor.
- `never`: Indica que uma função nunca conclui sua execução.

```typescript
const logMessage = (message: string): void => {
  console.log(message);
};

function throwError(message: string): never {
  throw new Error(message);
}
```

