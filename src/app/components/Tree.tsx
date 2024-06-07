'use client';

import React from 'react';
import { ArcherContainer } from 'react-archer';
import {
  type Relation,
  type SourceAnchor,
  type TargetAnchor,
} from '~/app/types';
import { TreeNode } from './TreeNode';

interface Node {
  id: string;
  text: string;
  children?: Node[];
}

interface TreeProps {
  treeData: Node;
}

export const Tree: React.FC<TreeProps> = ({ treeData }) => {
  const renderNode = (node: Node, parentId?: string) => {
    const relations: Relation[] = parentId
      ? [
          {
            targetId: parentId,
            targetAnchor: 'bottom' as TargetAnchor,
            sourceAnchor: 'top' as SourceAnchor,
            style: {
              strokeColor: 'black',
              strokeWidth: 1,
              startMarker: true,
              endMarker: false,
            },
          },
        ]
      : [];

    return (
      <div
        key={node.id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}>
        <TreeNode id={node.id} text={node.text} relations={relations} />
        {node.children && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            {node.children.map((child) => renderNode(child, node.id))}
          </div>
        )}
      </div>
    );
  };

  return (
    <ArcherContainer strokeColor="black">
      {renderNode(treeData)}
    </ArcherContainer>
  );
};
