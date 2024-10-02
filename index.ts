import { name as nginxDeployment } from "./deployment/nginx";
import { name as traefikHelm } from "./helm/traefik";
import { name as certManager } from "./helm/cert-manager";
import * as traefikManifest from "./manifest/traefik";
import * as certManagerManifest from "./manifest/cert-manager";
import * as service from "./service";

export default {
  deployments: { nginxDeployment },
  helm: { traefikHelm, certManager },
  manifest: { traefikManifest, certManagerManifest },
  service: { service },
};
