// const Address = require("../models/Address")

// module.exports = {
//     update: function(req, res) {
//         Address.findOneAndUpdate(
//             {_id: req.params.id},
//             req.body
//         ).then(address => res.json(address));
//     },
//     destroy: function(req, res) {
//         Address.findByIdAndRemove(req.params.id).then(address => {
//             res.send(address)
//         });
//     }  
// };
