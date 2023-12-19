Hi @lll
For the 

- ROS package $\rightarrow$ Packages are the atomic build unit for ROS, a ROS installation consists of several ROS packages. A ROS package includes information about dependencies (other ROS packages) and can also include multiple ROS nodes.
- ROS node $\rightarrow$ A node is a runtime process that performs a particular computation. For example, a node can contain a publisher which publishes a sequence of even numbers to the topic /even_nums every other second.
- ROS workspace $\rightarrow$ this is just a directory where you add and install ROS packages.
    - When a user installs ROS initially, the user needs to source the workspace where the ROS packages are installed so that those packages become available to use; this step also sets the environment variables needed for using ROS. For our use case, the most important package coming from the ROS installation will be `rclpy` (ROS client library for python).
    - A user then creates a new workspace where they can add and install new ROS packages. This would be where the exported ROS package from Flojoy would end up.

```
ros_workspace/
└── src
    ├── flojoy_ros_package
    │   ├── flojoy_ros_package/
    │   │   ├── flojoy_ros_node.py
    │   │   └── __init__.py
    │   ├── LICENSE
    │   ├── package.xml
    │   ├── resource
    │   │   └── flojoy_ros_package
    │   ├── setup.cfg
    │   ├── setup.py
    │   └── test
    │       ├── test_copyright.py
    │       ├── test_flake8.py
    │       └── test_pep257.py
    ├── other_pkg1
    └── other_pkg2

```

> Then I guess we would (somehow) provide a frontend for managing the package's dependencies, ...


I'm not sure how easy it would be to implement a frontend for managing dependencies, but it may not be strictly necessary. Maybe the dependencies could be automatically added based on the blocks included in the flowchart. For example, if the flowchart has a ROS publisher block, that needs to depend on `rclpy` so this dependency can be automatically added to the package when exporting. Or if the flowchart has a block that subscribes to `Twist` type messages, then `geometry_msgs` could be automatically added to the package.

The dependencies will be greatly limited by the type of ROS blocks available. So it may not be necessary for the user to select the individual dependencies themselves.


> ... and the ROS node for the python file would include the flow chart data + Flojoy runtime.

Yes. We would need to find a way to populate the *flojoy_ros_node.py* file (above) with all this information.

Does Flojoy currently have any options for exporting regular flowcharts? Or are there any plans for this?