import React ,{ PureComponent, Fragment }from 'react';
import TodoListItem from './TodoListItem';
import axios from 'axios';

class TodoList extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            list:[]
        } 
    }

    componentDidMount(){
        axios.get('/api/todolist')
        .then(()=>{
            alert("200")
        })
        .catch(()=>{
            alert("404")
        })
    }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleButton(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:'',
        })
    }
    handleDeleteLi(index){
        //immutable
        //state不允许做任何的改变，进行拷贝副本，对副本进行操作，避免影响state的数据。
        const list2 = [...this.state.list];
        list2.splice(index,1);//删除方法splice
        this.setState({
            list:list2,
        })
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
                    <button onClick={this.handleButton.bind(this)}>确定</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return(
                                <TodoListItem 
                                    deleteItem={this.handleDeleteLi.bind(this)} 
                                    index={index} 
                                    content={item} 
                                    key={index}
                                />
                            ) 
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;