function reverse()
{
    var str1 = document.getElementById('str').value;
    var n = str1.length;
    var first = 0;
    var last = 0;
    var nstr1 = "";
    for(var i=0;i<n;i++)
    {
        if(str1[i]==" ")
        {
            last = i-1;
            while(last>=first)
            {
                nstr1 += str1[last];
                last--;
            }
            nstr1 += " ";
            first = i + 1;
        }
        if(i == n-1)
        {
            last = i;
            while(last>=first)
            {
                nstr1 += str1[last];
                last--;
            }
        }
    }
    document.write(`<h2>${nstr1}</h2>`);
}