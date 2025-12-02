// import Head from 'next/head'
import React from 'react'
import Top from './top'

export default function Layout({ children }) {
  return (  
      <>
      <div>
       {/* <Head>
        <title>{title}</title>
        <style data-fullcalendar></style>
        <meta name="google-site-verification" content="W6XmndxNINBwm3c3p5KH0Sar2-92Hufz7t4kD0-d1HA" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fevIcon.ico" />
      </Head> */}
      </div>
       <Top/>
        <div>
          <main>
            {children}
          </main>
        </div>
      </>
   
   
  )
}
