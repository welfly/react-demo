import React, { PureComponent, Fragment} from 'react';
import {WrapperDetails, DetailTitle} from './detailStyle';
import { connect } from 'react-redux';
import { DetailActions } from './store'


class Details extends PureComponent{
    render(){
        return(
            <Fragment>
                <WrapperDetails>
                    <DetailTitle>
                        {this.props.title}
                        <img alt="" src={this.props.imgUrl} />
                        <p>{this.props.content}</p>
                    </DetailTitle>
                </WrapperDetails>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getDataFromApi(this.props.match.params.id);
    };
};



const mapStateToProps = (state) => ({
    title: (state.getIn(['detailReducer', 'title'])),
    content: (state.getIn(['detailReducer', 'content'])),
    imgUrl: (state.getIn(['detailReducer', 'imgUrl']))
});
const mapDispatchToProps =(dispatch) =>({
    getDataFromApi(id){
        dispatch(DetailActions.getDetailFromApi(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);