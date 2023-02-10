import { DeliveryClient } from "@kontent-ai/delivery-sdk";

const projectId = process.env.PROJECT_ID

let deliveryClient = new DeliveryClient({
    projectId: projectId,
})

export default deliveryClient
