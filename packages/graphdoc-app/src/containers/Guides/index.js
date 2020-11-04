import React from "react";
import Markdown from 'markdown-to-jsx';
import StyledWrapper from './StyledWrapper';

const Guides = ({config}) => {
  return (
    <div>
      Guides <br />
      <Markdown>
        {config.content}
      </Markdown>
    </div>
  );
};

export default Guides;