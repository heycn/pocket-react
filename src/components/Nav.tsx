// 导航栏

import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    li {
      width: 33.3333%;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        padding: 4px 0;
        .icon {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to='/tags'>
            <Icon name='tags' />
            标签
          </Link>
        </li>
        <li>
          <Link to='/money'>
            <Icon name='money' />
            记账
          </Link>
        </li>
        <li>
          <Link to='/statistics'>
            <Icon name='chart' />
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
