import React from 'react';
import { useTable } from 'react-table';
import { tableContainer } from '../../../styles/dataTable.css';

const BasicTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className='tableContainer'>
      <table {...getTableProps()} style={{ borderCollapse: 'collapse', borderRadius: '10px' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ border: 'none' }}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: '8px', // Adjust the padding as needed
                    backgroundColor: '#daf0ee', // Change the background color here
                    borderRadius: '10px 10px 0 0', // Rounded corners for the header
                    color: '#3b413c', // Change the font color here
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2' }}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '8px', // Adjust the padding as needed
                      border: '1px solid #dddddd',
                      borderRadius: '0', // No rounded corners for the body cells
                      fontWeight: 'bold', // Make the text thicker
                    }}
                  >
                    {/* Check if column is "out_of_pocket_payment" or "insurance_payment" and prepend dollar sign */}
                    {cell.column.id === 'out_of_pocket_payment' || cell.column.id === 'insurance_payment' ? (
                      `$${cell.value}`
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;