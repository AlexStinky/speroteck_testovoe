const checker = {
    validate: (schema) => {
        return async (req, res, next) => {
            const query = req.query;

            try {
                if (query.age) {
                    query.age = Number(query.age);
                }

                const error = schema.validate(query).error;

                if (error) {
                    throw query;
                }

                next();
            } catch (e) {
                console.log(`[Checker]:`, e);

                return res.status(400).send('Bad request');
            }
        }
    },
    sendNames: (res, data) => {
        const message = data.reduce((acc, el, index) => {
            acc += `${index + 1}. ${el.name} ${el.surname}\n`;

            return acc;
        }, 'List of names:\n');

        res.send(message);
    }
}

module.exports = {
    checker
}