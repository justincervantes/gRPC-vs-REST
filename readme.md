# What is this experiment?

This experiment aims to answer the question:

> Will the full text of alice in wonderland be transmitted faster between client and server when running locally over REST or gRPC?

# Results

gRPC is approximately 28.68% faster than REST averages (2.183 ms for REST vs. 1.557 ms for gRPC) when transmitting Alice in Wonderland
NB: Running locally will yield variable results, this repo defaults to 10 iterations for each server type and averages, the above note was used for 1000 calls to average.

# How to Run

Open all folders and run `npm install`
Run `node index` in both gRPC and rest folders, and wait for the servers to log out that they are listening on their respective ports
Run `node index` in the client folder to run the experiment
