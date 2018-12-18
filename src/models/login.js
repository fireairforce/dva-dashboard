import {routerRedux} from "dva/router"
import {message} from 'antd';
import {loginit} from '../services/api'
export default {

    namespace: 'login',
  
    state: {},

    effects: {
      *test({payload},{call,put}){
           console.log(payload);
      },
      *getLogin({ payload }, { call, put }) {  // eslint-disable-line
        const response = yield call(loginit,payload);
        console.log(response);
        let res1 = response.code;
        let res2 = response.data;
        if (res1 === 1000){
            localStorage.setItem("token",res2.token);
            yield put(routerRedux.push('/'));
        }else if(res1 ===1021){
            message.error("密码错误");
        }else if(res1 = 1020){
            message.error('账号不存在');
        }
        yield put({
            type:'saveContent',
            payload: {response}
        });
      },
    },
  
    reducers: {
      saveContent(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };