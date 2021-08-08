  
module.exports = (sequelize, Sequelize, DataTypes) => {
    const Bank = sequelize.define(
      "bank", // Model name
      {
        // Attributes
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: DataTypes.STRING,
          
        },
        Branche: {
          type: DataTypes.STRING,
          
        },

       Bank_Name: {
          type: DataTypes.STRING,
          
        },
        URL: {
          type: DataTypes.STRING
        },
        Address: {
          type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
          },
           country: {
            type: DataTypes.STRING
          },
          imageUpload: {
            type: DataTypes.BLOB
          }
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      },
      { associate: function(models) {
      Bank.belongsTo(models.user, {
        foreignKey: 'email',
        onDelete: 'CASCADE'
   });
  }}
    );
  
    return Bank;
  };