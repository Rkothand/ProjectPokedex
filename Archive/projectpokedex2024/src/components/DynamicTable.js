// src/components/DynamicTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  tr:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
    }
  }
`;

const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example API endpoint, replace it with your actual API endpoint
        const response = await axios.get('https://api.example.com/data');
        setTableData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>HP</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.type}</td>
            <td>{row.hp}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default DynamicTable;
