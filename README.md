# UseKafka
![Apache-Kafka-Logo](https://dz2cdn3.dzone.com/storage/article-thumb/12418930-thumb.jpg)
[Kafka](https://kafka.apache.org/)
created to gain and learn the concepts of kafka how it helps to build bus using realtime / stream-processing. Kafka made to Scala and Java. Original Author [LinkedIn](https://www.linkedin.com/), later [OpenSourced](https://github.com/apache/kafka).

In this demo, I build a node-ts app which create topics, produce messages, consume. Which will help anybuddy to kick start and learn kafka including myself.
Concepts collected from various sources and tutorials on internet.

To Know More: [Wikipedia](https://en.wikipedia.org/wiki/Apache_Kafka)

## Components
- Kafka Broker
- Kafka Producer
- Kafka Consumer
- Kafka Partitions
- Queue vs Pub-Sub
- Consumer Group
- ZooKeeper
- [More in Documenentations](https://kafka.apache.org/)

## Pros
![Architecture-Kafka](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Overview_of_Apache_Kafka.svg/220px-Overview_of_Apache_Kafka.svg.png)


Apache Kafka is a community distributed event streaming platform capable of handling trillions of events a day. Initially conceived as a messaging queue, Kafka is based on an abstraction of a distributed commit log. Since being created and open sourced by LinkedIn in 2011, Kafka has quickly evolved from messaging queue to a full-fledged event streaming platform.

Aims to build unified, high-throughput, low-latency platform for handling real-time data feeds.

- Append only Commit Logs
- Performance
- Distributed
- Event Driven . Queues . [Publish-Subcriber Pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
- Long Poling
- Scaling
- Parallel Processing

## Connections with DataSources
![kafka-seamless-intregations](https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/Kafka-Consumer-Proxy-Sharing-Figure-1.png)

## Cons
- Zookeeper
- Producer Explicit Partition can lead to problem in big processings
- Complex to install, configure, manage.


## Running in Local

To run this project, You need to have [Docker](https://www.docker.com/) installed in your machine.
I used docker to avoid the heavy installation of these stuffs.

- Installs ZooKeeper and Kafka from DockerHub
```bash
./setup.sh
```
- Install Dependencies
```bash
yarn
```

- Devphase Runner
```bash
yarn dev
```

- Build
```bash
yarn build
```

`hostname`: hostname of your machine

  
## Acknowledgements

 - [Kafka Docs](https://kafka.apache.org/)
 - [KafkaJs Npm Module](https://www.npmjs.com/package/kafkajs)
 - [Hussien Nassar](https://www.youtube.com/watch?v=R873BlNVUB4)

  
