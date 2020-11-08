import React, {useState} from "react";
import Markdown from 'markdown-to-jsx';
import {Treebeard} from 'react-treebeard';
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

  const treeData = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
  };

  const [data, setData] = useState(treeData);
  const [cursor, setCursor] = useState(false);
  
  const onToggle = (node, toggled) => {
      if (cursor) {
          cursor.active = false;
      }
      node.active = true;
      if (node.children) {
          node.toggled = toggled;
      }
      setCursor(node);
      setData(Object.assign({}, data))
  }

  console.log(guidesContent);

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
          <Treebeard data={data} onToggle={onToggle}/>
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