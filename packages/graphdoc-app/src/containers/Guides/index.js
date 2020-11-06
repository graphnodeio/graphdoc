import React from "react";
import Markdown from 'markdown-to-jsx';
import useContent from '../../services/content/useContent';

const Guides = ({config}) => {
  const homePath = config.guides.name;
  const {
    isLoaded: contentLoaded,
    content: content,
    error: contentLoadingError,
  } = useContent(homePath);

  if(!contentLoaded) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <Markdown className="markdown">
        {content}
      </Markdown>
    </div>
  );
};

export default Guides;