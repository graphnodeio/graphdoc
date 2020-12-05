import React, {useState} from "react";
import Markdown from 'markdown-to-jsx';
import Explorer from './Explorer';
import useContent from '../../services/content/useContent';

const Guides = ({config}) => {
  const homePath = config.guides.name;
  const {
    isLoaded: contentLoaded,
    content: content,
    error: contentLoadingError,
  } = useContent(homePath);

  const {
    isLoaded: guidesContentLoaded,
    content: guidesContent,
    error: guidesContentLoadingError,
  } = useContent('guides.json');

  // console.log(guidesContent);

  if(!contentLoaded || !guidesContentLoaded) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1">
          <Explorer />
        </div>
        <div className="flex-1">
          Second
        </div>
      </div>
      <Markdown className="markdown">
        {content}
      </Markdown>
    </div>
  );
};

export default Guides;