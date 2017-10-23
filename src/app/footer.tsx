import * as React from 'react';



const Footer:React.SFC<{}> = () => {
    return(
        <div className="footer">
            <a href="https://www.linkedin.com/in/samuel-bragge/">
                <h1  className="contact six columns u-pull-left" >Linkedin</h1>
            </a>
            <a href="https://github.com/sambragge">
                <h1 className="contact six columns u-pull-right">Github</h1>
            </a>
        </div>
    );
}

export default Footer;