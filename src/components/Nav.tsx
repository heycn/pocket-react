// 导航栏

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to='/tags'>标签</Link>
        </li>
        <li>
          <Link to='/money'>记账</Link>
        </li>
        <li>
          <Link to='/statistics'>统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
