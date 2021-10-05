import { Admin } from "kafkajs";
import { exit } from "process";
import { __kafkaConfig } from "./config";

// Responsible for creating `Topics` Kafka
export async function topics_runner() {
  try {
    // needs admin to create topic
    const admin: Admin = __kafkaConfig.admin();

    console.log(`Connecting to Kafka...`);
    await admin.connect();
    console.log(`Connected to Kafka...`);

    /**
     * lets say
     * users with name startswith A-M goes to partition on Partition_1
     * users with name startswith N-Z goes to partition on Partition_2
     *  */

    admin.createTopics({
      topics: [{ topic: "Users", numPartitions: 2 }],
    });
    console.log(`Topic has been created with name Users`);
    await admin.disconnect();
  } catch (error) {
    console.error(`Something Bad Occurred ${error}`);
  } finally {
    exit(0);
  }
}
