import { useState } from "react";
import { ColorChanghe } from "./custom-render";
import "./home.css";


export function Home() {

    const [component, setComponent] = useState();

    function changeColorBtn(e) {
        if (e.target.id === 'red') {
            setComponent(<ColorChanghe them='redColor' />)
        } else if (e.target.id === 'green') {
            setComponent(<ColorChanghe them='greenColor'/>)
        }else  {
            setComponent(<ColorChanghe them='yellowColor'/>)
        }
    }

    return (
        <div>
            <nav className="groupColor">
                <span id="red" onClick={changeColorBtn} className="forCenterItem btn btn-danger">Red</span>
                <span id="green" onClick={changeColorBtn} className="forCenterItem btn btn-success">Green</span>
                <span id="yellowColor" onClick={changeColorBtn} className="forCenterItem btn btn-warning">Yellow</span>
            </nav>
            <section className="forCenterItem mt-3 border-2 rounded-2">
                {
                    component 
                }
            </section>
        </div>
    )
}