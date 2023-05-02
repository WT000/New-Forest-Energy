import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "../../hooks/getServerSession";
import { authOptions } from "../api/auth/[...nextauth]";
import Image from 'next/image';
import Link from 'next/link'
import Tile, {TileType} from "../../components/Tile/Tile";


export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const images = [
    {key:"GitHub", value: "https://th.bing.com/th/id/OIP.D_Gm8IGCvkqmOgtU2hueVwHaHS"},
    {key:"Google", value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"},
  ]


  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center align-middle bg-white-100">

      <div className="mx-auto pb-20">
        <Image
            priority
            src="/logo.png"
            width={200}
            height={50}
            alt="Logo"
            />
      </div>

      <div className="mx-auto pb-4 flex-col space-y-4">
        {Object.values(providers).map((provider) => (
          <div onClick={() => signIn(provider.id)} key={provider.name} className="mx-auto border px-20 py-[6.4px] rounded-lg border-black-700 cursor-pointer 
                                      hover:bg-white hover:border-white-100 hover:shadow-md transition flex gap-4 justify-center align-middle">
              
              <div className="relative h-5 w-5 m-auto">
                <Image
                  priority
                  src={images.filter(x => x.key == provider.name)[0]?.value}
                  fill
                  alt="Logo"
                  />
              </div>

              <div>
                <p className="text-lg">Sign in with {provider.name}</p>
              </div>

          </div>
        ))}
      </div>

      <div className="mx-auto">
        <p className="text-black-500 text-sm">As a guest, please <Link href="/auth/guest" className="text-green-500">sign in here</Link></p>
      </div>

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