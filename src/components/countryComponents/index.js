import { faMoon, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import countryStyle from './../../styles/Country.module.css'

export default function CountryComponent({ item }) {
    const router = useRouter()

    return (
        <div>
            <div className={countryStyle.backBtn} onClick={() => { router.push('/') }}>
                <div className={countryStyle.arrowIcon}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <p>Back</p>
            </div>

            <div className={countryStyle.sections}>
                <div className={countryStyle.section} >
                    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                        <Image
                            src={item?.flags?.png}
                            alt={item?.flags?.alt}
                            fill
                            sizes="(max-width: 200px)"
                        />
                    </div>
                </div>
                <div className={countryStyle.section} >
                    <h2>{item?.name?.common}</h2>
                    <div className={countryStyle.sections}>
                        <div className={countryStyle.section}>
                            <div className={countryStyle.info}>
                                <h5>Native Name:</h5>
                                <span className={countryStyle.spanInfo}>{item?.region}</span>
                            </div>
                            <div className={countryStyle.info}>
                                <h5>Population:</h5>
                                <span className={countryStyle.spanInfo}>{item?.population}</span>
                            </div>
                            <div className={countryStyle.info}>
                                <h5>Region:</h5>
                                <span className={countryStyle.spanInfo}>{item?.region}</span>
                            </div>
                            <div className={countryStyle.info}>
                                <h5>Sub Region:</h5>
                                <span className={countryStyle.spanInfo}>{item?.subregion}</span>
                            </div>
                            <div className={countryStyle.info}>
                                <h5>Capital:</h5>
                                {
                                    item?.capital?.map((name, _ind) => ((
                                        <span className={countryStyle.spanInfo} key={_ind}>{name}</span>
                                    )))
                                }
                            </div>
                        </div>
                        <div className={countryStyle.section}>
                            <div className={countryStyle.info}>
                                <h5>Top Level Domain:</h5>
                                <span className={countryStyle.spanInfo}>{
                                    item?.tld?.map((v) => v)
                                }</span>
                            </div>
                            <div className={countryStyle.info}>
                                <h5>Currencies:</h5>
                                <span className={countryStyle.spanInfo}>{
                                    Object.entries(item?.currencies ?? {}).map(([_, v]) => v?.name)
                                }</span>
                            </div>
                            <div className={countryStyle.info}>
                                <h5>Languages:</h5>
                                <span className={countryStyle.spanInfo}>{
                                    Object.entries(item?.languages ?? {}).map(([_, v]) => v)

                                }</span>
                            </div>
                        </div>
                    </div>
                    <div className={countryStyle.info}>
                        <h5> ‌Border Countries: </h5>
                        <div className={countryStyle.borders} >
                            <p>Farnce</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}
