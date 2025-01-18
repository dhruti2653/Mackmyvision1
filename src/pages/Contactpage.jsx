import React from 'react'
import NextSteps from '../component/Nextstep'
import Contactdetail from '../component/Contactdetail'
import Form from '../component/Form'

const Contactpage = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Contactdetail />
      <Form />
     <NextSteps />
    </div>
  )
}

export default Contactpage
