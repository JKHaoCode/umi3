import React, { RefObject, useRef } from 'react';
import { Button } from 'antd';
import { useFullscreen } from '@umijs/hooks';
import img from '@/assects/logo.png';

export default () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const { setFull } = useFullscreen<HTMLElement>({
        dom: () => imgRef.current as HTMLImageElement,
    });
    // console.log(imgRef)
    return (
        <div style={{ background: 'white' }}>
            <div style={{ marginBottom: 16 }}>
                <img
                    ref={imgRef as RefObject<HTMLImageElement>}
                    src={img}
                    style={{ width: 320 }}
                    alt=""
                />
            </div>
            <Button onClick={setFull}>full</Button>
        </div>
    );
};
