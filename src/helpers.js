import React from 'react'

export const handleChangePercent = percent => {
    if(percent > 0) {
        return <span className="percent-raised"> &uarr; { percent } </span>
    } else if (percent < 0) {
        return <span className="percent-fallen"> &darr; { percent } </span>
    } else {
        return <span>{ percent }</span>
    }
}