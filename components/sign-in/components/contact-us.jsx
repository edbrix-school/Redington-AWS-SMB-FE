import React from 'react'

import { Sidebar } from 'primereact/sidebar';
        

export default function ContactUs({visible,onHide}) {
   
  return (
    <div>
      <Sidebar position="right" visible={visible}  onHide={onHide} >
       hiii
    </Sidebar>
    </div>
  )
}
