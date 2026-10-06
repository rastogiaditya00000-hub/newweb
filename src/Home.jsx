import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    const data = [
        {
            "hd": "HTML",
            "txt": "Want to learn HTML? Click Below",
            "btn": "Learn HTML",
            "url":"/html"
        },
        {
            "hd": "CSS",
            "txt": "Want to learn CSS? Click Below",
            "btn": "Learn CSS",
            "url":"/css"
        },
        {
            "hd": "JS",
            "txt": "Want to learn JS? Click Below",
            "btn": "Learn JS",
            "url":"/js"
        },
        {
            "hd": "React",
            "txt": "Want to learn React? Click Below",
            "btn": "Learn React",
            "url":"/re"
        },
    ]
    return (<>

        {
            data.map((a) => {
                return (
                    <>

                        <div className="dd">

                            <div className="hh">
                                <h1>{a.hd}</h1>
                                <p>{a.txt}</p>
                                <Link to={a.url}>
                                <button className="bb">{a.btn}</button>
                                </Link>
                            </div>
                        </div>
                    </>
                )
            })
        }
    </>)
}

export default Home