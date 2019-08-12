import styled from 'styled-components';
import logoPic from '../../statics/Imgs/logo.png'
export const HeaderStyle = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #eee
`;
export const Logo = styled.div`
    background: url(${logoPic}) no-repeat;
    width: 100px ;
    height: 56px;
    background-size: 100px;
    display: block;
    position:absolute;
`;
export const Nav = styled.div`
    width:auto;
    height: 100%;
    margin: 0 200px;
    font-size:16px;
    padding-right:20px;
    box-sizing:border-box;
`;
export const IndexPage =styled.div`
    padding: 0 15px;
    line-height: 56px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float:right;
        color: #696969;
    }
    &.index {
        color: #ea6f5a;
    }
    &.download{
    }
`;
export const SearchWrapper = styled.div`
    positon:relative;
    float:left;

    .big{
        position:relative;
        display:inline-block;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        right:35px;
        &.focus{
            background:#999;
            color: #fff;
        }
    }
`;
export const SearchHotInfo = styled.div`
    position: absolute;
    width: 250px;
    height: auto;
    top:56px;
    margin-left: 20px;
    box-shadow:0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
    // z-index: 1;
       
        // height: 450px;
        // padding: 10px;
        // font-size: 14px;
        // color: #333;
        // line-height: 28px;
        border: 2px solid #666;
        // position: relative;
        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius: 5px;
        // display: inline-block;
   
    
    &:before,&:after{
        /*左三角*/
        // content: ' ';
        // border-top: 8px solid transparent;
        // border-bottom: 8px solid transparent;
        // border-right: 12px solid #666;
        // position: absolute;
        // top: 15px;
        // left: -12px;
        // 上三角
        content: ' ';
    		border-bottom: 12px solid #666;
    		border-left: 12px solid transparent;
    		border-right: 12px solid transparent;
    		position: absolute;
    		top: -12px;
    		left: 20px;

    }
    &:after{
        // border-right: 12px solid #fff;
        // left: -8px;
        
    		border-bottom: 12px solid #Fff;
    		top: -9px;

    }
`;
export const SearchHotInfoTitle = styled.div`
    margin-top:20px;
    margin: 15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
    bockground: red
`;
export const SearchSwitch =styled.div`
    float: right;
    font-size: 13px;
    .changeAnother{
        display:inline-block;
        margin-right:3px;
        width:18px;
        height:18px;
        transition:all .1 esae-in;
        transfrom-origin: center center;
    }
    &:hover{
        cursor: pointer;
    }
`;
export const SearchItem = styled.a`
    font-size:12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-left: 12px;
    margin-bottom: 10px;
`;


export const SerchBox=styled.input.attrs({
    placeholder:'搜索'
})`
    // position:relative;
    width:160px;
    height:38px;
    padding:0 33px 0 15px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    
    &::placeholder{
        color:#999;
    }
    &.focus{
        width:250px;
        padding:0 40px 0 15px;
    }
    &.slide-enter{
        transition:all .3s ease-out;
    }
    &.slide-enter-active{
        width:250px;
    }
    &.slide-exit{
        transition:all .3s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    margin-right:20px;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    padding: 0 20px;
    &.writting{
        color:#fff;
        background: #ec6149;
    }
    &.regist{
        color:#ec6149;
    }
`;
