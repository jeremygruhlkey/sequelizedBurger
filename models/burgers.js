//burger model

module.exports =function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eaten: {
        type: DataTypes.BOOLEAN
    }
});
    return Burger;
};