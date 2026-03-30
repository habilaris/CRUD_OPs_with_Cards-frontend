function uploadCardData(name, age, gender) {
  const URL = "http://localhost:3000/api/admin/create-card";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age, gender }),
  })
    .then((response) => {
      console.log("Request made to the server!");
      console.log(response);
      if (!response.ok) {
        console.log(
          "Something happened at the server, Status Code:",
          response.status,
        );
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    })
    .finally(() => {
      console.log("Making sure the script is fine!");
    });
}

export default uploadCardData;
