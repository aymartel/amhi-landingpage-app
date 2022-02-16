import React from 'react'
import { useTranslation } from 'react-i18next';


export const Welcome = () => {

    const [t, i18n] = useTranslation(["welcome"]);

    function changeToEnglish() {
        i18n.changeLanguage('en');
    }

    function changeToSpanish() {
        i18n.changeLanguage('es');
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>Idioma Actual : {i18n.language}</p>
                <p>
                    {t('title')}
                </p>
                <button onClick={changeToEnglish}>Change To English</button>
                <button onClick={changeToSpanish}>Change To Spanish</button>
            </header>
        </div>
    )
}
