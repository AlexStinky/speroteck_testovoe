const { user } = require('../services/user');

class DBChecker {
    async creator(data) {
        try {
            const res = await user.create(data);

            if (res) {
                return res;
            } else {
                return false;
            }
        } catch (e) {
            console.log(`[Creator] ${e}`);

            return false;
        }
    }

    async reader(req, findAll = false) {
        try {
            let res = (findAll) ? await user.getAll(req) : await user.get(req);

            if (res) {
                return res;
            } else {
                return false;
            }
        } catch (e) {
            console.log(`[Reader] ${e}`);

            return false;
        }
    }
}

const db = new DBChecker();

module.exports = {
    db
}