import { 
  MedusaContainer, 
  NotificationService,
} from "@medusajs/medusa"

console.log("chking notification");
export default async (
  container: MedusaContainer
): Promise<void> => {
  const notificationService = container.resolve<
    NotificationService
  >("notificationService")

  notificationService.subscribe(
    "order.placed", 
    "email-sender"
  )
}