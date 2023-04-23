import { environmentConfig } from "@app/shared-utils";
import * as mongoose from "mongoose";

export const initConnection = async () =>
  await mongoose.connect(environmentConfig.backend.MONGOOSE_URL ?? "", {
    dbName: environmentConfig.backend.DB_NAME,
  });
