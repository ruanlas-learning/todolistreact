import React , {Component} from 'react';
import TodoItems from '../TodoItems';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key){
        // console.log("Item a ser deletado: " + key);
        let filtro = this.state.items.filter( (item)=>{
            return(item.key !== key);
        });
        console.log(filtro);
        this.setState({ items: filtro });
    }

    log(){
        console.log(this.state.items);
    }

    addItem(event){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({ items: [...state.items, newItem] });
        }

        event.preventDefault();
        this.setState({ tarefa: '' });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Nova tarefa?" name="tarefa"
                        value={this.state.tarefa} onChange={ (ev) => this.setState({tarefa: ev.target.value}) }
                        ref={ (event) => this._tarefaInput = event } />

                    <button type="submit">
                        Adicionar
                    </button>
                </form>

                <button onClick={this.log}>LOG</button>

                <TodoItems lista={this.state.items} delete={ this.deleteItem } />

            </div>
        );
    }
}

export default TodoList;