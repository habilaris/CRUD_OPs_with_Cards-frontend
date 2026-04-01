async function updateCardData() {
  const URL = "http://localhost:3000/api/admin/update-card";
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify({ name: "Abel Aries", age: 22, gender: "Male" }),
    },
  });
  const data = await response.json();
  return data;
}

export default updateCardData;
