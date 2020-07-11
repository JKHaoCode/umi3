import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, List, Button, Table } from 'antd';
import {
  CheckOutlined,
  RetweetOutlined,
  CloseOutlined,
} from '@ant-design/icons';
// import loading from './Loading'
import { connect, Dispatch, useModel } from 'umi';
import { WorkState, Work, SearchType } from '@/models/work';
// import { work } from '@/services/api';

const { Search } = Input;

interface TodoType {
  id: number;
  content: string;
  isDone: boolean;
  dataTime: string;
}

interface Search {
  current?: number;
  pageSize?: number;
  total?: number;
}

interface PropsType {
  dispatch: Dispatch;
  work: WorkState;
  loading: boolean;
}

const InitArray: TodoType[] = [];

const TodoList = (props: PropsType) => {
  const { dispatch, work, loading } = props;
  const [data, setData] = useState<TodoType[]>([]);
  const [showArr, setShowArr] = useState<TodoType[]>([]);
  const [search, setSearch] = useState<SearchType>({});

  // const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
  // console.log(initialState, loading, error, refresh, setInitialState)
  console.log(loading);
  useEffect((): void => {
    (async (): Promise<void> => {
      const res = await axios.get('/fakeData');
      // console.log(res)
      const { list } = res.data.todoList;
      setData(list);
      setShowArr(list);
    })();
    dispatch({
      type: 'work/fetch',
      payload: {},
    });
  }, []);
  // console.log(work);

  useEffect(() => {
    // setShowArr(InitArray.concat(data));
  }, [data]);

  const [inputValue, setInputValue] = useState('');

  const [active, setActive] = useState('SHOW_ALL');

  function addTodo(content: string) {
    const newData: TodoType[] = InitArray.concat(data);
    newData.push({
      id: Date.now(),
      content: content,
      isDone: false,
      dataTime: '2019-10-28',
    });
    setData(newData);
    setInputValue('');
  }

  function showStatusList(showStatus: string) {
    if (showStatus === 'SHOW_COMPLETED') {
      const newData = data.filter(item => item.isDone);
      setShowArr(InitArray.concat(newData));
      setActive('SHOW_COMPLETED');
    } else if (showStatus === 'SHOW_ACTIVE') {
      const newData = data.filter(item => !item.isDone);
      setShowArr(InitArray.concat(newData));
      setActive('SHOW_ACTIVE');
    } else {
      setShowArr(InitArray.concat(data));
      setActive('SHOW_ALL');
    }
  }

  function finishTodo(id: number) {
    const newData = InitArray.concat(data);
    const index = newData.findIndex(item => item.id === id);
    newData[index].isDone = true;
    setData(newData);
    if (active === 'SHOW_ALL') {
      setShowArr(newData);
    } else if (active === 'SHOW_COMPLETED') {
      setShowArr(newData.filter(item => item.isDone));
    } else {
      setShowArr(newData.filter(item => !item.isDone));
    }
  }

  function toggleTodo(id: number) {
    const newData = InitArray.concat(data);
    const index = newData.findIndex(item => item.id === id);
    newData[index].isDone = !newData[index].isDone;
    setData(newData);
    if (active === 'SHOW_ALL') {
      setShowArr(newData);
    } else if (active === 'SHOW_COMPLETED') {
      setShowArr(newData.filter(item => item.isDone));
    } else {
      setShowArr(newData.filter(item => !item.isDone));
    }
  }

  function deleteTodo(id: number) {
    const newData = InitArray.concat(data);
    const index = newData.findIndex(item => item.id === id);
    newData.splice(index, 1);
    setData(newData);
    if (active === 'SHOW_ALL') {
      setShowArr(newData);
    } else if (active === 'SHOW_COMPLETED') {
      setShowArr(newData.filter(item => item.isDone));
    } else {
      setShowArr(newData.filter(item => !item.isDone));
    }
  }

  function deleteWork(id: number | undefined) {
    dispatch({
      type: 'work/deleteWork',
      payload: {
        id,
      },
      callback: () => {
        dispatch({
          type: 'work/fetch',
          payload: {
            ...search,
          },
        });
      },
    });
  }

  function todoHeader() {
    return (
      <div className={'mainHeader'}>
        任务列表
        <div className="mainHandle">
          <Button
            size="small"
            type="default"
            className={[
              'classifyBtn',
              active === 'SHOW_ALL' ? 'active' : null,
            ].join(' ')}
            onClick={() => showStatusList('SHOW_ALL')}
          >
            全部
          </Button>
          <Button
            size="small"
            type="default"
            className={[
              'classifyBtn',
              active === 'SHOW_COMPLETED' ? 'active' : null,
            ].join(' ')}
            onClick={() => showStatusList('SHOW_COMPLETED')}
          >
            已完成
          </Button>
          <Button
            size="small"
            type="default"
            className={`classifyBtn ${
              active === 'SHOW_ACTIVE' ? 'active' : undefined
            }`}
            onClick={() => showStatusList('SHOW_ACTIVE')}
          >
            未完成
          </Button>
        </div>
      </div>
    );
  }

  function handleOnChange(pagination: Search) {
    const search = {
      page: pagination.current,
      page_size: pagination.pageSize,
    };
    dispatch({
      type: 'work/fetch',
      payload: {
        ...search,
      },
    });

    setSearch(search);
  }

  // console.log(showArr)
  return (
    <div className="todoList">
      <div className="todoHeader">
        <h1 className="card-title">React Hooks Todo</h1>
        <span className="card-subtitle">添加任务，管理每日计划</span>
      </div>
      <div className="todoSearch">
        <Search
          placeholder="今天完成什么计划?"
          enterButton="添加任务"
          // size="default"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onSearch={(content, event) => addTodo(content)}
        />
      </div>
      <div className="todoMain">
        <List
          header={todoHeader()}
          footer={
            <div className={'mainFooter'}>共 {showArr.length} 项任务</div>
          }
          bordered
          dataSource={showArr}
          loading={loading}
          renderItem={item => (
            <List.Item>
              <Button
                size="small"
                type={item.isDone ? 'primary' : 'dashed'}
                className="status"
              >
                {item.isDone ? '完成' : '未完成'}
              </Button>
              <p className="content">{item.content}</p>
              <div className="operate">
                {/* <span>{item.dataTime}</span> */}
                {item.isDone ? (
                  ''
                ) : (
                  <CheckOutlined
                    style={{ color: 'green' }}
                    onClick={() => finishTodo(item.id)}
                  />
                )}
                <RetweetOutlined
                  style={{ color: '#E7AF62' }}
                  onClick={() => toggleTodo(item.id)}
                />
                <CloseOutlined
                  style={{ color: 'red' }}
                  onClick={() => deleteTodo(item.id)}
                />
              </div>
            </List.Item>
          )}
        />
      </div>
      <Table
        columns={[
          {
            title: 'id',
            dataIndex: 'id',
          },
          {
            title: 'content',
            dataIndex: 'content',
          },
          {
            title: 'dataTime',
            dataIndex: 'dataTime',
          },
          {
            title: 'action',
            key: 'action',
            render: (record: Work) => {
              return <a onClick={() => deleteWork(record.id)}>删除</a>;
            },
          },
        ]}
        dataSource={work.WorlkList.list}
        pagination={work.WorlkList.pagination}
        onChange={handleOnChange}
        rowKey="id"
        loading={loading}
      ></Table>
    </div>
  );
};

export default connect(
  ({
    work,
    loading,
  }: {
    work: WorkState;
    loading: {
      models: {
        [key: string]: boolean;
      };
      effects: [string];
    };
  }) => ({ work, loading: loading.models.work }),
)(TodoList);
