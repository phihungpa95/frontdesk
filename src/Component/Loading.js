import React, {useEffect, useRef} from 'react';

export default () => {
    let ref = useRef(null)
    useEffect(() => {
        ref.current.classList.add('fadeIn')
    }, [])

    return <div className="wrap-loader" ref={ref}>
        <div className="loader"></div>
    </div>
}