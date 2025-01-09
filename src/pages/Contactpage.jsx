import React from 'react'
import NextSteps from '../component/Nextstep'
import Contactdetail from '../component/Contactdetail'
import Form from '../component/Form'
import ScrollButton from '../component/Scrollbutton'

const Contactpage = () => {
  return (
    <div>
      <Contactdetail />
      <Form />
     <NextSteps />
     <ScrollButton />
    </div>
  )
}

export default Contactpage
