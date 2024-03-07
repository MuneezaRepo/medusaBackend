// import MyCustomService from "../services/my-custom";
import {
  OrderService,
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/medusa";

type OrderPlacedEvent = {
  id: string;
  no_notification: boolean;
};

export default async function orderPlacedHandler({
  data,
  eventName,
  container,
}: SubscriberArgs<OrderPlacedEvent>) {
//   const orderService: OrderService = container.resolve(OrderService);
console.log("orderlacehandlerer",data);
console.log(eventName,"ascjsnjncsajncjsnjnjansjnas")
  const orderService: OrderService = container.resolve<OrderService>("OrderService");
  
const { id } = data;
  const order = await orderService.retrieve(data.id, {
    relations: ["items", "items.variant", "items.variant.product"],
  });

    
}

export const config: SubscriberConfig = {
  event: OrderService.Events.PLACED,
};


