import React, { ReactNode } from 'react'
export const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div className='text-center bg-transparent'>{children}</div>
}
