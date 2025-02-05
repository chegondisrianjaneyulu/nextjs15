import { SignedIn, SignedOut, SignInButton,  SignOutButton, } from "@clerk/nextjs"
import Link from "next/link"



function Navigation() {
  return (
    <>
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
               <SignInButton mode='modal'/>
            </SignedOut>
            
            <SignedIn>
                <Link href={'/user-profile'}>Profile</Link>
                <SignOutButton/>
            </SignedIn>
             {/* <UserButton/> */}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navigation