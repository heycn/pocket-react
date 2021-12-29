// 导航栏

import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
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
        font-weight: 300;
        .icon {
          width: 28px;
          height: 28px;
          fill: #333;
        }
        &.selected {
          color: #06f;
          font-weight: 1000;
          .icon {
            fill: #06f;
          }
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
          <NavLink to='/tags' activeClassName='selected'>
            <Icon name='tags' />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to='/money' activeClassName='selected'>
            <Icon name='money' />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to='/statistics' activeClassName='selected'>
            <Icon name='chart' />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
