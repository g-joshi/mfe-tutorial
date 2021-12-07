import React from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
// console.log(mount);

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});


export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};