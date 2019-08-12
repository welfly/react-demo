import {HeaderActionConst} from "./index";
//引用immutable对象库对state的状态进行管理，因为reducer的state是不可以改变的，
// 使用immutable管理state，set方法创建的是一个全新的state对象。
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focus:false,
    list:[],
    page: 1,
    totalPage: 1,
    mouseState: false,
});

export default (state = defaultState, action)=>{
    switch(action.type){
        case HeaderActionConst.SEARCH_FOCUS:
            return state.set('focus', true);
        case   HeaderActionConst.SEARCH_BLUR:
            return state.set('focus', false);
        case  HeaderActionConst.CHANG_HOT_LIST:   
            return state.set('list', action.data).set('totalPage',action.totalPage);
        case   HeaderActionConst.Mouse_Enter:
            return state.set('mouseState', true);
        case   HeaderActionConst.Mouse_LEAVE:
            return state.set('mouseState', false);
        case   HeaderActionConst.CHANGE_AONTHER:
            return state.set('page', action.page);
        default :
        return state; 
    }
    // if(action.type === HeaderActionConst.SEARCH_FOCUS){
    //     // 未使用immutable的写法
    //     // return{
    //     //     focus:true,
    //     // }
    //     // 使用immutable的写法
    //     return state.set('focus', true)
    // }
    // if(action.type === HeaderActionConst.SEARCH_BLUR){
    //     // return{
    //     //     focus:false,
    //     // }

    //     // immutable 并没有改变state的值，而是生成一个全新的对象。
    //     return state.set('focus', false)
    // }
    // if(action.type === HeaderActionConst.CHANG_HOT_LIST  ){
    //     return state.set('list', action.data);
    // }
    // return state;
}