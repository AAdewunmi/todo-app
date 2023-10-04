import React, {useState} from "react";

const Todo = () => {
    const[isEditing, setIsEditing] = useState(false);
    
    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };
    
    return (
        isEditing ? <input /> : 
            <div className="ui grid center aligned">
                <div className="row" onDoubleClick={handleDivDoubleClick}>
                <div className="column five wide">
                    <h2>Test</h2>
                </div>
                <div className="column one wide">
                    <button className="ui button circular icon green">
                    <i className="white check icon"></i>
                    </button>
                </div>
                <div className="column one wide">
                    <button className="ui button circular icon red">
                    <i className="white remove icon"></i>
                    </button>
                </div>
                </div>
            </div>
    );
};

export default Todo;