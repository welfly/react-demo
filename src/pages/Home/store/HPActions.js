import { HPConst } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getHPContent = (data)=>({
    type: HPConst.TOPLIST,
    topicList : fromJS(data)
});
const getHPtitle = (data) => ({
    type: HPConst.TOPTITLE,
    topicTitle : fromJS(data)
});
const getHPMoretitle = (data, nextPage) => ({
    type: HPConst.MORECONTENT,
    topicTitle : fromJS(data),
    nextPage
})
const showBackScroll = (show) =>({
    type : HPConst.SHOWSCROLL,
    showToggle : show,
})

//在action使用ajax获取数据。ajax异步操作需要收到触发。这个使用的是组件加载完后进行触发。
export const getHPList =() =>{
    return(dispatch) =>{
        axios.get('/api/Topic/TopicDetial.json')
        .then((res) =>{
          let data = res.data.data;
          dispatch (getHPContent(data));
        })
        .catch((e) =>{
            console.log(e)
        });    
    }
};
export const getHPTitle = () =>{
    return(dispatch) =>{
        axios.get('/api/Topic/TopicTitle.json')
        .then((res) =>{
          let data = res.data.data;
          dispatch (getHPtitle(data));
        })
        .catch((e) =>{
            console.log(e)
        });    
    }
};

export const getMoreListContent =(HPPage) => {
    return(dispatch) =>{
        axios.get('/api/Topic/TopicDetial.json?page=' + HPPage)
        .then((res) =>{
          let data = res.data.data;
          dispatch (getHPMoretitle(data, HPPage+1 ));
        })
        .catch((e) =>{
            console.log(e)
        });    
    }
};
export const showScroll = (show) =>{
    return (dispatch) =>{
        dispatch(showBackScroll(show))
    }
}
