import preloader from "../../../assets/img/preloader.svg";
import React from "react";


let Preloader=(props)=>{
    return(
        <div>{props.isFetching ? <img src={preloader}/> : null}</div>
    )
}
export default Preloader