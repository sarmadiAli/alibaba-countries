import CountryComponent from '@/components/countryComponents'
import React from 'react'
export default function Country({ country }) {
    return (<>
        <CountryComponent item={country} />

    </>
    )
}


export async function getServerSideProps(context) {
    const code = context.params.code
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await res?.json()

    return {
        props: {
            country: data?.[0] ?? {}
        }, // will be passed to the page component as props
    }
}
