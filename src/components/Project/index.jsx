import { Container } from "./styles";

export function Project({title, skill}) {
    return(
        <Container>
            <h4>{title}</h4>
            <span>{skill}</span>
        </Container>
    )
}