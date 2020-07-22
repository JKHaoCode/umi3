import React, {
    useRef,
    useEffect,
    useImperativeHandle,
    forwardRef,
    useState,
    ChangeEvent,
} from 'react';

const ChildInputComponent = (props: any, ref: any) => {
    // console.log(props, ref)
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current);

    return (
        <div>
            <input
                type="text"
                name="child input"
                ref={inputRef => inputRef as HTMLInputElement}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    props.onChange(e.target.value.length)
                }
                placeholder="我聚了"
            />
            <br />
            <input type="text" name="child input" placeholder="我聚了" />
        </div>
    );
};

const ChildInput = forwardRef(ChildInputComponent);

export default () => {
    const inputRef: any = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        // inputRef.current.focus()
        console.log('effsstat');
    }, []);

    return (
        <div>
            <ChildInput onChange={setCount} ref={inputRef} />
            {count}
        </div>
    );
};

// ref 的组件之间的传递
