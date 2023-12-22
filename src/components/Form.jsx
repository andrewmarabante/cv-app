import React, { useState } from "react";
import '../styles/form.css'
import PageRender from "./PageRender";

export default function Form(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [school, setSchool] = useState();
    const [study, setStudy] = useState();
    const [dateGrad, setDateGrad] = useState();
    const [company, setCompany] = useState();
    const [position, setPosition] = useState();
    const [responsibilities, setResponsibilites] = useState();
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();

    const onButtonClick = () => {
        setName(document.getElementById('newName').value)
        setEmail(document.getElementById('newEmail').value)
        setPhone(document.getElementById('newPhone').value)
        setSchool(document.getElementById('newSchool').value)
        setStudy(document.getElementById('newStudy').value)
        setDateGrad(document.getElementById('newDateGrad').value)
        setCompany(document.getElementById('newCompany').value)
        setPosition(document.getElementById('newPosition').value)
        setResponsibilites(document.getElementById('newResponsibilities').value)
        setDateStart(document.getElementById('newDateStart').value)
        setDateEnd(document.getElementById('newDateEnd').value)
        document.getElementById('form').style.display = 'none'
        document.getElementById('edit').style.display = 'block'
        document.getElementById('pageRender').style.display = 'block'
    }

    const editForm = () =>
    {
        document.getElementById('form').style.display = 'block';
        document.getElementById('pageRender').style.display = 'none';
        document.getElementById('edit').style.display = 'none';
    }

    return (
        <div>
            <div className="form" id="form">
                <div>
                    <h2>General Information:</h2>
                    <div>
                        <label htmlFor="">Name</label>
                        <input id="newName" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input id="newEmail" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Phone</label>
                        <input id="newPhone" type="text" />
                    </div>
                </div>
                <div>
                    <h2>Education: </h2>
                    <div>
                        <label htmlFor="">School Name: </label>
                        <input id="newSchool" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Field of Study: </label>
                        <input type="text" id="newStudy" />
                    </div>
                    <div>
                        <label htmlFor="">Date Graduated</label>
                        <input type="date" id="newDateGrad" />
                    </div>
                </div>
                <div>
                    <h2>Experience: </h2>
                    <div>
                        <label htmlFor="">Company Name: </label>
                        <input type="text" id="newCompany" />
                    </div>
                    <div>
                        <label htmlFor="">Position Title</label>
                        <input type="text" id="newPosition" />
                    </div>
                    <div>
                        <label htmlFor="">Responsibilities: </label>
                        <textarea id="newResponsibilities" />
                    </div>
                    <div>
                        <label htmlFor="">Date Start:</label>
                        <input type="date" id="newDateStart" />
                    </div>
                    <div>
                        <label htmlFor="">Date End:</label>
                        <input type="date" id="newDateEnd" />
                    </div>
                </div>
                <button id="Sub" onClick={onButtonClick}>Submit</button>
            </div>
            <div id="pageRender">
                <PageRender name={name} email={email} phone={phone} school={school}
                    study={study} dateGrad={dateGrad} company={company} position={position}
                    responsibilities={responsibilities} dateStart={dateStart} dateEnd={dateEnd}>
                </PageRender>
            </div>
            <button id="edit" style={{display:'none'}} onClick={editForm}>Edit</button>
        </div>
    )
}

