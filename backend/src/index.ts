import express from "express";
import bodyParser from "body-parser";
import logger, { httpLogger } from "./logging";
import config from "./config";
import prisma from "./prisma";
import UserRoutes from "./routes/user.route";
const app = express();

app.use(bodyParser.json());
app.use(httpLogger);

app.use("/user", UserRoutes);

// When a request comes in requesting user data, we have to extract the user identifier from the access token, and figure out whos data to retrieve.
// This allows for secure access to user data, and prevents users from accessing other users data.

app.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});
