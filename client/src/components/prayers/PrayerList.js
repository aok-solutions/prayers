import React from 'react'

const PrayerList = ({prayers}) => {
    return (
        <ul>
            {prayers.map(prayer =>
                <li key={prayer.id}>
                    <strong>{prayer.title}</strong>
                    <p>{prayer.request}</p>
                </li>
            )}
        </ul>
    )
}

export default PrayerList
