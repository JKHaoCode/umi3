const todos = [
    {
        id: 1,
        text: 'todo1',
        finished: true,
    },
    {
        id: 2,
        text: 'todo2',
        finished: false,
    },
    {
        id: 3,
        text: 'todo3',
        finished: true,
    },
    {
        id: 4,
        text: 'todo4',
        finished: false,
    },
    {
        id: 5,
        text: 'todo5',
        finished: false,
    },
];

const delay = (time: number) =>
    new Promise(resolve => setTimeout(resolve, time));
// 将方法延迟1秒
const withDelay = (fn: {
    (params: any): Promise<{
        tab: any;
        result: { id: number; text: string; finished: boolean }[];
    }>;
    (arg0: any): any;
}) => async (...args: any[]) => {
    await delay(1000);
    // @ts-ignore
    return fn(...args);
};

// 获取todos
export const fetchTodos = withDelay((params: any) => {
    const { query, tab } = params;
    let result = todos;
    // tab页分类
    if (tab) {
        switch (tab) {
            case 'finished':
                result = result.filter(todo => todo.finished);
                break;
            case 'unfinished':
                result = result.filter(todo => !todo.finished);
                break;
            default:
                break;
        }
    }

    // 带参数查询
    if (query) {
        result = result.filter(todo => todo.text.includes(query));
    }

    return Promise.resolve({
        tab,
        result,
    });
});
