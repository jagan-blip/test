import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import styles from "./navbar.css"

export  function Navbar() {

    const [check,setCheck] = useState(false);
    
    return(
        <div >
           
                <nav>
                    <div className="menu">
                        <input type ="checkbox" id="check" checked={check}></input>
                        <div className= "brand">
                            AnnsVision 
                            

                            </div>
                            <div className="burger" onClick = {(state) => setCheck(!check)}>
                               {/*  hello
                                <i class="fa fa-bars "style = {{color : "red"}} ></i> */}
                                <label for ="check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                                </div>
                        <div className="items">
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        </div>
                    </div>
                </nav>
                
        </div>
    )
    
}