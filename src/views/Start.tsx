/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';
import Icon from 'components/Icon';
import img from 'images/qrcode.png';
import {Center} from 'components/Center';

const Wrapper = styled.div`
  height: 100vh;
  background: #06f;
  display: flex;
  justify-content: center;
  .title {
    color: #ededed;
    font-size: 40px;
    font-weight: 200;
    padding-bottom: 56px;
  }
  .qrCode {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ededed;
    font-weight: 200;
    font-size: 16px;
    img {
      width: 10em;
      height: 10em;
    }
    span {
      padding-top: 18px;
    }
  }
  .middle {
    padding-top: 40px;
    display: flex;
    align-items: center;
    color: #ededed;
    font-size: 40px;
    font-weight: 200;
    .icon {
      margin-right: 8px;
      fill: #ededed;
      width: 1.1em;
      height: 1.1em;
    }
  }
  @keyframes scaleDraw {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.25);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.25);
    }
  }

  .tips {
    margin-top: 64px;
    color: #ededed;
    font-weight: 200;
    font-size: 16px;
    -webkit-animation: scaleDraw 5s infinite ease-in-out;
  }
`;

// 开发完一定要改回来！！！
// 开发完一定要改回来！！！
// 开发完一定要改回来！！！
const onClick = () => {
  return (window.location.href = 'http://10.227.199.165:3000/pocket-react-website#/money');
};

function Start() {
  return (
    <Wrapper onClick={onClick}>
      <Center>
        <div className='title'>简约 快速 好用</div>
        <div className='qrCode'>
          <img src={img} />
          <span>手机微信扫码浏览效果更佳哟~</span>
        </div>
        <div className='middle'>
          <Icon name='logo' /> 口袋记账
        </div>
        <div className='tips'>点击任意处开启记账...</div>
      </Center>
    </Wrapper>
  );
}

export default Start;
