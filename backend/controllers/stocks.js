const fs = require("fs");

exports.getcompanydata = (req, res) => {
  var companyName = req.query.name;
  console.log(companyName);

  fs.readFile("./data/stocks.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const companiesData = JSON.parse(jsonString);
      console.log(`${companyName} data is : `, companiesData[companyName]);
      let onlyDates = [];
      for (let index = 0; index < companiesData[companyName].length; index++) {
        let eachDate = companiesData[companyName][index]['Date'];
         onlyDates.push(eachDate)
      }
      companiesData[companyName] !== undefined
        ? res.send({
            success: true,
            data: {
              stocks: companiesData[companyName],
              dates: onlyDates,
            },
          })
        : res.send({
            message: false,
            data: null,
          });
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};
