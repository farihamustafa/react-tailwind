import React from 'react'

function userlist() {
    const users = [
        { name: "John Doe", email: "john@example.com", position: "Developer", country: "USA", status: "Active" },
        { name: "Jane Smith", email: "jane@example.com", position: "Designer", country: "UK", status: "Inactive" },
        { name: "Alice Johnson", email: "alice@example.com", position: "Product Manager", country: "Canada", status: "Active" },
        { name: "Bob Brown", email: "bob@example.com", position: "QA Engineer", country: "Australia", status: "Active" },
        { name: "Charlie Davis", email: "charlie@example.com", position: "Support", country: "India", status: "Inactive" },
      ];
    
      const editUser = (name) => {
        alert(`Editing user: ${name}`);
      
      };
    
      const deleteUser = (name) => {
        const confirmDelete = confirm(`Are you sure you want to delete ${name}?`);
        if (confirmDelete) {
          alert(`Deleted user: ${name}`);
    
        }
      };
  return (
    <body className="bg-gray-100">
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Position</th>
            <th className="py-3 px-6 text-left">Country</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user) => (
            <tr key={user.name} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{user.name}</td>
              <td className="py-3 px-6 text-left">{user.email}</td>
              <td className="py-3 px-6 text-left">{user.position}</td>
              <td className="py-3 px-6 text-left">{user.country}</td>
              <td className="py-3 px-6 text-left">{user.status}</td>
              <td className="py-3 px-6 text-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => editUser(user.name)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2"
                  onClick={() => deleteUser(user.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </body>
  )
}

export default userlist
