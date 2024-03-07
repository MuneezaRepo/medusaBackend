import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

// export async function GET(
//   req: MedusaRequest,
//   res: MedusaResponse
// ): Promise<void> {
//   res.sendStatus(200);
// }


export async function GET(req: MedusaRequest, res: MedusaResponse) {
  res.json({
    message: "Hello storefront world!",
  });
}
export const POST = (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  res.json({
    message: "[POST] Hello world!",
  })
}