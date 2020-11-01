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
      font-size: 16px;
    }
    ${tw`mr-1`}

    a {
      ${tw`block mt-4 lg:inline-block lg:mt-0 mr-8`}

      &.active {
        ${tw`text-blue-800 font-semibold`}
      }
    }
  }
`;

export default Wrapper;
