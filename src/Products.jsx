import React, { useEffect, useState } from "react";
import Sector from "./Sector";

function Products() {
  const [data, setData] = useState([]);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("sectors in prod", sectors);
  return (
    <div className="container">
      <h1> Product Details</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.sector.sectorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Products;
