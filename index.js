const mongoose = require("mongoose");
const config = require("config");
const auth = require("./routes/auth");
const Tutors = require("./routes/Tutors");
const Institutes = require("./routes/Institutes");
const Areas = require("./routes/Areas");
const Coordinators = require("./routes/Coordinators");
const Admins = require("./routes/Admins");
const AcademicDetails = require("./routes/AcademicDetails");
const Reports = require("./routes/Reports");
const Trainees = require("./routes/Trainees");
// const customers = require('./routes/customers');
const express = require("express");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/beliba_homa")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/tutors", Tutors);
app.use("/api/coordinators", Coordinators);
app.use("/api/admins", Admins);
app.use("/api/academicDetails", AcademicDetails);
app.use("/api/reports", Reports);
app.use("/api/trainees", Trainees);
app.use("/api/institutes", Institutes);
app.use("/api/areas", Areas);
app.use("/api/auth", auth);
// app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
