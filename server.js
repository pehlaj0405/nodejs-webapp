import express from "express";

const app = express();

// Basic route
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from Node 20 LTS on Azure Web App!</h1>
    <p>Deployed at: ${new Date().toISOString()}</p>
  `);
});

// Azure provides the port via environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
