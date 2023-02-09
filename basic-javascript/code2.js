for(var i=1;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
        {
            console.log(i+" hari");
        }
        else if(i%3==0)
        {
            console.log(i+" ram");
        }
        else if(i%5==0)
        {
            console.log(i+" hariram");
        }
        else{
            console.log(i+" ");
        }
    }