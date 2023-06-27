import { Container } from "@mui/material";
import { useParams } from 'react-router-dom';

export const Overview: React.FC<{}> = () => {

    const { id } = useParams();

    return (
        <Container>
            This is the project - {id} page
        </Container>
    )
}