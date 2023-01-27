const Table = ({ tableHeads, tableRows }) => {
  // use tailwind css
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {tableHeads.map((head, index) => (
            <th key={index} className="px-4 py-2">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row, index) => (
          <tr key={index}>
            {row.map((data, index) => (
              <td key={index} className="border px-4 py-2">
                {data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
