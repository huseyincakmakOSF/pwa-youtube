import React from 'react'
// Components
import {AspectRatio, Container} from '@chakra-ui/react'

function Youtube() {
    return (
        <Container>
            <AspectRatio mt="10" maxW="980px" ratio={4 / 3}>
                <iframe
                    title="OSF"
                    src="https://www.youtube.com/embed/nh_NaMZKM0c"
                    allowFullScreen
                />
            </AspectRatio>
        </Container>
    )
}

export default Youtube
