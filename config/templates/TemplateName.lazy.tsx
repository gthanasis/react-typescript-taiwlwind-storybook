import React, { lazy, Suspense } from 'react'

const LazySample = lazy(() => import('./TemplateName'))

const Sample = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazySample {...props} />
    </Suspense>
)

export default Sample
