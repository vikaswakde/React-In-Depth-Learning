function Form() {

    return(
        <div>
            <h3>Fill the form!</h3>
            <form action="">
                <label htmlFor="name">Enter you name: </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="age">Enter you age: </label>
                <input type="text" id="age" name="age"/>
            </form>
        </div>
    )
}

export default Form;