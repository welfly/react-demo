import React, { PureComponent} from 'react';
import {HomeWrapper,
        HomeLeft,
        HomeRight,
        AddMoreList,
        BackToTop,
        } from './HomeStyles'
import Toptic from './Topic';
import List from './List';
import Recommond from './Recommond';
import Writter from './Writter';

import { HPActions } from '../Home/store/index'
import { connect } from 'react-redux';


class Home extends PureComponent{

    componentDidMount(){
        const {getHomePageData,getHomePageTitle,changeScroll} = this.props;
        getHomePageData();
        getHomePageTitle();
        //绑定windowlistener事件
        window.addEventListener('scroll',changeScroll);
    }

    handleScrollTop(){
        window.scroll(0,0)
    }
    render(){
        const { HPPage , showToggle } = this.props;
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt="丝绸之路" className="HomeImg" src="//upload.jianshu.io/admin_banners/web_images/4535/c4ef5054e0e08459ba8d548c035a1306e97820a9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Toptic />
                    <List />
                    <AddMoreList onClick={() => (this.props.getMoreListContent(HPPage))}>加载更多...</AddMoreList>               
                </HomeLeft>
                <HomeRight>
                    <Recommond></Recommond>
                    <Writter></Writter>
                </HomeRight>
                {
                    showToggle ? <BackToTop onClick={this.handleScrollTop}>顶部</BackToTop> : null
                }
            </HomeWrapper>
        )
    }
};
const mapStateToProps = (state) => ({
    HPPage: state.getIn(['homeReducer','HPPages']),
    showToggle: state.getIn(['homeReducer','showToggle']),
});

const mapDispatchToProps =(dispatch) => ({
    getHomePageData(){
        dispatch (HPActions.getHPList());
    },
    getHomePageTitle(){
        dispatch(HPActions.getHPTitle());
    },
    getMoreListContent(HPPage){
        dispatch(HPActions.getMoreListContent(HPPage));
    },
    changeScroll(){
        if(document.documentElement.scrollTop > 50){
            dispatch(HPActions.showScroll(true))
        }else{
            dispatch(HPActions.showScroll(false))
        }
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)