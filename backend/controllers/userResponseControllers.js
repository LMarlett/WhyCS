const models = require('../models'); 

const { UserResponse } = models;

module.exports.addResponse = function addResponseExport(req, res) {
  // const userResponse = req.body.userResponses;
  // userResponse.map((currentUserResponse) => {
    //console.log(currentUserResponse.id);
    UserResponse.create({
     zip: req.body.zip,
    ageRange: req.body.ageRange,
    gender: req.body.gender,
    careerField: req.body.careerField,
    EWD: req.body.EWD,
    CC: req.body.CC,
    CL: req.body.CL,
    TSS: req.body.TSS,
    ESJ: req.body.ESJ,
    SRI: req.body.SRI,
    PAJ: req.body.PAJ,
     misc: req.body.misc,

    }).then((userResponse) => {
       console.log(`${userResponse} added!`);
     }).catch((reason) => {
      res.json({
        where: 'error adding user info',
        err: reason,
      });
    });
  //});
  res.json({
    msg: 'successfully added the user info!',
  });
};
 

module.exports.getResponse = function getResponseExport(req, res) {
  UserResponse.findAll({ where: { zip: req.zip } }).then((userResponses) => {
     res.json({
      userResponses,
      msg: 'successfully got the user info!'
    });
  }).catch((error) => {
     res.json({
      msg: 'Error!',
      err: error,
    });
  
});

};


module.exports.deleteResponse = function deleteIngredientsExport(req, res) {
  const userResponses = req.body;
  const userResponsesUid = userResponses.map(currentUserResponses => currentUserResponses.id);
  UserResponse.destroy({
    where: {
      id: req.id,
     },
  }).then(() => {
    res.json({
      msg: 'successfully deleted items',
    });
  }).catch((error) => {
    res.json({
      msg: 'Error deleting items',
      err: error,
    });
  });
};
