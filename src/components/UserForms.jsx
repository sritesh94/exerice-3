import { useState } from "react";

function UserForms({ setData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/users";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      id: Date.now(),
      name,
      email,
      address: {
        city,
      },
    };

    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      setData((prevData) => [...prevData, userData]);
      setName("");
      setEmail("");
      setCity("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForms;