import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



type User = {
    name: string;
    id: number;
    surename: string;
    email: string;
    role: string;
    departamentId: number;
    workPlace: string;
    
}

type UserLoginData = {
  email: string
  password: string
}
/* {
  "email": "nachozzzz224@gmail.com",
  "password": "password"
} */

export const cyberApi = createApi({
  reducerPath: 'cyberApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' /* http://localhost:2228 */}),
  endpoints: (builder) => ({
      login: builder.mutation<string, UserLoginData>({
          query: (data) =>({
            url: '/login',
            method: 'POST',
            body: data
          }),
          
        transformResponse:  (res: string) => res,
      }),
      getUsers: builder.query<User[], void> ({
        query: () => ({
          url: '/getUsers',
          method: 'GET'
        }),

        transformResponse: (res: User[]) => res
      }),

      getUser: builder.query<User, Pick<User, 'id'>>({
        query: (data) => ({
          url: 'getUser',
          method: 'GET',
          body: data
        }),

        transformResponse: (res: User) => res
      })

    }),

  })




export const {
  useLoginMutation: useLogin
} = cyberApi