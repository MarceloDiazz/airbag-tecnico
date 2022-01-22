const mongoose =require('mongoose');
//SCHEMA: CAMPOS DEL MODELO
//MODEL: EL NOMBRE DEL MODELO

const carsSchema = new  mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    make: {
      type: String,
      required: true,
      
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img_url:{
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports =
  mongoose.models.Cars || mongoose.model("cars", carsSchema);
