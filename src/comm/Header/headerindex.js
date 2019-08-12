import React, { Fragment, PureComponent } from 'react';
import  {
            HeaderStyle, Logo, Nav, IndexPage, SerchBox, Addition, 
            Button,SearchWrapper, SearchHotInfo, SearchHotInfoTitle,
            SearchSwitch, SearchItem,
        } from './headerIndexStyle';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';

//将actionType常量进行统一管理后 引入
import {HeaderAction} from './store/index';
import {Link} from 'react-router-dom';

class Header extends PureComponent {  
    getListArea(){
        const {focus, list, page,totalPage,mouseState, handelHotTitleMouseEnter, handelHotTitleMouseLeave,handleChangeAother} = this.props;
        const newHotList = list.toJS();//将immutable类型的list数组转换成js类型。
        const pageList = [];
        if(newHotList.length){
            for(let i = (page-1) * 10 ; i < page * 10 ; i++){
                if(newHotList[i] !== undefined){
                    pageList.push(
                        <SearchItem key={newHotList[i]}>{newHotList[i]}</SearchItem>
                    )
                }
            };
        }
        if(focus || mouseState){
            return(
                <SearchHotInfo onMouseEnter={handelHotTitleMouseEnter} onMouseLeave={handelHotTitleMouseLeave}>
                    <div>
                    <SearchHotInfoTitle>
                        热门搜索
                        <SearchSwitch onClick={() => handleChangeAother(page, totalPage,this.changeIcon )}>
                            <i ref={(icon) => (this.changeIcon = icon)}  className="iconfont changeAnother">&#xe6f6;</i>
                            换一批
                        </SearchSwitch>
                    </SearchHotInfoTitle>
                        <div>
                            {/* {
                                list.map((itme) =>{
                                    return <SearchItem key={itme}>{itme}</SearchItem>
                                })
                            } */}
                            {pageList}
                        </div>
                        </div>
                </SearchHotInfo>
            )
        } else{
            return null;
        }
    }
    render(){
        const {focus,inputFocus,inputBlur,list} = this.props;
        return(
            <Fragment >
              <HeaderStyle>
                  <Link to="/">
                      <Logo />
                  </Link>
                  <Nav>
                      <IndexPage className="left index">首页</IndexPage>
                      <IndexPage className="left download">下载App</IndexPage>
                      <IndexPage className="right">
                      <a href="mailto:1085597986@qq.com">登录</a>
                      </IndexPage>
                      <IndexPage className="right">
                          <i className="iconfont">&#xe636;</i>
                      </IndexPage>
                      <SearchWrapper>
                          <CSSTransition
                                in={focus}
                                timeout={250}
                                classNames="slide"
                          >
                            <SerchBox onFocus={() =>inputFocus(list)} onBlur={inputBlur} className={focus ? 'focus' : ''} />
                            </CSSTransition>
                                 <i className={focus ? 'focus iconfont big' : 'iconfont big'}>&#xe693;</i>
                            {this.getListArea(focus)}
                      </SearchWrapper>
                    </Nav>
                        <Addition>
                            <Button className="writting">
                            <i className="iconfont">&#xe653;</i>
                                写文章
                            </Button>
                            <Button className="regist">注册</Button>
                        </Addition>    
                    </HeaderStyle> 
            </Fragment >
        );
    }
}


/**
 * 无状态函数的写法
 * @param {*} state 
 */
// 使用了redux,因此Header中就没有 state了, 所以Header就是一个无状态的函数，
// 因此，使用用函数的方法将Header导出。
// const Header = (props) =>{
//     return(
//         <Fragment >
//           <HeaderStyle>
//               <Logo />
//               <Nav>
//                   <IndexPage className="left index">首页</IndexPage>
//                   <IndexPage className="left download">下载App</IndexPage>
//                   <IndexPage className="right">登录</IndexPage>
//                   <IndexPage className="right">
//                       <i className="iconfont">&#xe636;</i>
//                   </IndexPage>
//                   <SearchWrapper>
//                       <CSSTransition
//                             in={props.focus}
//                             timeout={250}
//                             classNames="slide"
//                       >
//                         <SerchBox onFocus={props.inputFocus} onBlur={props.inputBlur} className={props.focus ? 'focus' : ''} />
//                         </CSSTransition>
//                              <i className={props.focus ? 'focus iconfont' : 'iconfont'}>&#xe693;</i>
//                         {getListArea(props.focus)}
//                   </SearchWrapper>
//                 </Nav>
//                     <Addition>
//                         <Button className="writting">
//                         <i className="iconfont">&#xe653;</i>
//                             写文章
//                         </Button>
//                         <Button className="regist">注册</Button>
//                     </Addition>    
//                 </HeaderStyle> 
//             </Fragment >
//     );
// };

// // 搜索模块
// const getListArea = (show) =>{
//     if(show){
//         return(
//             <SearchHotInfo>
//                 <SearchHotInfoTitle>
//                     热门搜索
//                     <SearchSwitch>换一批</SearchSwitch>
//                 </SearchHotInfoTitle>
//                     <div>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                         <SearchItem>教育</SearchItem>
//                     </div>
//             </SearchHotInfo>
//         )
//     } else{
//         return null;
//     }
// };

const mapStateToProps = (state) =>{
    return {
        // 注意，这里因为store多了一层。所以需要添加headerReducer
        // 未使用immutable的写法
        // focus:state.headerReducer.focus,
        
        //使用immutable管理focus后的写法 使用get方法进行获取管理后的state的值
        // focus: state.headerReducer.get('focus')

        // 使用immutable管理focus以及 state后的写法 使用get方法进行获取管理后的state的值
        focus: state.get('headerReducer').get('focus'), //等价于 state.getIn(['headerReducer','focus'])
        // 注意上述的headerReducer 来自于 src\store\reducer.js中的headerReducer 顾名称一致。
        
        //获取经过immutable管理后的redux的state的list的值
        list: state.getIn(["headerReducer", "list"]),
        page: state.getIn(["headerReducer", "page"]),
        totalPage: state.getIn(["headerReducer","totalPage"]),
        mouseState: state.getIn(["headerReducer", "mouseState"]),
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        inputFocus(list){
            // 未将常亮进行统一管理的状态写法
            // const action = {
            //     type:'Search_focus',
            // };
            // dispatch(action);

            //  将常量进行统一管理后的dispatch的写法
            // 注意这个dispatch返回的是一个action的对象，所以这里引用的是HeaderAction.Search_focus()方法
            // 返回的action 的对象 type
            dispatch(HeaderAction.Search_focus());

            //获取ajax数据
            if(list.size === 0 )dispatch(HeaderAction.getHotList());
            
        },
        inputBlur(){
            // 未将常亮进行统一管理的状态写法
            // const action = {
            //     type: 'Search_blur',
            // }
            // dispatch(action);

            //  将常量进行统一管理后的dispatch的写法
            dispatch(HeaderAction.Search_blur());
        },
        handelHotTitleMouseEnter(){
            dispatch(HeaderAction.MouseEnter());
        },
        handelHotTitleMouseLeave(){
            dispatch(HeaderAction.MouseLeave());
        },
        handleChangeAother(page, totalPage, changeIcon){
           
            let changeIconAngle = changeIcon.style.transform.replace(/[^0-9]/ig, "");
            if(changeIconAngle){
                changeIconAngle = parseInt(changeIconAngle, 10);
            }else{
                changeIconAngle = 0 ;
            }
             changeIcon.style.transform = "rotate("+(changeIconAngle + 720)+"deg";
            if(page < totalPage){
                dispatch(HeaderAction.ChangeAother(page + 1));
            }else{
                dispatch(HeaderAction.ChangeAother(1));
            }
            
        },
    }
}


// 使用react的state方法进行Header的写法
// class Header extends Component{
        
//     render(){
//         return(
//             <Fragment >
//                 <HeaderStyle>
//                     <Logo />
//                     <Nav>
//                         <IndexPage className="left index">首页</IndexPage>
//                         <IndexPage className="left download">下载App</IndexPage>
//                         <IndexPage className="right">登录</IndexPage>
//                         <IndexPage className="right">
//                             <i className="iconfont">&#xe636;</i>
//                         </IndexPage>
//                         <SearchWrapper>
//                             <CSSTransition
//                                 in={this.props.focus}
//                                 timeout={250}
//                                 classNames="slide"
//                             >
//                                 <SerchBox onFocus={this.props.inputFocus} onBlur={this.props.inputBlur} className={this.props.focus ? 'focus' : ''} />
//                             </CSSTransition>
//                             <i className={this.props.focus ? 'focus iconfont' : 'iconfont'}>&#xe693;</i>
//                         </SearchWrapper>
//                     </Nav>
//                     <Addition>
//                         <Button className="writting">
//                         <i className="iconfont">&#xe653;</i>
//                             写文章
//                         </Button>
//                         <Button className="regist">注册</Button>
//                     </Addition>    
//                 </HeaderStyle> 
//             </Fragment >
//         )
//     }
// }


export default connect(mapStateToProps, mapDispatchToProps)(Header);