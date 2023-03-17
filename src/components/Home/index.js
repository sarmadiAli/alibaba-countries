import Image from 'next/image'
import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';

import React, { useCallback, useEffect, useState } from 'react'
import homeStyle from './../../styles/Home.module.css'
import Filter from './Filter'

var distance = function (a, b) {
    var _a;
    if (a.length === 0)
        return b.length;
    if (b.length === 0)
        return a.length;
    if (a.length > b.length)
        _a = [b, a], a = _a[0], b = _a[1];
    var row = [];
    for (var i = 0; i <= a.length; i++)
        row[i] = i;
    for (var i = 1; i <= b.length; i++) {
        var prev = i;
        for (var j = 1; j <= a.length; j++) {
            var val = void 0;
            if (b.charAt(i - 1) === a.charAt(j - 1))
                val = row[j - 1];
            else
                val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }
    return row[a.length];
};

var closestMatch = function (target, array, showOccurrences, region) {
    if (showOccurrences === void 0) { showOccurrences = false; }
    if (array.length === 0)
        return null;


    var vals = [];
    var found = [];
    if (target.length !== 0) {
        for (var i = 0; i < array.length; i++)
            vals.push((0, distance)(target, array[i]?.name?.common));
    }
    var min = Math.min.apply(Math, vals);

    if (target.length === 0) {
        if (region) {
            found = array.filter(ele => ele.region == region)
        } else {
            found = array
        }
    } else {
        for (var i = 0; i < vals.length; i++) {
            if (vals[i] === min) {
                if (region) {
                    array[i].region == region && found.push(array[i]);
                } else {
                    found.push(array[i]);
                }

            }

        }
    }

    return showOccurrences ? found : found?.[0];
};




export default function HomeContainer({
    countries = []
}) {
    const [q, setQ] = useState("");
    const [filterParam, setFilterParam] = useState("All");
    const router = useRouter()

    const search = (countries) => {
        if (filterParam == "All") {

            return closestMatch(q, countries, true)

        } else {
            return closestMatch(q, countries, true, filterParam)

        }
    }



    return (
        <div className={homeStyle.main} data-testid="homeMain"        >
            <Filter {...{ setQ, q, setFilterParam }} />

            <div className={homeStyle.cards}>
                {
                    search(countries)?.map((ele, _ind) => (
                        <div data-testid="countriesCart" className={homeStyle.card} key={_ind} onClick={() => {
                            router.push({
                                pathname: '/country/[code]',
                                query: {
                                    code: ele?.ccn3 
                                }
                            })
                        }}  >


                            <div style={{ width: '100%', height: '170px', position: 'relative' }}>
                                <Image
                                    src={ele?.flags?.png}
                                    alt={ele?.flags?.alt}
                                    fill
                                    sizes="(max-width: 200px)"

                                />
                            </div>
                            <div className={homeStyle.info}  >
                                <h3>
                                    {ele?.name?.common}
                                </h3>
                                <div className={homeStyle.infoFlex} style={{ marginTop: '10px' }} >
                                    <h5>Population:</h5>
                                    <span className={homeStyle.spanInfo}>{ele?.population}</span>
                                </div>
                                <div className={homeStyle.infoFlex}>
                                    <h5>Region:</h5>
                                    <span className={homeStyle.spanInfo}>{ele?.region}</span>

                                </div>
                                <div className={homeStyle.infoFlex}>
                                    <h5>Capital:</h5>
                                    {
                                        ele?.capital?.map((name, _ind) => ((
                                            <span className={homeStyle.spanInfo} key={_ind}>{name}</span>
                                        )))
                                    }

                                </div>
                            </div>
                        </div>))
                }

            </div>


        </div >
    )
}


