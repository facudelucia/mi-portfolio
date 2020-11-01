import React,{Fragment } from 'react';
import Typical from 'react-typical'
import { useStateValue } from '../StateProvider';

const Home = () => {
    const [{english}] = useStateValue()
    return (
        <Fragment>
            <div className="containerApp">
                <div className="home">
                <Typical 
                loop={Infinity}
                className="typical"
                wrapper="h1"
                steps={[
                  "facudelucia()",
                  1000,
                  "Welcome to my portfolio",
                  1000,
                  "Bienvenido a mi portfolio",
                  1000
                ]}
              />
                    <p>{english ? "Web developer":"Desarrollador web"}</p>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Home;