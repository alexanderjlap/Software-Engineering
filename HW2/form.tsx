import './App.css';

function Form() {

    return (
        <form>
            <h3>What is your name?</h3>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/><br/><br/>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"/><br/><br/>
            <h3>Gender</h3>
            <label htmlFor="checkbox1"><input type="checkbox" id="checkbox1" name="checkbox1"/> Male</label><br/>
            <label htmlFor="checkbox2"><input type="checkbox" id="checkbox2" name="checkbox2"/> Female</label><br/><br/>
            <h3>Interests</h3>
            <input type="checkbox" id="sports" name="sports" value="Sports"/>
            <label htmlFor="sports">Do you play sports?</label><br/>
            <input type="checkbox" id="videogames" name="videogames" value="VideoGames"/>
            <label htmlFor="videogames">Do you play video games?</label><br/>
            <h3>Age</h3>
            <label><input type="radio" name="radio" value="option1"/> Age 18</label><br/>
            <label><input type="radio" name="radio" value="option2"/> Age 19</label><br/>
            <label><input type="radio" name="radio" value="option3"/> Age 20</label><br/><br/>
            <h3>Do you go to WPI?</h3>
            <input type="radio" id="student" name="status" value="Student"/>
            <label htmlFor="student">Current Student</label><br/>
            <input type="radio" id="alumni" name="status" value="Alumni"/>
            <label htmlFor="alumni">Alumni</label><br/>
            <input type="radio" id="nonstudent" name="status" value="Nonstudent"/>
            <label htmlFor="nonstudent">Not a WPI student</label><br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form;
