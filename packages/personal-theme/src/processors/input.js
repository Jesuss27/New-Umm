import {styled} from "frontity"


const Input = styled.input`
    border-radius: 50%;
    background-color: red;

`

const input = {
    name:"input",
    priority:30,
    test: node => node.props.className.contains("wpcf7-form-control"),
    processor: ({node}) => {
        console.log("input")
        node.component = Input;
        return node;
    }
}

export default input