import { LightningElement } from "lwc";

export default class App extends LightningElement {
    //definir variáveis que irão receber valores
    primeironome;
    sobrenome;
    telefone;

    /**
     * função handleOnChange*NomeInput(event)
     * 
     * é um parametro passado para dentro da função contendo informações 
     * do de quem o invocou
     */

    handleOnChangePrimeiro(event){
        /**
         * event trás um conjunto de dados no formato de objeto js
         * para acessar o valor do campo do input 
         * devemos acessar a key detail e dentro dele a key value
         * assim eu recupero a informação do campo
         */

        /**
         * chamar o primeironome
         * this.primeiro
         */
        this.primeironome = event.detail.value;
        console.log('primeironome: ' + this.primeironome);
    }

    /**função para receber dados do input de sobrenome */
    handleOnChangeSobrenome(event){
      this.sobrenome = event.detail.value;
      console.log('sobrenome: ' + this.sobrenome);
    }

    /** crie a função para receber os dados na variavel telefone */
    handleOnChangeTelefone(event){
      this.telefone = event.detail.value;
      console.log('telefone: ' + this.telefone);
    }

}   
