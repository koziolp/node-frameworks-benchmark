
const {createRandomData} = require('../../../data/data');

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json(createRandomData('next'));
}

export const runtime = 'nodejs'