import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import Image from 'next/image';


export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      
      <div className="hidden md:block w-full relative -z-10">
        <Image
          className="bottom-8"
          priority
          src="/img/leafBackgroundVertical.svg"
          fill
          alt="Leaf Image"
          />
      </div>

      {/*<div className="hidden md:block h-32 overflow-clip">
          <div className="h-56 w-full relative -z-10 bottom-8">
              <Image
                  priority
                  src="/img/leafBackgroundVertical.svg"
                  fill
                  alt="Leaf Image"
                  />
          </div>                    
        </div>*/}

      
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}