import React, { useEffect, useState } from "react";

function Sector({ props }) {
  const [sectorName, setSectorName] = useState("");
  const [data, setData] = useState({});
  const [sectors, setSectors] = useState([]);

  const handleChange = (event) => {
    setSectorName(event.target.value);
    setData({ sectorName: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/sectors", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/sectors");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setSectors(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Sector Name:
          <input type="text" value={sectorName} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <br />
      <h1> Sector Details</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sector Name</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.sectorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sector;
