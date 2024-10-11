import express from "express";
import path from "path";
import { fileURLToPath } from 'url'; // To handle ES module path issues

const app = express();

// Resolve __filename and __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "../frontend/build")));

// React Routes - Forward all unmatched requests to React's index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
