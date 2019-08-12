import axios from 'axios';
import { DetailConstants } from './index';
import { fromJS } from 'immutable';


const getDetailData = (title, content, imgUrl) => ({
    type: DetailConstants.DETAILSDATAFROMAPI,
    title: fromJS(title),
    content: fromJS(content),
    imgUrl: fromJS(imgUrl)
})
export const getDetailFromApi =(id) =>{
    return(dispatch) =>{
        axios.get("/api/Topic/DetailContent.json?id=" + id)
            .then((res) =>{
                let data = res.data.data;
                dispatch(getDetailData(data.title, data.content, data.imgUrl));
            })
            .catch((e) =>{
                console.log(e)
            })
    }
}
