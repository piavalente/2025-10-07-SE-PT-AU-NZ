function SampleUncontrolledForm() {

    function handleFormatData(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        alert(data.get("name"));
        alert(data.get("password"));
    }

    return (
        <>
            <h1>Sample Uncontrolled Form</h1>

            <form onSubmit={handleFormatData}>
                <div>
                    Name:
                    <input type="text" name="name" />
                </div>

                <div>
                    Password:
                    <input type="password" name="password" />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default SampleUncontrolledForm;
