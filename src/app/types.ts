export interface Node {
  id: string;
  text: string;
  children?: Node[];
}

export type TargetAnchor = 'top' | 'bottom' | 'left' | 'right' | 'middle';
export type SourceAnchor = 'top' | 'bottom' | 'left' | 'right' | 'middle';

interface ArcherStyle {
  strokeColor: string;
  strokeWidth: number;
  strokeDasharray: string;
  noCurves: boolean;
  lineStyle: 'angle' | 'curve' | 'straight';
  startMarker: boolean;
  endMarker: boolean;
}

export interface Relation {
  targetAnchor: TargetAnchor;
  sourceAnchor: SourceAnchor;
  targetId: string;
  style: Partial<ArcherStyle>;
  label?: string;
}
