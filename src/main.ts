import { argv } from "process";
import { consumer_runner, producer_runner, topics_runner } from "../@lib";

run().then();

async function run() {
  try {
    const params = argv;
    const type = params[2];

    /**
     * Determine on basis of User Requirement
     * 1. Create Topic:         topics_runner()
     * 2. Produce Message:      producer_runner(message)
     * 3. Consumers:            consumers()
     */

    switch (type) {
      case "topics":
        topics_runner();
        break;

      case "produce":
        const msg = params[3];
        if (!msg) throw new Error("Provide some Message to Produce!!");
        producer_runner(msg);
        break;

        case 'consume':
          consumer_runner();

      default:
        throw new Error("Unmatched Arguments Requested!!");
    }
  } catch (error) {
    console.error(`Something Bad Occurred ${error}`);
  }
}
