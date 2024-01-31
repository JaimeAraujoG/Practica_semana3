const Country = require("./Country");
const Degree = require("./Degree");
const Student = require("./Student");

Student.belongsTo(Degree)
Degree.hasMany(Student)

Student.belongsTo(Country)
Country.hasOne(Student)