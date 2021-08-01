import {styled} from "frontity"


const P = styled.p`
    color:white;

`

const p = {
    name:"p",
    priority:40,
    test: node => node.component === "p",
    processor: ({node}) => {
        console.log("p")
        node.component = P;
        return node;
    }
}

export default p