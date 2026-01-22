import { useEffect, useState } from "react";
import UserForms from "./UserForms";
import styles from "./usermgt.module.css";

const UserManagemnt = () => {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";

  // useEffect(() => {
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, []);

  useEffect(()  => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
      <>
        <table className={styles.usersTable}>
          <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <UserForms setData={setData} />
      </>
    )
};

export default UserManagemnt;