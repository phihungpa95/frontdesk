import React, { useContext } from 'react'
import {  NavLink, useHistory   } from 'react-router-dom';

import MyContext from './../Context';

export default function Link (props){
    let context = useContext(MyContext);
    let history = useHistory ();
    function onCLick(e){
        e.preventDefault();
        context.setLoading(true);
        setTimeout(() => {
            history.push(props.to)
            document.querySelector('.wrap-loader').classList.remove('fadeIn')
            setTimeout(() => {
                context.setLoading(false);
            }, 300)
        }, 1000)
        
    }
    return <a href={props.to} {...props} onClick={onCLick}>{props.children}</a>
}
