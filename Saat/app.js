var saat;
var zamanDilimi;

    function digitalClock(){
        var suan = new Date(); 
        var dsaat= suan.getHours();
        var ddak = suan.getMinutes();
        var dsan = suan.getSeconds();
        var timePeriod = suan.getHours();
  
        if(timePeriod<12){
            zamanDilimi = "A.M";  }
        else{
            zamanDilimi= "P.M";}
        
        saat = dsaat + ':' + ((ddak<10) ? '0' : '') + ddak + ':' + ((dsan<10) ? '0' : '') + dsan+" "+zamanDilimi;

        div.innerHTML = saat;
        setTimeout("digitalClock()",1000);
    }