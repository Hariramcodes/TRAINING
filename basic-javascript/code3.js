function anagramcheck(){
    var st1 = document.getElementById('str1').value;
    var st2 = document.getElementById('str2').value;
    var flag  = 1;
    for(var i=0;i<st1.length;i++)
    {
        if(!st1.includes(st2[i])){
            document.write("<h2>false</h2>");
            return false;
        }
    }
    document.write("<h2>true</h2>");
    return true;
}