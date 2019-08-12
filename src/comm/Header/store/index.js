//目录结构是每一个文件夹下都有一个index文件，这个index文件是每一个文件夹中的文件的出口，
// 因此，其他的任何一个目录需要引用就可以直接使用index文件引入相应的对象文件就可以 
import HReducer from './HeaderReducer';
import * as HeaderActionConst from "./constants";
import * as HeaderAction from './HeaderActions';

export {HReducer, HeaderActionConst, HeaderAction };