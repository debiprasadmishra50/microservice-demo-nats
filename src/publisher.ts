import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("ticketing", "abc", { url: "http://localhost:4222" });

stan.on("connect", () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: 123,
    title: "concert",
    price: "20",
  });
  const demo = JSON.stringify({
    id: 200,
    title: "new one",
    price: "2000",
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event Published");
  });
  stan.publish("ticket:updated", demo, () => {
    console.log("Event Published");
  });
});
