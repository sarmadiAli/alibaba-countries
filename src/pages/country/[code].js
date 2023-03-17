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
    console.log("🚀 ~ file: [code].js:14 ~ getServerSideProps ~ code:", code)
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await res?.json()
    console.log("🚀 ~ file: [code].js:17 ~ getServerSideProps ~ res:", res)



    return {
        props: {
            country: data?.[0] ?? {}
        }, // will be passed to the page component as props
    }
}
