
function hashpassword() {
    var val = $('[id$="txtPassword"]').val();
    var salt = $('[id$="hdnfld"]').val();
    var res = base64_encode(val) + "|" + salt;
    $('[id$="txtPassword"]').val(res);
     return true;
}
function hashCpassword() {
    alert("test");
    var valO = $('[id$="txtoldPassword"]').val();
    var saltO = $('[id$="hdnfldO"]').val();
    var resO = base64_encode(valO) + "|" + saltO;
    $('[id$="txtoldPassword"]').val(resO);


    var valN = $('[id$="txtNewPassword"]').val();
    var saltN = $('[id$="hdnfldN"]').val();
    var resN = base64_encode(valN) + "|" + saltN;
    $('[id$="txtNewPassword"]').val(resN);


    var valC = $('[id$="txtConfirmPassword"]').val();
    var saltC = $('[id$="hdnfldC"]').val();
    var resC = base64_encode(valC) + "|" + saltC;
    $('[id$="txtConfirmPassword"]').val(resC);
    return true;
}
function hashRpassword() {
    var valc = $('[id$="txtConfirmPassword"]').val();
    var saltc = $('[id$="hdnfldc"]').val();
    var resc = base64_encode(valc) + "|" + saltc;
    $('[id$="txtConfirmPassword"]').val(resc);


    var valN = $('[id$="txtPassword"]').val();
    var saltN = $('[id$="hdnfldn"]').val();
    var resN = base64_encode(valN) + "|" + saltN;
    $('[id$="txtPassword"]').val(resN);

    return true;
}
function base64_encode(data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = "",
    tmp_arr = [];

    if (!data) {
        return data;
    }

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}