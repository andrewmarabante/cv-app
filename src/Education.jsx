function Education()
{
    return (
        <div>
            <h2>Education:</h2>
              <form>
                <label>School Name: </label>
                <input type="text" required/>
                <label>Area of Study:</label>
                <input type="text" required/>
                <label>Date Graduated:</label>
                <input type="date" required/>
                <input type="submit" />
                </form>

        </div>
        )
    
}

export default Education;