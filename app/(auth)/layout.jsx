import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='hidden w-1/2 items-center justify-center p-10 lg:flex xl:w-2/5 bg-authBg bg-cover bg-center' />
            {/* <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12 '>
               hello
            </div> */}
        

        <section className='flex flex-1 flex-col justify-center bg-white p-4 py-10 lg:p-10 lg:py-16'>
            {/* <div className='mb-16 lg:hidden'>
                <Image src='assets/icons/logo-full-brand.svg' alt='logo' width={224} height={82} className='h-auto w-[200px] lg:w-[250px]' />
            </div> */}
            {children}
        </section>
        </div>
  )
}

export default layout