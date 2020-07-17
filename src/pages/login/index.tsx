import React, { RefAttributes } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect, Dispatch } from 'umi';
import { Store } from '@umijs/hooks/es/useFormTable';
import { LoginType } from '@/models/login';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

interface PropsType {
    dispatch: Dispatch;
    work: LoginType;
    loading: boolean;
}

const Login: React.FC<PropsType> = props => {
    // console.log(props);
    const { dispatch } = props;
    const onFinish = (values: Store) => {
        console.log('Success:', values);
        dispatch({
            type: 'login/login',
            payload: {
                ...values,
                remember: true,
            },
        });
    };

    const onFinishFailed = (errorInfo: Store) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input placeholder="邮箱或用户名" />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default connect(
    ({
        login,
        loading,
    }: {
        login: LoginType;
        loading: {
            models: {
                [key: string]: boolean;
            };
            effects: { [key: string]: boolean };
        };
    }) => ({ login, loading: loading.effects['login/login'] }),
)(Login);
