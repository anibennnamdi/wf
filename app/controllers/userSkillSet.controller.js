var UserSkillSet = require('../models/userSkillSet');
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');

module.exports = {
    get: function (req, res, next) {

        UserSkillSet.find({}, function (err, result) {
            if (err) return next(err);
            console.log(result);
            res.status(200).json({ status: 1, message: null, data: result });
        });

    },

    

    /*getNumbers: function (req, res, next) {

        Users.find({}, 'phone', function (err, result) {
            if (err) return next(err);
            console.log(result);
            res.status(200).json({ status: 1, message: null, data: result });
        });

    },*/
    
    save: function (req, res, next) {
        
       if(req.body.phone==undefined){res.json({ message: "the phone number cannot be blank" });
        }else{var innerphone = (req.body.phone);}
        
        //var innerphone= 234 + (req.body.phone);
        var usercont = new UserSkillSet({
            phone: req.body.phone,
            userID: req.body.userID,
            skill:req.body.skill,
            status:req.body.status,
            dateAdded:Date.now()
            
        });

        UserSkillSet.findOne({ name: innername}, function (err, existingName) {
            if (existingName) {
                console.log("testing", existingName);
                console.log(innername + "  is already existing");
                res.json({ message: "the name " + innername + " is already existing" });
            }
             
            else {

                UserSkillSet.findOne({ phone: innerphone}, function (err, existingPhone) {
                    if (existingPhone) {
                        console.log("testing", existingPhone);
                        console.log(innerphone + "  is already existing");
                        res.json({ message: "the number " + innerphone + " is already existing" });
                    }

                    else{

                        Users.findOne({ email: inneremail}, function (err, existingEmail) {
                            if (existingEmail) {
                                console.log("testing", existingEmail);
                                console.log(inneremail + "  is already existing");
                                res.json({ message: inneremail + " is already existing" });
                            }
                            else{
                                usercont.save(function (err, response) {
                                    if (err) {
                                        res.status(400).json({ status: 0, message: JSON.stringify(err) });
                                    } else {
                                        res.status(201).json({
                                            status: 1,
                                            message: 'User has been created successfully',
                                            data: response
                                        });
                                    }
                                });
                            }
                        
                    });



                }

                
            });

        }


    });
},


    delete: function (req, res, next) {
        Users.find({}).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    deleteOne: function (req, res, next) {
        Users.findOne({ _id: req.params.id }).remove().exec(function (err, result) {
            res.json({ result });
        })
    },
    //, email: req.params.email 
    find: function (req, res, next) {
        Users.findOne({ name: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message: null, data: result });
        });
    },
    findOne: function (req, res, next) {
        Users.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            console.log(result);
            res.status(200).json({ status: 1, message: "ok", data: result });
        });
    },
    findOneByName: function (req, res, next) {
        Users.findOne({ name: req.params.name }, function (err, result) {
            if (err) return next(err);
            console.log(result);
            res.status(200).json({ status: 1, message: "ok", data: result });
        });
    },
    findOneByPhone: function (req, res, next) {
        Users.findOne({ phone: req.params.id }, function (err, result) {
            if (err) return next(err);
            console.log(result);
            res.status(200).json({ status: 1, message: "ok", data: result });
        });
    },
    findemail: function (req, res, next) {
        Users.findOne({ email: req.params.id }, function (err, result) {
            if (err) return next(err);
            res.status(200).json({ status: 1, message:"ok", data: result });
        });
    },
    

    update: function (req, res, next) {
        Users.findOne({ _id: req.params.id }, function (err, result) {
            if (err) return next(err);
            result.set(req.body)
            result.save(function (err, result) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'user details has been updated successfully',
                    data: result
                });
            });

        });
    },
    updater: function (req, res, next) {
        Users.findOne({ _id: req.params.id }, function (err, results) {
            if (err) {
                res.status(404).json({
                    status: 1,
                    message: 'invalid id  ' + req.params.id
                });
            }
            else{
            var compr = req.body.people;
            var dupl = false;
            results.people.forEach(element => {
                if(compr==element){dupl=true; console.log("duplicate = ",dupl)}
            });
            results.name = req.body.name || results.name;
            results.email = req.body.email || results.email;
            results.phone = req.body.phone || results.phone;
            if(!dupl){results.people.push(compr)}
            else{results.people;}
            
           //results.phone = req.body.phone || results.phone;
            //results.skills[0].push(req.body.skills) || results.skills;
            //results.customerCity = req.body.newcustomerCity || results.customerCity
            //results.edited = Date.now() + 3600000;
            //results.set(req.body);
            //results.dateModified = Date.now() + 3600000;
            //console.log("nodejs val2", results.productQty);
            results.save(function (err, results) {
                if (err) return next(err);
                res.status(201).json({
                    status: 1,
                    message: 'user details has been updated successfully',
                    data: results
                });
            });
        }

        });
    }
    

}
