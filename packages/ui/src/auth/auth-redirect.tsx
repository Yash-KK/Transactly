import React from 'react'
import Link from "next/link"

type AuthLabelProps = {
    signIn: boolean
}
const AuthRedirect: React.FC<AuthLabelProps> = ({signIn})=>{
    return (
        <p className="text-sm font-light text-gray-300">
        {signIn ? <>Do not have an account?{" "}</>: <> Already have an account?{" "}</>}
        <Link
          href={signIn ? "/signup": "/signin"}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {signIn? <>Sign up here</>: <>Sign in here</>}
        </Link>
      </p>
    )
}
export default AuthRedirect