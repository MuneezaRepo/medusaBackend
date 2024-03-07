import { AbstractNotificationService, OrderService } from "@medusajs/medusa";
import { EntityManager } from "typeorm";

class EmailSenderService extends AbstractNotificationService {
  static identifier = "email-sender"
  protected orderService: OrderService;

  constructor(container, options) {
    super(container);

    // Access options here in case you're using a plugin
    // Initialize any necessary services or clients
    this.orderService = container.orderService;
    // Initialize a client that communicates with a third-party service if needed
    // this.client = new Client(options);
  }

  async sendNotification(
    event: string,
    data: any,
    attachmentGenerator: unknown
  ): Promise<{
    to: string;
    status: string;
    data: Record<string, unknown>;
  }> {
    if (event === "order.placed") {
      console.log("order",event);
      // Retrieve order
      const order = await this.orderService.retrieve(data.id);

      // TODO: Implement email sending logic here
      // For demonstration purposes, logging the email content
      console.log("Sending email to:", order.email);
      console.log("Email subject:", "You placed a new order!");
      console.log("Order items:", order.items);

      // Return the notification status
      return {
        to: order.email,
        status: "done",
        data: {
          subject: "You placed a new order!",
          items: order.items,
        },
      };
    }
  }

  async resendNotification(
    notification: any,
    config: any,
    attachmentGenerator: unknown
  ): Promise<{
      to: string;
      status: string;
      data: Record<string, unknown>;
    }> {
    // check if the receiver should be changed
    const to: string = config.to || notification.to

    // TODO resend the notification using the same data
    // that is saved under notification.data

    console.log("Notification resent")
    return {
      to,
      status: "done",
      data: notification.data, // make changes to the data
    }
  }

}

export default EmailSenderService;
