import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage() {
  const [sales, setSales] = useState();
  //   const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://next-js-project-b3db5-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformSales = [];

      for (const key in data) {
        transformSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(
  //       "https://next-js-project-b3db5-default-rtdb.firebaseio.com/sales.json"
  //     ).then((res) =>
  //       res.json().then((data) => {
  //         const transformSales = [];
  //         for (const key in data) {
  //           transformSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales(transformSales);
  //         setLoading(false);
  //       })
  //     );
  //   }, []);

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!data || !sales) {
    return <h1>Loading ...</h1>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}
export default LastSalesPage;
