module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );
  Products.associate = (models) => {
    Products.hasMany(models.cart, {
      onUpdate: 'cascade',
      onDelete: 'cascade',
      hooks: true,
    });
  };
  return Products;
};
