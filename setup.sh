echo "## Setting up docker containers for ZooKeeper and Kafka ##"
echo "started pulling zookeeper image from docker hub...."
docker run --name zookeeper -p 2181:2181 zookeeper -t
echo "[SUCESS] zookepeer installed!!"

echo "started pulling kafka image from docker hub...."
docker run --name kafka -p 9092:9092 kafka \
-e  KAFKA_ZOOKEEPER_CONNECT=sounishnathmac:2181 \
-e KAFKA_ADVERTIZED_LISTERNERS=PLAINTEXT://sounishnathmac:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
echo "[SUCESS] kafka installed!!"