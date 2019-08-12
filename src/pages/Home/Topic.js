import React, { PureComponent} from 'react';
import {TopicWripper, Topics} from '../Home/HomeStyles';
import { connect } from 'react-redux';

class Topic extends PureComponent{
    render(){
        return(
            <TopicWripper>
                <Topics>
                    {
                        this.props.topicTitlelist.map((item, index) => (
                            <div className="titlesOut" key={index}>
                                <img className="TopicImg" alt="" src={item.get('imgUrl')} />
                                <div className="TopicContent">{item.get('title')}</div>
                            </div>
                        ) )
                    }
                </Topics>
            </TopicWripper>
        )
    }
};
const mapStateToProps = (state) =>{
    return{
        topicTitlelist: state.getIn(['homeReducer',"topicTitle"])
    }
};
const mapDispatchToProps = () =>{
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic)