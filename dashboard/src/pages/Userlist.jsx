import React, { useState } from 'react';
import Modal from '../components/Modal';
import EditUser from '../components/Edituser';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", position: "Developer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", position: "Designer", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", position: "Product Manager", status: "Active" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", position: "QA Engineer", status: "Active" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", position: "Support", status: "Inactive" },
    { id: 6, name: "John Doe", email: "john@example.com", position: "Developer", status: "Active" },
    { id: 7, name: "Jane Smith", email: "jane@example.com", position: "Designer", status: "Inactive" },
    { id: 8, name: "Alice Johnson", email: "alice@example.com", position: "Product Manager", status: "Active" },
    { id: 9, name: "Bob Brown", email: "bob@example.com", position: "QA Engineer", status: "Active" },
    { id: 10, name: "Charlie Davis", email: "charlie@example.com", position: "Support", status: "Inactive" },
    { id: 11, name: "John Doe", email: "john@example.com", position: "Developer", status: "Active" },
    { id: 12, name: "Jane Smith", email: "jane@example.com", position: "Designer", status: "Inactive" },
    { id: 13, name: "Alice Johnson", email: "alice@example.com", position: "Product Manager", status: "Active" },
    { id: 14, name: "Bob Brown", email: "bob@example.com", position: "QA Engineer", status: "Active" },
    { id: 15, name: "Charlie Davis", email: "charlie@example.com", position: "Support", status: "Inactive" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = (user) => {
    setEditUser(user);
    setShowEditForm(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) => 
      user.id === editUser.id ? editUser : user
    );
    setUsers(updatedUsers);
    setShowEditForm(false);
    setEditUser(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4 ">
        <input
  type="text"
  placeholder="Search users..."
  className="border border-gray-300 rounded p-2 mr-4 w-1/2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
/>


          <div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mr-2"
              onClick={() => setShowForm(true)}
            >
              Add User
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Export User
            </button>
          </div>
        </div>

       
        <Modal
          isOpen={showForm}
          onClose={() => setShowForm(false)}
        />
        {showEditForm && (
          <EditUser
            user={editUser}
            onSave={handleEditSubmit}
            onCancel={() => setShowEditForm(false)}
            onChange={handleEditChange}
          />
        )}

        <h1 className="text-2xl font-bold mb-4 text-center">User Management</h1>
        <table className="min-w-full bg-white rounded-lg shadow-md mx-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Position</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6 text-left">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.position}</td>
                <td className="py-3 px-6 text-left">{user.status}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit user
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Delete user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end items-center mb-4 mt-4 mb-4"> 
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2"
  >
    Previous
  </button>
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
    Next
  </button>
</div>

      </div>
    </div>
  );
}

export default UserList;
