import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
};

export type BookFragment = { __typename?: 'Book', title?: string | null, author?: string | null };

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', title?: string | null, author?: string | null } | null> | null };

export type BookKeySpecifier = ('author' | 'title' | BookKeySpecifier)[];
export type BookFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('books' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	books?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Book?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookKeySpecifier | (() => undefined | BookKeySpecifier),
		fields?: BookFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const BookFragmentDoc = gql`
    fragment Book on Book {
  title
  author
}
    `;
export const GetAllBooksDocument = gql`
    query GetAllBooks {
  books {
    ...Book
  }
}
    ${BookFragmentDoc}`;

/**
 * __useGetAllBooksQuery__
 *
 * To run a query within a React component, call `useGetAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
      }
export function useGetAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
        }
export type GetAllBooksQueryHookResult = ReturnType<typeof useGetAllBooksQuery>;
export type GetAllBooksLazyQueryHookResult = ReturnType<typeof useGetAllBooksLazyQuery>;
export type GetAllBooksQueryResult = Apollo.QueryResult<GetAllBooksQuery, GetAllBooksQueryVariables>;
export const namedOperations = {
  Query: {
    GetAllBooks: 'GetAllBooks'
  },
  Fragment: {
    Book: 'Book'
  }
}