import { Kafka } from "kafkajs";

export const __kafkaConfig: Kafka = new Kafka({
  clientId: "mykafkaappnode",
  brokers: ["sounishnathmac:9092"],
});

console.table([
  { clientId: "mykafkaappnode", brokers: ["sounishnathmac:9092"] },
]);
