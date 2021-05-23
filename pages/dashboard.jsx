import React from 'react';
import Link from 'next/link';
import useSWR from 'swr'; 

export function getServerSideProps(req) {
    let data = {};
    data.code = req.query.code;
    
    return {
        props: {
            ...data,
            env : {
                OAUTH_URL: process.env.OAUTH_URL,
                API_URL: process.env.API_URL,
            }
        }
    }
}
export default function Dashboard({ env, code }) {
    let loggedIn = false
    const { data, error } = useSWR(code ? env.API_URL + `/authenticate?code=${code}` : null, myFetch, { shouldRetryOnError: false, credentials: 'include'});
    console.log(data, error);
        
    return (
        <div>
            <p> Dashboard is incomplete! </p>
            <Link href={env.OAUTH_URL}><a>Login</a></Link>
        </div>
    );
}

const myFetch = (url, ...args) => fetch(url, {
        credentials: 'include',
        ...args,
    })