interface DatabaseTableProps {
  columns: string[];
  data: Record<string, any>[];
}

const DatabaseTable = ({ columns, data }: DatabaseTableProps) => {
  return (
    <div className="w-full text-sm border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="sticky top-0 bg-gray-50 dark:bg-gray-900">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-pink/10 border-b border-gray-200 dark:border-gray-800 last:border-b-0 transition-colors"
            >
              {columns.map((column) => (
                <td
                  key={column}
                  className="px-4 py-3 text-gray-700 dark:text-gray-300"
                >
                  {column.toLowerCase() === 'link' ? (
                    <a
                      href={row[column.toLowerCase()]}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    row[column.toLowerCase()]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseTable;