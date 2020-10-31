import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  .graphiql-container {
    border: 1px solid #e0e0e0;

    .doc-explorer-title-bar,
    .history-title-bar,
    .topBar {
      min-height: 34px;
      height: inherit;
    }
   }
`;

export default Wrapper;
