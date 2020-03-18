import React, { useEffect } from "react";
import SonicCard from "./SonicCard"
import { connect } from "react-redux";

import { fetchSonic } from "../actions";

const SonicList = props => {

    useEffect(() => {
        props.fetchSonic()
    }, [])

    return (
        <div>
            <h1 className="title">Sonic List</h1>
            <div className = "card-container">
                {props.sonic.map(hedge => (
                    <SonicCard hedge={hedge}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sonic: state.sonic,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchSonic }
)(SonicList);