const
 express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
 const url = "mongodb://localhost:27017/PaginaT"
 const Schema = mongoose.Schema;

 const Horasextra = new Schema ({
  Documento: {type: String},
  Nombres:{type: String},
  FechaI:{type: String},
  FechaF:{type: String},
  HorarioI:{type: String},
  HorarioF:{type: String},
  InicioExtra:{type: String},
  FinExtra:{type: String},
  MotivoExtra:{type: String},
 },{collection : 'HORASE'})

 const Hora = mongoose.model('HORASEX', Horasextra);

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}))



app.post('/api/registrar', (req,res)=> {
  mongoose.connect(url, {useMongoClient: true}, (err) => {
    if(err) throw err;
    Hora.insertMany({
      Documento: req.body.Documento,
      Nombres:req.body.Nombres,
      FechaI:req.body.FechaI,
      FechaF:req.body.FechaF,
      HorarioI:req.body.HorarioI,
      HorarioF:req.body.HorarioF,
      InicioExtra:req.body.InicioExtra,
      FinExtra:req.body.FinExtra,
      MotivoExtra:req.body.MotivoExtra
    }, (err, data) => {
      if(err) throw err
      return res.status(200).json({
        status: 'success'
      })
    })
  })
})


app.post('/api/consultar', (req,res)=> {
  mongoose.connect(url, {useMongoClient: true}, (err) => {
    if(err) throw err;
    Hora.find({}, (err, data) => {
      if(err) throw err
      return res.status(200).json({
        data: data
      })
    })
  })
})

 app.listen(3000, () => {console.log('Conexion al API en el puerto 3000... escuchando')})
