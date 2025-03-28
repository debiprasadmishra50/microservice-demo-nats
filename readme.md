# Microservice Example with Nats

1. TypeScript
2. NATS

## How to run the app

1. Start the Docker Engine
2. Run `kubectl apply -f nats-depl.yaml`
3. Once it's up in kubernates verify it using `kubctl get pods`
4. To run it in localhost, port forward from your local machine to the pod running on Kubernetes
   1. `kubectl port-forward [pod_name] 4222:4222` // for nats
   1. `kubectl port-forward [pod_name] 8222:8222` // for monitoring
5. Open 3 terminals
   4.1 move to nats-test directory
   - `cd ./nats-test`
     4.2 install dependencies with npm
6. Run the publisher and listener

   1. `npm run publish` (in one of the terminals)
   2. `npm run listen` (in one of the terminals)
   3. `npm run listen` (in one of the terminals)
   4. `npm run listen2` (in one of the terminals)

   - here 2 cases are covered
     - Case 1: in case of horizontal scaling
     - Case 2: in case of having multiple consumers with same query group

7. Open a browser and go to http://localhost:8222/streaming to see the metrics being pushed by NATS server
   1. http://localhost:8222/streaming/channelsz?subs=1 to see the channel list
