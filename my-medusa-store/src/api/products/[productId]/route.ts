import type {
    MedusaRequest,
    MedusaResponse,
    ProductService,
  } from "@medusajs/medusa";
  
  export async function GET(req: MedusaRequest, res: MedusaResponse) {
    const { productId } = req.params;
  
    const productService: ProductService = req.scope.resolve("productService");
  
    const product = await productService.retrieve(productId);
  
    res.json({
      product,
    });
  }