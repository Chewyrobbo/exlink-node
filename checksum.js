/**
 * Created by Robby on 5/2/16.
 */
module.exports = {};


exports.hexCheck = function (N) {

    // convert input value to upper case
    strN = String(N);
    strN = strN.toUpperCase();

    strHex = String("0123456789ABCDEF");
    result = 0;
    fctr = 16;

    for (i=0; i<strN.length; i++) {
        if (strN.charAt(i) == " ") continue;

        v = strHex.indexOf(strN.charAt(i));
        if (v < 0) {
            result = -1;
            break;
        }
        result += v * fctr;

        if (fctr == 16) fctr = 1;
        else            fctr = 16;
    }

    if (result < 0) {
        strResult = String("Non-hex character");
    }
    else if (fctr == 1) {
        strResult = String("Odd number of characters");
    }
    else {
        // Calculate 2's complement
        result = (~(result & 0xff) + 1) & 0xFF;
        // Convert result to string
        //strResult = new String(result.toString());
        strResult = strHex.charAt(Math.floor(result/16)) + strHex.charAt(result%16);
    }
    N = N.replace(/\s+/g, '');

    return N + strResult
};