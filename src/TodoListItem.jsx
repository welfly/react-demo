import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types'

class TodoListItem extends PureComponent{
    constructor(props){
        super(props);
        this.handleDivContent=this.handleDivContent.bind(this)
        this.state={

        }
    }


    handleDivContent(){
        this.props.deleteItem(this.props.index)
    }
    render(){
        return(
            <Fragment>
                <div index={this.props.index} onClick={this.handleDivContent}>{this.props.content}</div>
            </Fragment>
        )
    }
}

TodoListItem.propTypes ={
    content:PropTypes.string.isRequired,

}
TodoListItem.defaultProps={
    content:'你好啊'
}
export default TodoListItem;