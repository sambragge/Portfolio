import * as React from 'react';


import Header from './header';
import Body from './body';
import Footer from './footer';

class App extends React.Component<{}, {}>{

    public render():JSX.Element{
        return(
            <div className="app container">
                <Header  />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;