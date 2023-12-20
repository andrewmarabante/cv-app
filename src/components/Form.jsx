import React, {useState} from "react";
import '../styles/form.css'

function Form()
{
    const [name, setName] = useState('name');
    const [email, setEmail] = useState('email');
    const [phone, setPhone] = useState('phone');

    const onButtonClick = () =>
    {
        setName(document.getElementById('newName').value)
        console.log(name)
    }

    return (
        <div className="form">
            <div>
                <h2>General Information:</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <input id="newName" type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <h2>Education: </h2>
                <div>
                    <label htmlFor="">School Name: </label>
                    <input type="text" />
                </div>
                <div>Field Of Study</div>
                <div>Date of Study</div>
            </div>
            <div>
                <h2>Experience: </h2>
                <div>Company</div>
                <div>Position Title</div>
                <div>Responsibilities</div>
                <div>Date Worked</div>
            </div>
            <button onClick={onButtonClick}>Submit</button>
        </div>
    )
}

export default Form;