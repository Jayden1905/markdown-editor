import React, { ReactNode } from 'react'
export const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div className='bg-transparent flex h-full'>{children}</div>
}
