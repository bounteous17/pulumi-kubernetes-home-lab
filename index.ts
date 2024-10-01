import { name as nginxDeployment } from "./deployment/nginx";
import { name as traefikHelm } from "./helm/traefik";
import { name as certManager } from "./helm/cert-manager";

export default { deployments: { nginxDeployment }, helm: { traefikHelm, certManager } };
