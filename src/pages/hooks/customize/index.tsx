import { Tabs, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { fetchTodos } from './api';

const TAB_ALL = 'all';
const TAB_FINISHED = 'finished';
const TAB_UNFINISHED = 'unfinished';
const tabMap = {
    [TAB_ALL]: '全部',
    [TAB_FINISHED]: '已完成',
    [TAB_UNFINISHED]: '待完成',
};

const { TabPane } = Tabs;

function App() {
    const [activeTab, setActiveTab] = useState(TAB_ALL);

    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetchTodos({ tab: activeTab })
            .then(result => {
                setTodos(result);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [activeTab]);

    return (
        <>
            <Tabs activeKey={activeTab} onChange={setActiveTab}>
                <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL} />
                <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED} />
                <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED} />
            </Tabs>
            <div className="app-wrap">
                <h1 className="app-title">Todo List</h1>
                <Input />
                {/*<TodoList />*/}
            </div>
        </>
    );
}

export default App;
