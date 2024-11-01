# What is this experiment?

This experiment aims to answer the question:

> Will the full text of alice in wonderland be transmitted faster between client and server when running locally over REST or gRPC?

# Results

gRPC is transmitted slightly faster:
Best Case 5ms faster: REST: 4.1ms, gRPC 3.6ms
Worst Case: REST: 3.6ms, gRPC 3.6ms

# How to Run

Open all folders and run `npm install`
Run `node index` in both gRPC and rest folders, and wait for the servers to log out that they are listening on their respective ports
Run `node index` in the client folder to run the experiment
