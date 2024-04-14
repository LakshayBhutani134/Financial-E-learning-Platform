import React, { useState, useEffect } from 'react';
import '../../App.css'

const ChatBot = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/data');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Stock Data</h1>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adj Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.Ticker}</td>
                <td>{row.Date}</td>
                <td>{row.Open}</td>
                <td>{row.High}</td>
                <td>{row.Low}</td>
                <td>{row.Close}</td>
                <td>{row['Adj Close']}</td>
                <td>{row.Volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ChatBot;