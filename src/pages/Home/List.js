import React, { PureComponent, Fragment} from 'react';
import {TopicList} from './HomeStyles';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class List extends PureComponent{
    render(){
        return(
            <Fragment>
                <TopicList>
                        {
                            this.props.topicList.map( (item,index) =>(
                               
                                    <div className="content" key={index} >
                                        <Link  to={"/details/"+item.get('id')} className="linkToDetail">
                                            <div className="topicListTitle">{item.get('title')}</div>
                                        </Link> 
                                        <span className="span">{item.get('desc')}</span>
                                        <img alt="" className="topicImg" src={item.get('imgurl')} />
                                    </div>
                            ))
                        }
                </TopicList>
            </Fragment>
        )
    }
};
const mapStateToProps = (state) =>{
    return {
        topicList: state.getIn(["homeReducer","topicList"])
    }
};
const mapDispatchToProps = (dispatch) => {
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);