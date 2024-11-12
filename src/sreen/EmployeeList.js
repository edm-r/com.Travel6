import React, { useState, useEffect } from 'react';

const EmployeeList = ({ employees, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Liste des Employés</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - Rôle: {employee.role}
            <button onClick={() => onEdit(employee)} style={buttonStyle}>Modifier</button>
            <button onClick={() => onDelete(employee.id)} style={buttonStyle}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const buttonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#87CEFA',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};


  export default EmployeeList ;