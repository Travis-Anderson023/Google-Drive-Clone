import { gql, MutationHookOptions, useMutation } from "@apollo/client";

const gqlFileUpload = gql`
  mutation SingleFileUpload($file: Upload!) {
    singleFileUpload(file: $file)
  }
`;

export const useSingleFileUpload = (args?: MutationHookOptions) => {
  return useMutation(gqlFileUpload, args);
};
