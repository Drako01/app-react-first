import React, { Component, Fragment } from "react";

export class Flag extends Component {
    render(){
        return React.createElement("h3", {}, "Bandera")
    }
}

export class Ingredients extends Component {
    render(){
        return (
            <Fragment>
                <h4>Ingredientes</h4>
            </Fragment>
        )
    }
}

class Dish extends Component{
    render(){
        return(
            <div>
                <h2>Platillo</h2>
                <Ingredients></Ingredients>
            </div>
        )
    }
}

export default Dish;