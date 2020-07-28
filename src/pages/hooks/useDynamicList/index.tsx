import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';
import { FormProps } from 'antd/lib/form';
import { useDynamicList } from '@umijs/hooks';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Store } from '@umijs/hooks/es/useFormTable';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

export default (props: FormProps) => {
    const { list, remove, getKey, push } = useDynamicList(['David', 'Jack']);

    const [result, setResult] = useState('');

    // const Row = (index: number, item: string) => (
    //     <Form.Item
    //         key={getKey(index)}
    //         label={`names[${getKey(index)}]`}
    //         name={`names[${getKey(index)}]`}
    //         rules={[
    //             {
    //                 required: true,
    //                 message: 'Please input your username!'
    //             }
    //         ]}
    //         initialValue={item}
    //     >
    //         <Input style={{width: '30%'}} placeholder="Input your want to input" />
    //         {list.length  > 1 && (
    //             <PlusCircleOutlined />
    //         )}
    //         <MinusCircleOutlined />
    //     </Form.Item>
    // )

    const onFinish = (values: Store) => {
        console.log('Success', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
    };

    return (
        <Form
            name="dynamic_form_item"
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
        >
            <Form.List name="names">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0
                                        ? formItemLayout
                                        : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Passengers' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message:
                                                    "Please input passenger's name or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="passenger name"
                                            style={{ width: '60%' }}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            style={{ margin: '0 8px' }}
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                >
                                    <PlusOutlined /> Add field
                                </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
