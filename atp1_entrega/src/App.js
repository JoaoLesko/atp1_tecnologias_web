
import { Component } from 'react';
import './App.css';

class App extends Component {

  // contrutor -> como se inicializa o c[odigo
  constructor(props){
    super (props)

    this.state ={
      email: " "

    }

    this.login = this.login.bind(this)
  }

  login(e){
    // validacoes
    // valirdar email, senha

  }

  render(){
    return(
      <div>
        <h3>Tela de Login</h3>
        <form onSubmit={this.login}>
          <input type= "email" value={this.state.email}
            onChange={(e)=> this.setState({email:e.target.value})}/>
          <button type= "submit">Enviar</button>
        </form>



      </div>
    )

  }
}

export default App;
