var SkillCategory = require('../models/skillcategory');

module.exports = {
    get: function (req, res, next) {

        SkillCategory.find({}, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });

    },
    save: function (req, res, next) {
        var innerCat = (req.body.skillCat).toUpperCase();
        //var innerCat = req.body.skillCat;

        var productcont = new SkillCategory({
            skillCat: innerCat,
            dateCreated: Date.now() + 3600000
        });
        SkillCategory.findOne({ skillCat: innerCat }, function (err, existingCat) {
            if (existingCat) {
                console.log(innerCat + "  is already existing");
                //res.json("categiry is already existing");
                res.json({ message:'category is already existing' });
            }
            else {
                productcont.save(function (err, response) {
                    if (err) {
                        res.status(400).json({ status: 0, message: JSON.stringify(err) });
                    } else {
                        res.status(201).json({
                            status: 1,
                            message: 'Category has been created successfully',
                            data: response
                        });
                    }
                });
            }

        });

    },




    delete: function (req, res, next) {
        SkillCategory.find({}).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    deleteOne: function (req, res, next) {
        SkillCategory.findOne({ _id: req.params.id }).remove().exec(function (err, result) {
            res.json({ status: 1, message: "Deleted!", data: result });
        })
    },
    find: function (req, res, next) {
        SkillCategory.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },

   /* update: function (req, res, next) {
        SkillCategory.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            result.set(req.body)
            result.save(function (err, result) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'This Category has been updated successfully',
                    data: result
                });
            });

        });
    }*/
    update: function (req, res, next) {
        SkillCategory.findOne({ _id: req.params.id }, function (err, results) {
            if (err) return next(err);
            //console.log("nodejs val1", results.productQty);
            //results.productQty=mainVal-req.body;
            results.productCat = req.body.newcategoryName || results.productCat;
            //results.customerContact = req.body.newcustomerContact || results.customerContact;
            //results.customerAddress = req.body.newcustomerAddress || results.customerAddress;
            //results.customerCity = req.body.newcustomerCity || results.customerCity
            results.edited = Date.now() + 3600000;
            //results.set(req.body);
            //results.dateModified = Date.now() + 3600000;
            //console.log("nodejs val2", results.productQty);
            results.save(function (err, results) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'This Category has been updated successfully',
                    data: results
                });
            });

        });
    }

}
