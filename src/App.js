import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.16.206.4:3003/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000); // Memuat data setiap 1 detik

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen dilepas
  }, []);
  console.log(data)

  return (
    <div>
      <h1>Data from Backend</h1>
      {data ? (
        <div>
          <ul>
            <li>NO_MC: {data.NO_MC}</li>
            <li>BARCODE: {data.BARCODE}</li>
            <li>COUNT: {data.COUNT}</li>
            <li>Status: {data.Status}</li>
            <li>Counter: {data.Counter}</li>
            <li>Total Counter: {data.TotalCounter}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
