import rclpy
from rclpy.node import Node

def ros_connect(x, y):
    # tst = str(x) + str(dir(rclpy))
    rclpy.init()
    flojoy_node = Node("flojoy_node")
    topic_list = flojoy_node.get_topic_names_and_types()
    flojoy_node.destroy_node()
    tst = str(x) + str(topic_list)
    return str(tst)
