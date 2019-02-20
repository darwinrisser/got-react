const Character = require("../models/CharacterModel");

exports.list = function list(request, response) {
    Character.find().exec().then((characters)=>{
        return response.json(characters);
    })
}

exports.show = function show(request, response) {
    Character.findById(request.params.id).exec().then((character)=> {
        return response.json(character);
    })
}