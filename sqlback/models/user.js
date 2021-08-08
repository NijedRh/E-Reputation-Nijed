  
module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", // Model name
    {
      // Attributes
   


      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      role:{
        type:DataTypes.ENUM('user')
      },
      Bank_Name: {
        type: DataTypes.STRING,
       
      },
      
     
    },
   
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    {
      associate: function(models) {
        User.belongsTo(models.bank,{ onDelete: 'cascade' });
      }}
  );
  

  return User;
};