import { HPConst } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    topicTitle : [],
    HPPages: 1 ,
    showToggle : false,
})

// 将获取到的数据存在到state中。
export default (state = defaultState, action)=>{
    switch(action.type){
        case HPConst.TOPLIST:
            return state.set('topicList', fromJS(action.topicList));
        case HPConst.TOPTITLE:
            return state.set('topicTitle', fromJS(action.topicTitle));
        case HPConst.MORECONTENT:
            return state.merge({
                topicList: fromJS(state.get('topicList').concat(action.topicTitle)),
                HPPages : fromJS(action.nextPage)
            });
        case HPConst.SHOWSCROLL:
            return state.set('showToggle', action.showToggle);
        default  :
            return state;
    }
};