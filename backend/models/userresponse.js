'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserResponse = sequelize.define('userResponse', {
   
    zip: DataTypes.INTEGER,
    ageRange: DataTypes.STRING,
    gender: DataTypes.STRING,
    careerField: DataTypes.STRING,
    EWD: DataTypes.INTEGER,
    CC: DataTypes.INTEGER,
    CL: DataTypes.INTEGER,
    TSS: DataTypes.INTEGER,
    ESJ: DataTypes.INTEGER,
    SRI: DataTypes.INTEGER,
    PJA: DataTypes.INTEGER,
    beliefString: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    misc: DataTypes.STRING
  }, 
  {

  }); 
  UserResponse.associate = function(models) {
    // associations can be defined here
  };
  return UserResponse;
};