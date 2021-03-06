const { createClient } = require("redis");
const client = createClient();
const { mongo } = require("./models/logs");

(async function main() {
  console.log('Running')
  const subscriber = client.duplicate();

  await subscriber.connect();
  subscriber.subscribe("Logger", async (message) => {
    await mongo(message);
    console.log(message);
  });
})();
