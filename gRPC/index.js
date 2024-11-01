const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "../experiment.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const { ExperimentService } = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(ExperimentService.service, {
  GetData: (call, callback) => {
    callback(null, { message: "Received: ${call.request.message}" });
  },
});

const PORT = "localhost:50051";
server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), () => {
  console.log("gRPC server running on ${PORT}");
  server.start();
});
