import { DeliveryClient } from "@kontent-ai/delivery-sdk";

console.log(import.meta.env.VITE_PROJECT_ID);
const projectId = import.meta.env.VITE_PROJECT_ID;
console.log(projectId);

let deliveryClient = new DeliveryClient({
    projectId: projectId,
})

export { deliveryClient }
