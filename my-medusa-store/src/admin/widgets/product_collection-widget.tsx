import type { WidgetConfig,ProductCollectionDetailsWidgetProps } from "@medusajs/admin"




  const CollectionWidget = ({
    productCollection,
  }: ProductCollectionDetailsWidgetProps) => {
  return (
    <div>
      <h1>Product Widget Collection {productCollection.id}</h1>
    </div>
  )
}

export const config: WidgetConfig = {
//   zone: "product.details.after",
  zone: "product_collection.details.before",
}

export default CollectionWidget