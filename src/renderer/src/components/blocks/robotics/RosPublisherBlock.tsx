import { Handle, Position } from 'reactflow';
import { Send } from 'lucide-react';

const RosConnectBlock = () => {
  return (
    <div className="border p-4">
      <Send />
      <Handle type="source" position={Position.Right} id="value" />
      <Handle className="!top-1/2" type="target" position={Position.Left} id="x" />
    </div>
  );
};

export default RosConnectBlock;
