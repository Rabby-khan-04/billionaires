const fetchAndload = async (url, callback) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

// fetch(billionearsApi)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });

{
  /* <br />
<span class="badge badge-ghost badge-sm">Desktop Support Technician</span> */
}
