import { fromJS } from 'immutable';
import { DetailConstants } from './index';

const defaultState = fromJS({
    title: '',
    imgUrl: '',
    content: '',
});

export default (state=(defaultState),action) =>{
    switch(action.type){
        case DetailConstants.DETAILSDATAFROMAPI:
            return state.merge({
                title: action.title,
                imgUrl: action.imgUrl,
                content : action.content,
            })
        default  :
            return state;
    }
}


