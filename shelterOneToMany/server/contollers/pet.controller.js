const Pet = require('mongoose').model('Pet');
const { Http } = require('@status/codes');

module.exports = {
    index(req, res ){
        Pet.find({})
            .then(pets => {
                console.log('new pets');
                res.json(pets);
            })
            .catch(error => {
                console.log('new pet error', error)
                res.status(Http.InternalServerError).json(error)
            }
            );
    },
    create(req, res) {
        Pet.create(req.body)
        .then(pet =>{
            console.log('success')
            res.json(pet);
        })
        .catch(eror =>{
            res.status(500).json(error)
        });
      }, 
    show(req, res ){
        const petId = req.params.petId
        Pet.findById(petId)
        .populate("toys")
        .then(pet => {
            console.log('viewing pet', pet)
            res.json(pet);
        })
        .catch(error => {
            console.log('error showing pet', error)
            res.status(500).json(error)
        });
    },
    update(req, res ){
        console.log('updating pet', req.body);
        const petId = req.params.petId
        Pet.findByIdAndUpdate(petId,req.body,{ new: true, runValidators: true})
        .then(pet =>{
            console.log('pet updated', pet)
            res.json(pet);
        })
        .catch(error => {
            console.log('update of pet error', error)
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
            res.status(422).json(errors)
            // 422 is error 
        });
    },

    destroy(req, res ){
        const petId = req.params.petId
        Pet.findByIdAndRemove(petId)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            console.log('error showing pet', error)
            res.status(500).json(error)
        });
    },
}

