# Changelog

All notable changes to this project will be documented in this file.

## Version 1.0.0-alpha.4
The excalidraw component library contains *67 shapes*.
[Install v1.0.0-alpha.4](https://excalidraw.com/#addLibrary=https%3A%2F%2Fraw.githubusercontent.com%2Fthriving-dev%2Fkafka-streams-topology-design%2Fmain%2Flibs%2Fkafka-streams-topology-design_v1.0.0-alpha.4.excalidrawlib).

### Notable changes

#### Introducing 'shapes' for DSL operators
Previously, all DSL operators were visualized in _circular shape_. From this version onwards, the notation has been extended to differentiate between _four basic shapes_ to subtly provide hints on the operator's processing characteristics and how this affects the topology.
  
The new shapes are defined as follows:
* **circular**: basic behaviour; no changes to the record key/value; stateless
* **square**: stateful; uses state stores and by default leads to an internal changelog topic to be created in Kafka
* **diamond**: key-changing operator, may lead to an internal repartitioning topic to be created in Kafka on subsequent operations
* **square+diamond**: potentially both key-changing and stateful

#### New library component: 'Legend' 
* A basic diagram legend has been created
* Comes in two variants: _portrait_ & _landscape_ orientation

#### Topic components revised
* There are now three different variants provided for Kafka Topics
  * **Basic**: pipe shape and topic name; without the Kafka logo
  * **Default**: pipe shape with a small Kafka logo; topic name + basic topic config in 2nd line of the text
  * **Plus**: pipe shape next to the large Kafka logo; topic name + advanced topic config in subsequent lines of the text

#### Numeric footnote indicators || Use-case example steps
* A new purple colored circular 'button'; 2 digits (0..99)
* No strict guidelines or purpose, but it can be useful to add e.g.
  * numbered indicators to add footnotes for specific details in the diagram
  * outline process flow (or orchestration) steps, to discribe how a particular complex use case is handled by the topology and/or business logic

#### New toggle descriptor for 'Read-only State Stores'
* ref [KIP-813](https://cwiki.apache.org/confluence/display/KAFKA/KIP-813%3A+Shareable+State+Stores)
  * also described in a [medium post](https://medium.com/confluent/the-mysteries-of-kip-813-8fd2e85ac1d9) by Matthias J. Sax


## Version 1.0.0-alpha.3

This is the initial version that is made available for closed alpha testing.

The excalidraw component library holds *59 shapes*. 
[Install v1.0.0-alpha.3](https://excalidraw.com/#addLibrary=https%3A%2F%2Fraw.githubusercontent.com%2Fthriving-dev%2Fkafka-streams-topology-design%2Fmain%2Flibs%2Fkafka-streams-topology-design_v1.0.0-alpha.3.excalidrawlib).