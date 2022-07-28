const axios = require('axios');
const { writeToPath } = require('@fast-csv/format');

async function getData (url) {
    const { data } = await axios.get(url);
    const rows = [
        ['ID', 'Email', 'First Name', 'Last Name']
    ];

    for (let i = 0; i < data.data.length; i++) {
        rows[i + 1] = [
            data.data[i].id,
            data.data[i].email,
            data.data[i].first_name,
            data.data[i].last_name,
        ];
    }

    writeToPath(`./${Date.parse(new Date())}.csv`, rows)
        .on('error', err => console.error(err))
        .on('finish', () => console.log('Done writing.'));
}

module.exports = {
    getData
}