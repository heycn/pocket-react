import React from 'react';
import Icon from 'components/Icon';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

// 声明类型
type Props = {
  value: number;
  onChange: (value: number) => void;
  onSave?: () => void;
};

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();

  const setOutput = (output: string) => {
    let value;
    if (output.length > 12) {
      value = parseFloat(output.slice(0, 12));
    } else if (output.length === 0) {
      value = 0;
    } else {
      value = parseFloat(output);
    }
    props.onChange(value);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === '保存') {
      if (props.onSave) {
        props.onSave();
      }
      return;
    }
    if ('0123456789'.split('').concat(['', '·', '清零']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };

  return (
    <Wrapper>
      <div className='outputNode'>
        <div className='outputName'>金额</div>
        <div className='output'>{output}</div>
      </div>
      <div className='pad clearfix' onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          {/* 删除 */}
          <Icon name='delete' />
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清零</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>保存</button>
        <button className='zero'>0</button>
        <button>·</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};
