import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 20%;
    text-align: center;
    background-color: var(--yellow);
    /* padding: 0.5rem; */
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 2rem;
      outline: none;
      &:hover {
        color: var(--white);
      }
    }
    .active {
      color: var(--black);
      :hover {
        color: var(--white);
      }
    }
  }
`;

function NavMenu() {
  return (
    <NavStyles>
      <div>
        <ul className=''>
          <li>
            <Link to='/people'>People</Link>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}

export default NavMenu;
