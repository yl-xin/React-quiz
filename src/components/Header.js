import React from 'react';



function Header(props){
    return (
        <div>
            <h2 className="ui center aligned icon header ">
            <i className=" heart outline icon"></i>
            {props.title}
        </h2>
        </div>
    );
}
export default Header;