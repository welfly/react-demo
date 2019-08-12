// 导入当前的header的常量
import {HeaderActionConst} from './index'
import axios from 'axios';
import { fromJS } from 'immutable';

// 以下是在本文件中使用的。
const getlistItem = (data) =>({
    type: HeaderActionConst.CHANG_HOT_LIST,
    //注意这里的es6 语法 data : data 名字相同时省略
    // data,
    data: fromJS(data), //防止该变原始的redux的state状态值，使用fromJS进行管理。将一般的数据变成fromJS对象。
    totalPage: Math.ceil(data.length / 10),
})

// 以下是导出后在headerindex中引用
export const Search_focus = () =>({
    type:HeaderActionConst.SEARCH_FOCUS,
});
export const Search_blur = () =>({
    type:HeaderActionConst.SEARCH_BLUR,
});
export const MouseEnter = () =>({
    type:HeaderActionConst.Mouse_Enter,
});
export const MouseLeave = () =>({
    type:HeaderActionConst.Mouse_LEAVE,
});
export const ChangeAother = (page) => ({
    type: HeaderActionConst.CHANGE_AONTHER,
    page,
})

export const getHotList = () =>{
    return(dispatch) =>{
        axios.get('api/listheader.json')
            .then((resutl) =>{
                let data = resutl.data;
                //获取到数据后将数据保存在dispatch 的state中。
                dispatch(getlistItem(data.data));//注意dispatch发送的是一个action对象。所以在本文件中创建getlistItem方法
            })
            .catch(() =>{
                console.log("error")
            })
    }
}