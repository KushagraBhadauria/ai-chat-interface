import React from 'react';

const DefineCard = ({ data }) => {
    if (data.error) {
        return <div className="text-red-500">{data.error}</div>;
    }

    if (!data || !data.meanings || data.meanings.length === 0) {
        return <div className="text-orange-500">Could not parse definition data.</div>;
    }

    const { word, meanings, phonetics } = data;
    const phonetic = phonetics?.find(p => p.text)?.text || 'N/A';

    return (
        <div className="bg-green-100 p-4 rounded-lg border border-green-300">
            <h3 className="font-bold text-lg text-green-800">
                {word} <span className="text-sm font-normal text-gray-600">({phonetic})</span>
            </h3>
            {meanings.map((meaning, index) => (
                <div key={index} className="mt-2">
                    <h4 className="font-semibold italic text-green-700">{meaning.partOfSpeech}</h4>
                    <ul className="list-disc list-inside ml-4">
                        {meaning.definitions.slice(0, 3).map((def, i) => ( 
                            <li key={i}>{def.definition}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default DefineCard;