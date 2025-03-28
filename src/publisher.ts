import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("ticketing", "abc", { url: "http://localhost:4222" });

stan.on("connect", () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: 123,
    title: "concert",
    price: "10",
  });
  // const data1 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  //   version: 1,
  // });
  // const data2 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  //   version: 2,
  // });
  // const data3 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  // });
  // const data4 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  // });
  // const data5 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  // });
  // const data6 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  // });
  // const data7 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  // });
  // const data8 = JSON.stringify({
  //   id: 123,
  //   title: "concert",
  //   price: "20",
  // });
  const demo = JSON.stringify({
    id: 200,
    title: "new one",
    price: "2000",
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event Published");
  });
  // stan.publish("ticket:created", data1, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data2, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data3, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data4, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data5, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data6, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data7, () => {
  //   console.log("Event Published");
  // });
  // stan.publish("ticket:created", data8, () => {
  //   console.log("Event Published");
  // });
  stan.publish("ticket:updated", demo, () => {
    console.log("Event Published");
  });
});
