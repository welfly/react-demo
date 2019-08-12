//将每一个组件的store存储在自己的文件夹中，实现分而治之的管理观念。
// 最后使用combineReducers 来统一的管理每个组件的store管理器reducer。

// 未使用redux-immutable进行管理combineReducers的写法
// import {combineReducers} from 'redux';

// 使用redux-immutable进行管理combineReducers的写法
// 将combineReducers变成immutableJS对象后，调用管理后的对象就需要使用get方法，在comm/Header/headerindex.js:55
// 中就需要使用get方法进行获取immutableJS对象的方法。
import {combineReducers} from 'redux-immutable';

//将Header的store统一导入到该目录下的index文件中，因此在这里就直接导入index中的HReducer，减少了一层目录。
import { HReducer as headerReducer } from '../comm/Header/store';// 这里使用as别名的方式 es6的语法。
import { HPReducer as homeReducer } from '../pages/Home/store';
import { DetailReducer as detailReducer} from '../pages/Details/store';
// 最后将reducer导出。
const reducer =  combineReducers({
    headerReducer:headerReducer,
    homeReducer : homeReducer,
    detailReducer : detailReducer,
});
export default reducer;
