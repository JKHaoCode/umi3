import React, { useState } from 'react';
import { message } from 'antd';
import { useDrop, useDrag } from 'ahooks';

export default () => {
  const getDragProps = useDrag();
  const [props, { isHovering }] = useDrop({
    // onText: (text, e) = {
    //     console.log(e)
    //     message.success(`'text: ${text}' dropped`)
    // },
    onFiles: (files: File[], e) => {
      console.log(e, files);
      message.success(`${files.length} file dropped`);
    },
    onUri: (uri: string, e) => {
      console.log(e);
      message.success(`uri: ${uri} dropped`);
    },
    onDom: (content: string, e) => {
      console.log(e);
      message.success(`custom: ${content} dropped`);
    },
    onText: (text: string, e) => {
      console.log(e);
      message.success(`text: ${text} dropped`);
    },
  });
  console.log(props);
  return (
    <div>
      <div
        style={{
          border: '1px dashed #e8e8e8',
          padding: 16,
          textAlign: 'center',
        }}
        {...props}
      >
        {isHovering ? 'release here' : 'drop here'}
      </div>

      <div style={{ display: 'flex', marginTop: 8 }}>
        {Array.from(Array(5)).map((e, i) => (
          <div
            {...getDragProps(`box${i}`)}
            style={{
              border: '1px solid #e8e8e8',
              padding: 16,
              width: 80,
              textAlign: 'center',
              marginRight: 16,
            }}
          >
            box{i}
          </div>
        ))}
        <span {...getDragProps('wode')}>wodede</span>
      </div>
    </div>
  );
};
