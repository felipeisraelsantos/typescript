/**
 * Decorator `Get` para rotas HTTP fictícias.
 * @param url - A URL que deve ser "monitorada" pelo decorator.
 */
function Get(url: string) {
  // O decorator retorna uma função que será aplicada ao método decorado.
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    /**
     * `target`: A classe onde o método decorado está definido.
     * `key`: O nome do método decorado.
     * `descriptor`: Descrição do método, contendo informações como:
     *    - `value`: A função original do método.
     */

    // Armazena a referência ao método original decorado.
    const originalMethod = descriptor.value;

    // URL simulada para o exemplo (como se fosse a URL atual acessada pelo sistema).
    const currentUrl = '/contato';

    // Verifica se a URL passada no decorator é igual à URL "atual".
    if (url === currentUrl) {
      // Se a URL coincidir, o método original é executado.
      originalMethod.apply();
    }

    return; // Nada é retornado, pois o objetivo é apenas interceptar a execução.
  };
}

/**
* Controlador de exemplo com métodos decorados.
*/
class HomeController {
  /**
   * Método `index`, associado ao caminho `'/'`.
   * Decorado com `@Get('/')`, mas não será executado porque a URL simulada (`currentUrl`) é `'/contato'`.
   */
  @Get('/')
  public index() {
    console.log('HomeController@index'); // Esta mensagem não será exibida.
  }

  /**
   * Método `contact`, associado ao caminho `'/contato'`.
   * Decorado com `@Get('/contato')` e será executado porque a URL simulada corresponde.
   */
  @Get('/contato')
  public contact() {
    console.log('HomeController@contato'); // Esta mensagem será exibida.
  }
}

// Instanciação do controlador.
// Os decoradores são aplicados ao criar a instância, mas não acionam nenhum comportamento diretamente.
// Eles apenas "interceptam" e condicionam a execução dos métodos com base na lógica definida.
(new HomeController());

export default {};
