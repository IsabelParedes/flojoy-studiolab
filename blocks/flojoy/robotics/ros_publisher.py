import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class FlojoyPublisher(Node):
    def __init__(self):
        super().__init__('flojoy_publisher')
        self.publisher_ = self.create_publisher(String, 'flojoy_topic', 10)
        timer_period = 1 # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f"Hello World: {self.i}"
        self.publisher_.publish(msg)
        self.i += 1

        if self.i >= 20:
            self.destroy_node()

def ros_publisher(x):
    rclpy.init()
    flojoy_pub = FlojoyPublisher()
    rclpy.spin_once(flojoy_pub)
    flojoy_pub.destroy_node()
    rclpy.shutdown()
    return str(x)
