import React from 'react';
import {
Card,
CardFooter
} from 'reactstrap';

const Footer = () => {
    return(
        <div className='footer'>
        <Card>
            <CardFooter style={{textAlign: 'center'}}>
            © 2023 | Lea Hazel
            </CardFooter>
        </Card>
        </div>
    )
}

export default Footer;