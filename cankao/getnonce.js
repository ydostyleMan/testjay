var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function getnonce() {
var n=8;
var res = "";
for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 35);
    res += chars.substr(id, 1);
}
res= new Date().getTime() +":"+ res;
return res;
}