import { useDebounceFn } from 'ahooks';
import React, { useState } from 'react';
import { Button } from 'antd';

export default () => {
    const [value, setValue] = useState(0);
    const { run, cancel } = useDebounceFn(
        () => {
            setValue(value + 1);
        },
        {
            wait: 500,
        },
    );

    return (
        <div>
            <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
            <Button type="primary" onClick={run}>
                Click fast!
            </Button>
            <Button type="default" onClick={cancel}>
                cancle
            </Button>
        </div>
    );
};
