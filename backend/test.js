const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.9ergk0p.mongodb.net",
  (err, records) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log(records);
    }
  }
);