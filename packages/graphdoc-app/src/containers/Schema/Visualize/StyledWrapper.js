import styled from 'styled-components';

const Wrapper = styled.div`
  .graphql-voyager {
    height: calc(100% - 80px);

    .loading-box {
      background: rgb(255 255 255 / 80%);
      left: 0;

      .loading-animation {
        svg {
          display: none;
        }
        h1 {
            color: transparent;
            position: fixed;
            top: 0; right: 0;
            bottom: 0; left: 0;
            background: #fff;
        }
        h1 {
            left: 50%;
            margin-left: -4em;
            font-size: 10px;
            border: .8em solid rgba(218, 219, 223, 1);
            border-left: .8em solid rgba(58, 166, 165, 1);
            animation: spin 1.1s infinite linear;
        }
        h1, h1:after {
            border-radius: 50%;
            width: 8em;
            height: 8em;
            display: block;
            position: absolute;
            top: 50%;
            margin-top: -4.05em;
        }

        @keyframes spin {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      }
    }

    .contents .type-doc span.loading {
      color: white;
      margin-bottom: -30px;
      min-height: 30px;
      background-color: white;
      z-index: 1;
    }

    .contents {
      border-right: none;

      .powered-by {
        border:solid 1px #dedede;
        border-top:none;
      }
    }

    .menu-content {
      left: 350px;
      box-shadow: 0 4px 4px -2px rgba(0, 0, 0, .1);
    }

    .viewport {
      max-height: 90vh;
      svg {
        border:solid 1px #dedede;
        border-left: none;
      }
    }
    .contents .type-doc {
      border:solid 1px #dedede;
      margin-top: 0;

      .doc-navigation {
        min-height: 40px;
        align-items: center;
        display: flex;
      }

      .scroll-area {
        .doc-explorer-type-list {
          max-height: 500px;
        }
      }
    }
  }
`;

export default Wrapper;
