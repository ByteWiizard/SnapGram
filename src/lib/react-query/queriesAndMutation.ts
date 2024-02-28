import {useQuery,useMutation,useQueryClient,useInfiniteQuery} from '@tanstack/react-query'
import { createUserAccount , SignInUser} from '../AppWrite/api'
import { INewUser } from '@/types'


// now this function can be used in the signup form 
export const useCreateUserAccountMutation = () => {

    return useMutation({
        mutationFn: (user:INewUser) => createUserAccount(user)
    })
}

export const useSignInAccountMutation = () => {

    return useMutation({
        mutationFn: (user:{email:string,
        password:string}) => SignInUser(user),
    });
}