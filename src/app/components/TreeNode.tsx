import React from "react";
import { ArcherElement } from "react-archer";
import { type Relation } from "~/app/types";

interface TreeNodeProps {
  id: string;
  text: string;
  relations: Relation[];
}

export const TreeNode: React.FC<TreeNodeProps> = ({ id, text, relations }) => {
  return (
    <ArcherElement id={id} relations={relations}>
      <div className="p-1">{text}</div>
    </ArcherElement>
  );
};
