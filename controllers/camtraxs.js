const Ekskul = require('../models/Camtrax')

module.exports = {
    //get all ekskul
    index: async (req, res) => {
        try {
          const ekskuls = await Ekskul.find()
          if(ekskuls.length > 0){
            res.status(200).json({
              status: true,
              data: ekskuls,
              method: req.method,
              url: req.url
            })
            
          }else{
            res.json({
              status: false,
              message: "Tidak ada daftar Ekstrakulikuler"
            })
          }
        } catch (error) {
            res.status(400).json({success: false})
        }
        },
        
        //get a ekskul
      show: async (req, res) => {
        try {
           const ekskuls = await Ekskul.findById(req.params.id)
            res.json({
              status: true,
              data: ekskuls,
              method: req.method,
              url: req.url,
              message: "Data Ekstrakulikuler berhasil didapat"
            })

        } catch (error) {
          res.status(400).json({sucess: false})
        }
      },
        store: async (req, res) => {
            try {
              const ekskul = await Ekskul.create(req.body)
              // res.json(ekskuls)
              res.status(200).json({
                status: true,
                data: ekskul,
                method: req.method,
                url: req.url,
                message: "Berhasil menambahkan data Ekstrakulikuler"
              })
            } catch (error) {
                res.status(400).json({success: false})
            }
        },
        update: async (req, res) => {
            try {
               const ekskul = await Ekskul.findByIdAndUpdate(req.params.id, req.body, {
                  new: true,
                  runValidators: true
               })
                res.json({
                  status: true,
                  data: ekskul,
                  method: req.method,
                  url: req.url,
                  message: "Berhasil mengubah data Ekstrakulikuler"
                })
    
            } catch (error) {
              res.status(400).json({sucess: false})
            }
            
            },
            delete: async (req, res) => {
                try {
                    await Ekskul.findByIdAndDelete(req.params.id)
                    res.json({
                      status: true,
                      method: req.method,
                      url: req.url,
                      message: "Berhasil menghapus data Ekstrakulikuler"
                    })
                } catch (error) {
                  res.status(400).json({sucess: false})
                }
        
              },
}