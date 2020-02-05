// Toda as vezes que um documento tiver código JSX, deve-se importar o React
// Dessa vez também importaremos o Component para podermos herdar
// nossos componentes de classe dele
import React, {Component} from 'react'

// Exportando a classe de forma desestruturizada
export default class Saudacao extends Component{
  constructor(props){
    super(props);

    // Definindo os states do componente passando os props definidos anteriormente
    this.state = {
      tipo: this.props.tipo,
      nome: this.props.nome
    }

    // Fazendo um bind do this para a função setTipo, assim o this reconhecerá
    // o componente de que faz parte, sem gerar erros
    this.setTipo = this.setTipo.bind(this);
    // this.setNome = this.setNome.bind(this);

  }

  // Funções pra alterar states do componente passando os values dos inputs
  // que nesse caso virão do evento (e)
  setTipo(e){
    this.setState({
      tipo: e.target.value,
    });
  }

  setNome(e){
    this.setState({
      nome: e.target.value
    })
  }

  // Função que define o que será exibido em um componente
  render(){

    // Criando constantes e definindo seus valores 
    // desestruturizando o state do componente
    const {tipo, nome} = this.state;

    return(
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr/>
        <input 
          type="text" 
          placeholder="Tipo..." 
          value={tipo}
          // Referenciando a função setTipo criada nesse componente
          // Fazendo-a ser chamada, porém tendo que fazer um bind no this do constutor
          // para a função poder reconhecê-lo
          onChange={this.setTipo}
        />
        <input 
          type="text" 
          placeholder="Nome..." 
          value={nome}
          onChange={(e)=> this.setNome(e)}
        />
      </div>
    )
  }
}