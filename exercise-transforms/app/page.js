import Response from "./Response.json";

export default function Home() {
  const data = Response;
  let goalArray = [];

  data.map(
    ({ id, category: { highLevel, lowLevel }, title, price, salePrice }) => {
      const goalObject = {
        id: id,
        product_details: {
          category: `${highLevel} - ${lowLevel}`,
          name: title,
        },
        price_data: {
          price: price,
          salePrice: salePrice,
        },
      };

      // push into some array here
      goalArray.push(goalObject);
    }
  );

  console.log(goalArray);

  return (
    <main>
      <h1></h1>
    </main>
  );
}
