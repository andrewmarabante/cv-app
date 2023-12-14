function Experience()
{
    
    return (
    <div>
        <h2>Experience:</h2>
        <form action="">
            <label htmlFor="">Company Name: </label>
            <input type="text" required/>
            <label htmlFor="">Position: </label>
            <input type="text" required/>
            <label htmlFor="">Responsibilities: </label>
            <textarea required></textarea>
            <label htmlFor="">From:</label>
            <input type="date" />
            <label htmlFor="">To:</label>
            <input type="date" />
            <input type="submit" />
        </form>
    </div>
    )
}

export default Experience;