import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:visible;
    width:960px;
    margin: 5px auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin: 0 30px 0 15px;
    height: 300px;
    padding-top: 30px;
    
    .HomeImg{
        width: 625px;
        height: 270px;
        border-radius: 4px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
    margin: 0 auto;
    height: 300px;
    background: yellow;
`;
export const TopicWripper = styled.div`
    margin: 5px 0 5px 0;
`;

export const Topics = styled.div`
    .titlesOut{
        float: left;
        margin: 0px 10px 15px 0;
        height: 32px;
        line-height: 32px;
        width: auto;
        background: #999;
        border-radius: 4px ; 
        color: white;
    }
    .TopicImg{
        display: inline-block;
        float: left;
        width: 32px ;
        height: 32px ;
        border-top-left-radius: 4px ;
        border-bottom-left-radius: 4px;
        margin-right: 5px;
    }   
    .TopicContent{
        display: inline-block;
        font-size: 14px;
        margin: auto 3px;
        word-wrap : normal ;
    }
`;
export const TopicList =styled.div`
    margin-top: 100px;
    .content{
        margin-bottom: 10px;
    }
    .topicListTitle{
        font-size: 18px;
        font-weight: 700;
    }
    .span{
        color: #999;
        margin-top: 5px;
        line-height: 25px;
    }
    .topicImg{
        display: inline-block;
        vertical-align: middle;
        width: 125px;
        height: 100px;
        border-radius: 8px;
        margin-top : 30px;
    }
    .linkToDetail:link{
        text-decoration:none;
        color: red;
        
    }
    .linkToDetail:hover{
        color: red;
    }
    .linkToDetail:visited{
        // color: blue;
        text-decoration:underline;
    }

`;
export const AddMoreList =styled.div`
    margin:50px 0 30px 0px;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    background: #9e9e9e;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
`;

export const AddMoreListFixd = styled.div`
    position: fixed;
    float: right;

`;


export const BackToTop =styled.div`
    position: fixed;
    float: right;
    width:50px;
    color: #333;
    height: 50px ;
    line-height: 50px;
    text-align: center;
    background: yellow;
    font-size: 16px;
    font-weight: 700;
    margin-left: 1090px;
    margin-top: 500px;
    cursor: pointer;
`;

