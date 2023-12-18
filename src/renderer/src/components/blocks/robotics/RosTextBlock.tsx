import { Text } from 'lucide-react';
import { Handle, Position } from 'reactflow';

const RosTextBlock = () => {
  return (
    <>
      <div className="border p-4">
        <Text />
      </div>
      <Handle type="target" position={Position.Left} id="x" />
    </>
  );
};

export default RosTextBlock;
