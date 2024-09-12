import React, { useState } from 'react';
import axios from 'axios';

function Translation() {
    const initialData = {
        head: "My Website",
        text: "This is my data",
        text2: "my name is fawad",
    };

    const [text, setText] = useState(initialData);
    const [language, setLanguage] = useState('en');

    const translateText = (lang) => {
        const promises = Object.keys(text).map(key => {
            const encodedText = encodeURIComponent(text[key]);
            return axios
                .get(`https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${language}|${lang}`)
                .then(response => ({ [key]: response.data.responseData.translatedText }))
                .catch(error => {
                    console.error("Error fetching translation", error);
                    return { [key]: text[key] };
                });
        });

        Promise.all(promises).then(results => {
            const translatedText = results.reduce((acc, result) => ({ ...acc, ...result }), {});
            setText(translatedText);
            setLanguage(lang);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">{text.head}</h1>
            <h1 className="text-4xl font-bold mb-6">{text.text}</h1>
            <h1 className="text-4xl font-bold mb-6">{text.text2}</h1>
            <div className="space-x-4">
                <button
                    onClick={() => translateText('en')}
                    className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition duration-300"
                >
                    English
                </button>
                <button
                    onClick={() => translateText('ur')}
                    className="px-6 py-2 text-white bg-green-500 hover:bg-green-700 rounded-lg transition duration-300"
                >
                    Urdu
                </button>
            </div>
        </div>
    );
}

export default Translation;
