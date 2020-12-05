import _ from 'lodash';

/**
 * This function converts the guides json into the structure requireed
 * by react-treebeard.
 * {
 *   name: 'root',
 *   toggled: true,
 *   children: [
 *       {
 *           name: 'parent',
 *           children: [
 *               { name: 'child1' },
 *               { name: 'child2' }
 *           ]
 *       },
 *       {
 *           name: 'parent',
 *           children: [
 *               {
 *                   name: 'nested parent',
 *                   children: [
 *                       { name: 'nested child 1' },
 *                       { name: 'nested child 2' }
 *                   ]
 *               }
 *           ]
 *       }
 *   ]
 * };
 */
const toTreeData = (guides = {}) => {
  let data = {
    name: 'root',
    toggled: true,
    children: []
  };

  if(guides && guides.children) {
    _.each(guides.children, (guideChildren) => {
      data.children.push({
        name: guideChildren.name,
        children: []
      });
    });
  }

  return data;
};

export default toTreeData;