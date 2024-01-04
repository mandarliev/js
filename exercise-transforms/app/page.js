import Response from "./Response.json";

export default function Home() {
  const data = Response;

  const goalArray = data.map(
    ({ id, category: { highLevel, lowLevel }, title, price, salePrice }) => ({
      id: id,
      product_details: {
        category: `${highLevel} - ${lowLevel}`,
        name: title,
      },
      price_data: {
        price: price,
        salePrice: salePrice,
      },
    })
  );

  console.log(goalArray);

  return (
    <main>
      <h1></h1>
    </main>
  );
}
