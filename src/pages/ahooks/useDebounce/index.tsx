import { useDebounce } from 'ahooks';
import { Input } from 'antd';
import React, { useState } from 'react';

export default () => {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce(value, { wait: 500 });

    return (
        <div>
            <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Type value"
                style={{ width: '20%' }}
            />
            <p style={{ marginTop: 24 }}>debouncedValue: {debouncedValue}</p>
        </div>
    );
};
