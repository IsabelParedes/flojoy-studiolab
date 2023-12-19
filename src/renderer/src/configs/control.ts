import SliderControl from '@/components/blocks/control/SliderControl';
import BigNumberDisplay from '@/components/blocks/control/BigNumberDisplay';
import ProgressDisplay from '@/components/blocks/control/ProgressDisplay';
import RosTextDisplay from '@/components/blocks/control/RosTextDisplay';
import RosConnectBlock from '@/components/blocks/robotics/RosConnectBlock';
import RosPublisherBlock from '@/components/blocks/robotics/RosPublisherBlock';

export const nodeTypes = {
  'flojoy.control.slider': SliderControl,
  'flojoy.visualization.big_num': BigNumberDisplay,
  'flojoy.visualization.progress_bar': ProgressDisplay,
  'flojoy.robotics.ros_text': RosTextDisplay,
  'flojoy.robotics.ros_connect': RosConnectBlock,
  'flojoy.robotics.ros_publisher': RosPublisherBlock,
};
