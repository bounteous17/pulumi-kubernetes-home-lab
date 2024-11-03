import * as k8s from "@pulumi/kubernetes";
import * as yaml from "js-yaml";
import * as fs from "fs";
import * as pulumi from "@pulumi/pulumi";

const valuesFilePath = "./helm-chart/immich/values.yaml";
const values = yaml.load(
  fs.readFileSync(valuesFilePath, "utf-8")
) as pulumi.Inputs;

const release = new k8s.helm.v3.Release("immich", {
  chart: "immich",
  name: "immich",
  namespace: "immich",
  version: "0.8.4",
  createNamespace: true,
  repositoryOpts: {
    repo: "https://immich-app.github.io/immich-charts",
  },
  values,
});

new k8s.yaml.ConfigFile(
  "immich-ingress",
  {
    file: "helm-chart/immich/ingress.yaml",
  },
  { dependsOn: release }
);
