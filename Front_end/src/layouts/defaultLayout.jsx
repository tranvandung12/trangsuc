/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Benner from './components/benner/benner';
import  Chatbox  from './components/chat/chatbox';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Benner/>
            <main>{children}</main>
            <Chatbox/>
            <Footer />
            
        </div>
    );
}

export default DefaultLayout;
