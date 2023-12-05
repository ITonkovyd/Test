import axios from "axios";
import React, { useEffect, useState } from "react";
import contact from "../../Services/images/person.png";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("key");
        const response = await axios.get("http://localhost:3000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        console.log(data);

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        console.log("Error.message ", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ol>
        {users.map((user) => (
          <li key={user.email}>
            <img src={contact} alt="contact" width="12px" />
            {user.name}, {user.email}, {user.password}
          </li>
        ))}
      </ol>
    </div>
  );
};
