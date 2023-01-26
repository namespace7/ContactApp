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


    async find(req, res) {
        try {
            const contactlist = await Contactlist.find();
            return res.ok(contactlist);

        }
        catch (err) {
            return res.serverError(err);
        }
    },


    async delete(req, res) {
        try {
            const contact = await Contactlist.destroy({
                id: req.params.id
            });
            return res.ok(contact);

        }
        catch (err){
            return res.serverError(err);
        }

    },
    



};

