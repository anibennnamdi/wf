var SkillSetup = require('../models/skillSetup');

module.exports = {
    get: function (req, res, next) {

        SkillSetup.find({})
            .populate('productcat_id', '-_id')
            .exec(function (err, result) {
                if (err) return next(err);
                res.status(200).json({ status: 1, message: null, data: result });
            });

    },
   save: function (req, res, next) {
        var productcont = new SkillSetup({
            skillcat_id: req.body.skillcat_id,
            skillName: req.body.skillName,
            skillDesc: req.body.skillDesc,
            skillDateCreated: Date.now() + 3600000,
            //edited : Date.now() + 3600000
            
        });
        
        SkillSetup.findOne({ productName: req.body.productName }, function (err, existingCat) {
            if (existingCat) {
                console.log(req.body.productName + "  is already existing");
                //res.json("categiry is already existing");
                res.json({ message:'skill is already existing' });
            }
            else {
                productcont.save(function (err, response) {
                    if (err) {
                        res.status(400).json({ status: 0, message: JSON.stringify(err) });
                    } else {
                        res.status(201).json({
                            status: 1,
                            message: 'Product has been created successfully',
                            data: response
                        });
                    }
                });
            }

        });

    },
   /*save: function (req, res, next) {
        //var innerCat = (req.body.productCat).toUpperCase();
        var innerCat = req.body.productCat;

        var productcont = new SkillCategory({
            productCat: innerCat,
            dateCreated: Date.now() + 3600000
        });
        SkillCategory.findOne({ productCat: innerCat }, function (err, existingCat) {
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

    },*/

    delete: function (req, res, next) {
        SkillSetup.find({}).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    deleteOne: function (req, res, next) {
        SkillSetup.findOne({ _id: req.params.id }).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    find: function (req, res, next) {
        SkillSetup.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },
    findcat: function (req, res, next) {

        SkillSetup.find({ productcat_id: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },

    /*update: function (req, res, next) {
        SkillSetup.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            result.set(req.body)
            result.save(function (err, result) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'Stock quantity has been updated successfully',
                    data: result
                });
            });

        });
    }*/

    update: function (req, res, next) {
        SkillSetup.findOne({ _id: req.params.id }, function (err, results) {
            if (err) return next(err);
            //console.log("nodejs val1", results.productQty);
            //results.productQty=mainVal-req.body;
            results.productName = req.body.newproductName || results.productName;
            results.productDesc = req.body.newproductDesc || results.productDesc;
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
                    message: 'Product details has been updated successfully',
                    data: results
                });
            });

        });
    }

}
