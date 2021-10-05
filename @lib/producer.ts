import { Producer } from "kafkajs";
import { exit } from "process";
import { __kafkaConfig } from "./config";

// Responsible for creating `Producers` Kafka
export async function producer_runner(message: string) {
  try {
    // needs admin to create producer
    const producer: Producer = __kafkaConfig.producer();

    console.log(`Connecting to Kafka...`);
    await producer.connect();
    console.log(`Connected to Kafka...`);

    /**
     * Start Producing Messeage from The Producers
     * To Kafka Brokers (Paritions)
     */
    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: message,
          partition: determine_partition(message),
        },
      ],
    });

    console.log(`${message} has been produced successully!!`);
    console.table([{result}]);

    await producer.disconnect();
  } catch (error) {
    console.error(`Something Bad Occurred ${error}`);
  } finally {
    exit(0);
  }
}

/**
 *  Idea is to:
 *  I've set 2 partitions to use in kafka broker
 *  if startswith A<=message=>Z put partition1 else partition2
 * @param message
 * @returns number
 */

function determine_partition(message: string): number {
  const c = message[0];
  return ("a" <= c && c >= "z") || ("A" <= c && c >= "Z") ? 0 : 1;
}
