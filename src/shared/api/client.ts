import axios, { type AxiosResponse } from "axios";

export const graphqlClient = axios.create({
  baseURL: "https://graphqlzero.almansi.me/api",
  headers: {
    "Content-Type": "application/json",
  },
});

interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

export async function graphqlFetcher<T, V = Record<string, unknown>>(
  query: string,
  variables?: V
): Promise<T> {
  const response: AxiosResponse<GraphQLResponse<T>> = await graphqlClient.post(
    "",
    {
      query,
      variables,
    }
  );

  if (response.data.errors && response.data.errors.length > 0) {
    throw new Error(response.data.errors[0].message);
  }

  return response.data.data;
}
