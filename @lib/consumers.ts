import { Consumer } from "kafkajs";
import { exit } from "process";
import { __kafkaConfig } from "./config";

// Responsible for creating `Producers` Kafka
export async function consumer_runner() {
  try {
    // needs admin to create producer
    const consumer: Consumer = __kafkaConfig.consumer({
      groupId: "devphase@v1.0",
    });

    console.log(`Connecting to Kafka...`);
    await consumer.connect();
    console.log(`Connected to Kafka...`);

    /**
     * Start Listening to Messeages
     * From The kafka broker partitions -- Users
     * Both Partition 1 and 2.
     */
    const result = await consumer.subscribe({
      fromBeginning: true,
      topic: "Users",
    });

    await consumer.run({
      eachMessage: async (result) =>
        console.log({ status: `ReceivedMessage`, ...result }),
    });

    await consumer.disconnect();
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
