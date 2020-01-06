import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

const MyApp = props => {

    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;