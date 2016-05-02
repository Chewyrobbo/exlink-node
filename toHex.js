/**
 * Created by Robby on 5/2/16.
 */
module.exports = {};

exports.toHex = function (d) {

        return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
    };



