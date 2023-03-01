const billionearsApi = `https://forbes400.onrender.com/api/forbes400?limit=100`;

const loadbillionears = (data) => {
  const billionearContaienr = document.getElementById("billionears-container");
  const showIndustries = (industries) => {
    let industryDiv = "";
    industries.forEach((industry) => {
      industryDiv += `
      <span>${industry + ","}</sapn>
    `;
    });
    return industryDiv;
  };
  data.forEach((billionear) => {
    // console.log(billionear);
    const {
      person,
      personName,
      countryOfCitizenship,
      finalWorth,
      position,
      thumbnail,
      squareImage,
      bios,
      city,
      industries,
      source,
      abouts,
      state,
    } = billionear;

    billionearContaienr.innerHTML += `
    <tr>
      <td>${position}</td>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src="${
                squareImage.includes("https:")
                  ? squareImage
                  : "https:" + squareImage
              }" alt="avater" />
            </div>
          </div>
          <div>
          <div class="font-bold">${personName}</div>
            <div class="text-sm opacity-50">${city}, ${state ? state : ""}</div>
          </div>
          <label for="billionear-details" style="cursor: pointer;"><i class="fa-solid fa-eye"></i></label>
        </div>
      </td>
      <td>
      ${countryOfCitizenship}
      </td>
      <td>${showIndustries(industries)}</td>
      <td>
        $${finalWorth}
      </td>
    </tr>
  `;
  });
};

fetchAndload(billionearsApi, loadbillionears);
