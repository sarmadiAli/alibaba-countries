import React, { useEffect, useState } from 'react'
import style from './../../../styles/Filter.module.css'
export default function Filter({
    setQ, q, setFilterParam
}) {




    return (
        <>
            <div className={style.searchWrapper}   >
                <input
                    data-testid='searchInput'
                    style={{ width: '400px' }}
                    type="search"
                    name="search-form"
                    className={style.searchInput}
                    placeholder="Search for country"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <div className={style.select}>
                    <select
                    data-testid='selectOption'
                        onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}
                        className={style.customSelect}
                        aria-label="Filter Countries By Region"
                    >
                        <option value="All">Filter By Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <span className={style.focus}></span>
                </div>
            </div>

        </>
    )
}
