import './App.css'

function form() {
    return (
    <form class = "form-inline" role = "form">
        
        <div class = "form-group">
            <label class = "sr-only" for = "name">Name</label>
            <input type = "text" class = "form-control" id = "name" placeholder = "Enter Name"/>
        </div>

        <div class = "form-group">
            <label class = "sr-only" for = "inputfile">File input</label>
            <input type = "file" id = "inputfile"/>
        </div>

        <div class = "checkbox">
            <label><input type = "checkbox"/> Check me out</label>
        </div>

        <button type = "submit" class = "btn btn-default">Submit</button>
    </form>);
}

export default './form'