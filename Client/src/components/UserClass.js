import React from "react"


class UserClass extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {location , phone} = this.props
        return (
            <div>
                <h3>from : {location}</h3>
                <h3>Phone no. : {phone}</h3>

            </div>
        )
    }
}

export default UserClass;