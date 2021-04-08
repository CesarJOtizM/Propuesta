module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'cart',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    { freezeTableName: true }
  );
  // Cart.associate = (models) => {
  //   Cart.belongsTo(models.products);
  // };
  return Cart;
};
