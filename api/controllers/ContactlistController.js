/**
 * ContactlistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    async create(req, res) {
        try {
            let params = req.allParams();
            if (!params.name) {
                return res.badRequest({ err: 'Name is required' })
            }
            //create a new record in contactlist
            const results = await Contactlist.create({
                name: params.name,
                phone: params.phone,
                address: params.address
            });
            return res.ok(results);
        }
        catch (err) {
            return res.serverError(err);
        }

    },
    find(req, res) {

    },
    findName(req, res) {

    },
    findPhone(req, res) {

    },
    delete(req, res) {

    },



};

