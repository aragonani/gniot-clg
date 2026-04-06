import ThankYouPage from '@/components/thankyou'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouPage/>
    </Suspense>
  )
}

export default page
