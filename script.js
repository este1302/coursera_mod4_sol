var names = ["Steve","John","justin","alan","ester","some"];


for(var prop in names){
    var s = names[prop];
    if(s[0]=='j'||s[0]=="J")
        console.log(names[prop]+" Goodbye JSomeName");
    else
       console.log(names[prop]+" Hello SomeName")
    
}