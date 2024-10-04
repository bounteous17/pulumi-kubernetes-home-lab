import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

new kubernetes.core.v1.Service("nginx", {
  spec: {
    ports: [
      {
        port: 80,
        protocol: "TCP",
      },
    ],
    selector: {
      app: "nginx",
    },
  },
  metadata: {
    name: "nginx",
    labels: {
      app: "nginx",
    },
  },
});
