import React, { PropTypes } from 'react'

const PrayerList = ({prayers}) => {
    return (
        <ul>
            {prayers.map(prayer =>
                <li key={prayer.id}>
                    {prayer.name}
                </li>
            )}
        </ul>
    )
}

PrayerList.propTypes = {
    prayers: PropTypes.array.isRequired
}

export default PrayerList
