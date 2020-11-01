import React from "react"
import StyledWrapper from './StyledWrapper';
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom';

const Navbar = () => (
  <StyledWrapper>
    <div className="container mx-auto">
      <nav className="flex items-center justify-between flex-wrap pt-6 pb-6 pr-2 pl-2">
        <div className="flex items-center flex-shrink-0 mr-6">
          <FontAwesomeIcon icon={faBuilding} className="mr-2"/>
          Company Logo
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
          <div className="text-sm lg:flex-grow">
            {/*Todo: Implement dropdown https://fireship.io/lessons/dropdown-menu-multi-level-react/*/}
            <NavLink exact to='/' activeClassName="active">Schema</NavLink>
            <NavLink exact to='/schema/visualize' activeClassName="active">Visualize</NavLink>
            <NavLink exact to='/guides' activeClassName="active">Guides</NavLink>
            <NavLink exact to='/collections' activeClassName="active">Collections</NavLink>
            <NavLink exact to='/explorer' activeClassName="active">Explorer</NavLink>
          </div>
        </div>
      </nav>
    </div>
  </StyledWrapper>
)

export default Navbar;
