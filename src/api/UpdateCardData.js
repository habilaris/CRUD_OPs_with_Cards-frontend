async function updateCardData(card_id, name, age, gender) {
  const URL = "http://localhost:3000/api/admin/update-card";
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      card_id,
      name,
      age,
      gender,
    }),
  });
  const data = await response.json();
  console.log("Sent your data to the update card api, The responce is:", data);

  return data;
}

export default updateCardData;
