import { Handle, Position } from 'reactflow';
import { Cable } from 'lucide-react';

const RosConnectBlock = () => {
  return (
    <div className="border p-4">
      <Cable />
      <Handle type="source" position={Position.Right} id="value" />
      <Handle className="!top-1/4" type="target" position={Position.Left} id="x" />
      <Handle className="!top-3/4" type="target" position={Position.Left} id="y" />
    </div>
  );
};

export default RosConnectBlock;
