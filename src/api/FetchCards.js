const API_URI = "http://localhost:3000/api/admin/cards";

function fetchCards(setCards) {
  fetch(API_URI)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log([data]);
      setCards(data);
    })
    .catch((err) => {
      console.error(
        "Request failed to the API endpoint /api/admin/cards:",
        err,
      );
    })
    .finally(() => {
      console.log("Fetch request for getting cards");
    });
}

export default fetchCards;
