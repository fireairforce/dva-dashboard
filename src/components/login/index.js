import React from 'react';
import { Form ,Icon, Input, Button, Checkbox} from 'antd';
import {connect} from 'dva';
import styles from './index.less';
import 'antd/dist/antd.css';
import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component{
    
    handleSubmit = () =>{
        let fieldsValue = this.props.form.getFieldsValue();
        const {dispatch} = this.props;
        const a = fieldsValue.userName;
        const b = fieldsValue.password;
        let value = {a,b};
        console.log(value.a+" "+ value.b);
        dispatch({
            type:'login/getLogin',
            payload:value
        })
    }
    render(){
        // axios.post('http://154.8.214.49:8080/yzzh/login',{
        //     login_name: '13933528963',
        //     password: 'maoqiu...',
        //     login_type:"yzzh"
        // }).then(function(response){
        //     console.log(response);
        // })
        const { getFieldDecorator } = this.props.form;
        return( 
            <div className={styles.login}>
            <div className={styles.login_form} >
                <div className={styles.login_logo}>
                    <span>Admin Login</span>
                </div>
                <Form style={{maxWidth: '300px'}}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                        )}
                    </FormItem>
                    <FormItem >
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <span className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</span>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button" 
                            style={{width: '100%'}}
                            onClick={this.handleSubmit}
                        >
                            登录
                        </Button>
                        <p style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span >或 现在就去注册!</span>
                            <span onClick={this.gitHub} ><Icon type="github" />(第三方登录)</span>
                        </p>
                    </FormItem>
                </Form>
            </div>
        </div>
        )
    }
}

export default connect(({login})=>({login}))(Form.create()(Login))