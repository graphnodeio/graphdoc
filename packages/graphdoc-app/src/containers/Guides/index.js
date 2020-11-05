import React from "react";
import Markdown from 'markdown-to-jsx';
import StyledWrapper from './StyledWrapper';

const Guides = ({config}) => {
  return (
    <div className="container mx-auto">
      Guides <br />
      <Markdown className="markdown">
        {config.content}
      </Markdown>
    </div>
  );
};

export default Guides;