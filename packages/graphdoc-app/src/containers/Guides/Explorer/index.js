import React, {useState} from "react";
import {Treebeard} from 'react-treebeard';
import StyledWrapper from './StyledWrapper';
import useContent from '../../../services/content/useContent';
import toTreeData from './toTreeData';

const Explorer = () => {
  let {
    isLoaded: guidesContentLoaded,
    content: guidesContent,
    error: guidesContentLoadingError,
  } = useContent('guides.json');

  if(guidesContent) {
    guidesContent = JSON.parse(guidesContent);
  }

  const treeData = toTreeData(guidesContent);

  // const [data, setData] = useState(treeData);
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
  };

  return (
    <StyledWrapper>
      <div>
        Explorer
        <Treebeard data={treeData} onToggle={onToggle}/>
      </div>
    </StyledWrapper>
  );
};

export default Explorer;
