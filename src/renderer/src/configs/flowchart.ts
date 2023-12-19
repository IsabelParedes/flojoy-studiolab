import AddBlock from '@/components/blocks/flow/AddBlock';
import BigNumberBlock from '@/components/blocks/flow/BigNumberBlock';
import ProgressBlock from '@/components/blocks/flow/ProgressBlock';
import SliderBlock from '@/components/blocks/flow/SliderBlock';
import RosConnectBlock from '@/components/blocks/robotics/RosConnectBlock';
import RosTextBlock from '@/components/blocks/robotics/RosTextBlock';
import RosPublisherBlock from '@/components/blocks/robotics/RosPublisherBlock';

export const nodeTypes = {
  'flojoy.control.slider': SliderBlock,
  'flojoy.visualization.big_num': BigNumberBlock,
  'flojoy.visualization.progress_bar': ProgressBlock,
  'flojoy.math.arithmetic.add': AddBlock,
  'flojoy.robotics.ros_connect': RosConnectBlock,
  'flojoy.robotics.ros_text': RosTextBlock,
  'flojoy.robotics.ros_publisher': RosPublisherBlock,
};
