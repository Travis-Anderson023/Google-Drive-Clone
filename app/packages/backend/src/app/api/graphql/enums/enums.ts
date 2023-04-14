import { registerEnumType } from "type-graphql";

import { FileTypeEnum } from "../../../types/fileTypeEnum";

export const registerEnums = () => {
  registerEnumType(FileTypeEnum, {
    name: "FileTypeEnum",
  });
};
