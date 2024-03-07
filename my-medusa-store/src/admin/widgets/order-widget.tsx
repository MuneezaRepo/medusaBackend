import type { WidgetConfig } from "@medusajs/admin"

const ProductSWidget = () => {
  return (
    <div>
      <h1>Order Widget hadhh</h1>
    </div>
  )
}

export const config: WidgetConfig = {
//   zone: "product.details.after",
  zone: "order.list.before",
  
}

export default ProductSWidget