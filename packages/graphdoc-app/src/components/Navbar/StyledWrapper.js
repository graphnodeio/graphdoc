import styled from 'styled-components';
import tw from "twin.macro";

const Wrapper = styled.div`
  .logo {
    width: 35px;
  }
  .logo-text {
    width: 150px;
  }
  input.search {
    background: #0E2343;
  }
  nav {
    a {
      font-weight: 600;
      font-size: 16px;
    }
    ${tw`mr-1`}

    a {
      ${tw`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-8`}

      &.active {
        ${tw`-mb-px border-l border-t border-r rounded-t text-blue-700 font-semibold`}
      }
    }
  }
`;

export default Wrapper;
