import React from 'react';
import { Button, Col, Form, Input, Row, Table, Select } from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import { fetch } from '@/utils/axios';

const { Option } = Select;

interface Item {
    name: {
        last: string;
    };
    email: string;
    phone: string;
    gender: 'male' | 'female';
}

interface Result {
    total: number;
    list: Item[];
}

// interface AppListProps {
//     form: FormProps
// }

const getTableData = (
    { current, pageSize }: PaginatedParams[0],
    formData: Object,
): Promise<Result> => {
    // let query = `page=${current}&size=${pageSize}`;
    let query: any = {
        page: current,
        size: pageSize,
        results: 55,
    };
    console.log(formData);
    Object.entries(formData).forEach(([key, value]) => {
        if (value) {
            query[key] = value;
        }
    });
    return (
        fetch(`https://randomuser.me/api`, query)
            // .then((res) => res.data)
            .then((res: any) => {
                console.log(res);
                return {
                    total: res.info.results,
                    list: res.results,
                };
            })
    );
};

const AppList = () => {
    const [form] = Form.useForm();
    const { tableProps, search, loading } = useAntdTable(getTableData, {
        defaultPageSize: 5,
        form,
    });

    const { type, changeType, submit, reset } = search;
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            render: (text: any) => text && text.last,
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
        },
        {
            title: 'gender',
            dataIndex: 'gender',
        },
    ];

    const advanceSearchForm = (
        <div>
            <Form form={form}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="name" name="name">
                            <Input placeholder="name" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="email" name="email">
                            <Input placeholder="email" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="phone" name="phone">
                            <Input placeholder="phone" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <Button type="primary" onClick={submit}>
                            Search
                        </Button>
                        <Button onClick={reset} style={{ marginLeft: 16 }}>
                            Reset
                        </Button>
                        <Button type="link" onClick={changeType}>
                            Simple Search
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </div>
    );

    return (
        <div>
            {advanceSearchForm}
            <Table
                columns={columns}
                rowKey={record => record.email}
                {...tableProps}
                loading={loading}
            />
        </div>
    );
};

export default AppList;
