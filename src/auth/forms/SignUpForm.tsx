import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { SignUpValidation } from '@/lib/Validation'
import Loader from '@/components/shared/Loader'
import { Link } from 'react-router-dom'

import { useToast } from "@/components/ui/use-toast"
import { useCreateUserAccountMutation, useSignInAccountMutation } from '@/lib/react-query/queriesAndMutation'


const SignUpForm = () => {
  
  const {toast} = useToast();
  
  // easier fetch data, mutate data and caching it also

  const {mutateAsync : createUserAccount , isLoading: isCreatingUser} = useCreateUserAccountMutation();
  const {mutateAsync: signInAccount, isLoading: isSignIn} = useSignInAccountMutation();

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })

  
  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return toast({
        title: "Sign up Failed Please try again.",
      })
    }


    const session = await signInAccount({
      email: values.email,
      password: values.password,
    }) 

    if(!session){
      return toast({
        title: "Sign in Failed Please try again.",
      })
    }

  }


  return (
    <>
      <Form {...form}>

        <div className='sm:w-420 flex-center flex-col'>
          <img src="/assets/images/logo.svg" alt="" />
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'> Create a new account</h2>
          <p className='text-light-3 small-medium md:base-regular mt-12'>To use Snapgram create a new account or login with existing one</p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Your Full Name</FormLabel>
                  <FormControl>
                    <Input type="text" className='shad-input' placeholder="Harry Potter" {...field} />
                  </FormControl>
                  <FormDescription>

                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What Should people call you?</FormLabel>
                  <FormControl>
                    <Input type="text" className='shad-input' placeholder="@GryffindorSeeker" {...field} />
                  </FormControl>
                  <FormDescription>
                    this will be your username
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />



            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your email</FormLabel>
                  <FormControl>
                    <Input type="email" className='shad-input' placeholder="potterharry@hogwards.edu" {...field} />
                  </FormControl>
                  <FormDescription>

                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Create a Password</FormLabel>
                  <FormControl>
                    <Input type="password" className='shad-input' placeholder="*****" {...field} />
                  </FormControl>
                  <FormDescription>
                    Secure Your Account with a Key
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='shad-button_primary'>

              {isCreatingUser ? (
                <div className='flex-center gap-2'>
                  <Loader /> Loading...
                </div>
              ) : (
                <div>
                  Create Account
                </div>
              )}
            </Button>

            <p className='text-small-regular text-light-2 text-center mt-2'>
              Already have an account ?
              <Link to='/sign-in' className='text-primary-500 text-small-semibold ml-1'>Log in</Link>

            </p>
          </form>
        </div>
      </Form>
    </>
  )
}

export default SignUpForm
