import BlockCard from '@/components/flow/BlockCard';

const BlocksLibrary = () => {
  return (
    <div className="grow flex-col rounded-lg bg-background p-4">
      <div className="flex items-center">
        <div className="grow text-2xl font-bold">Blocks Library</div>
      </div>
      <div className="py-1"></div>
      <div className="text-sm">
        Add the block you need by <span className="font-bold">dragging</span> it to the flowchart on
        the right.
      </div>
      <div className="py-2"></div>
      <div className="flex flex-col gap-2">
        {/* TODO: This should be auto generated */}
        <BlockCard
          name="Add"
          desc="Add a bunch of stuff together"
          block_type="flojoy.math.arithmetic.add"
        />
        <BlockCard name="Slider" desc="it slides" block_type="flojoy.control.slider" />
        <BlockCard name="Big Number" desc="Big number" block_type="flojoy.visualization.big_num" />
        <BlockCard
          name="Progress Bar"
          desc="progress bar"
          block_type="flojoy.visualization.progress_bar"
        />
        <BlockCard name="ROS Connect" desc="Connect ROS" block_type='flojoy.robotics.ros_connect'/>
        <BlockCard name="ROS Text" desc="Text from ROS" block_type='flojoy.robotics.ros_text'/>
      </div>
    </div>
  );
};

export default BlocksLibrary;
