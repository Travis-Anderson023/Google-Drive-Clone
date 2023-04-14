import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  name: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: User;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: "Query";
  getAllUsers: User[];
};

export type User = {
  __typename?: "User";
  _id: Scalars["ID"];
  name: Scalars["String"];
  password: Scalars["String"];
  role?: Maybe<Scalars["String"]>;
};

export type UserFragment = { __typename?: "User"; _id: string; name: string; role?: string | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: { __typename?: "User"; _id: string; name: string; role?: string | null };
};

export type GetAllUsersQueryVariables = Exact<Record<string, never>>;

export type GetAllUsersQuery = {
  __typename?: "Query";
  getAllUsers: { __typename?: "User"; _id: string; name: string; role?: string | null }[];
};

export type MutationKeySpecifier = ("createUser" | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  createUser?: FieldPolicy | FieldReadFunction;
};
export type QueryKeySpecifier = ("getAllUsers" | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  getAllUsers?: FieldPolicy | FieldReadFunction;
};
export type UserKeySpecifier = ("_id" | "name" | "password" | "role" | UserKeySpecifier)[];
export type UserFieldPolicy = {
  _id?: FieldPolicy | FieldReadFunction;
  name?: FieldPolicy | FieldReadFunction;
  password?: FieldPolicy | FieldReadFunction;
  role?: FieldPolicy | FieldReadFunction;
};
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const UserFragmentDoc = gql`
  fragment User on User {
    _id
    name
    role
  }
`;
export const CreateUserDocument = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    getAllUsers {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const namedOperations = {
  Query: {
    GetAllUsers: "GetAllUsers",
  },
  Mutation: {
    CreateUser: "CreateUser",
  },
  Fragment: {
    User: "User",
  },
};
