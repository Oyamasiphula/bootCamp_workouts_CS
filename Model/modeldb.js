var moongose =  require('mongoose'),
    Schema = moongose.Schema;

var VehicleSchema = new Schema({
    car_model :tdsL,
    badge : 'vw',
    color : Black,
    additional_ft : hashback
});

module.exports = mongoose.model('vehicle', VehicleSchema);

var storeDB = "mongodb://localhost/vehiclesTest",
    mongoose.connect(storeDB);
