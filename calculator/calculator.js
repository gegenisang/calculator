$(function() {
    var curNum = "0";
    var prevNum = "";
    var isOpButton = false;
    var isEqButton = false;
    
    var val;
    var result = 0;
    var count = 0;
    var arr = [];
   
    $(".text").text(curNum);

    $(".resetAll").click(function() {
        $(".text").removeClass("red");
        curNum = "0";
        prevNum = "";
        isOpButton = false;
        isEqButton = false;
        arr = [];
        val = "";
        result = 0;
        count = 0;
        $(".text").text(curNum);
    });

    $(".reset").click(function() {
        curNum = "0";
        result = prevNum;
        $(".text").text(prevNum);
        if (prevNum === "") {
            prevNum = 0;
        }
        curNum = prevNum;
    });


    function getOpStatus(op) {
        if(isOpButton){
            if (result === 0) {
                prevNum = curNum;
                
            } else {
                getRet(result);
                prevNum = result;
               
            }
        }
        
        $(".text").text(prevNum);

    }

   
    function getNum(nowText, val) {

      
        // var newText = nowText;
        var hasDot = false;
        var newText = nowText;

        if (val === "." && nowText.indexOf(".") !== -1) {
            console.log(nowText.indexOf("."),"hasDot");
            hasDot = true;
            console.log("aaaa");
        }

        if (nowText === "0" && val !== ".") {
            newText = val;
        } else {
            newText = nowText + val;
            
        }

        if (hasDot) {
            if(parseFloat(nowText)===parseInt(nowText)){
                newText = "0" + nowText;
            }else{
                newText = nowText;
            }
            // newText = "0" + nowText;
            // hasDot = false;
        }

        if (newText.length > 12) {

            return;
        }

        return newText;


    }

    function getTextIsNaN(now) {

        if (isNaN(now)) {
            $(".text").removeClass("red");
            now = "0";
            result = 0;
            prevNum = result;
            isOpButton = false;
            count = 0;
            console.log("777777777777",curNum);
            isEqButton = false;
            return now;
        } else {
            console.log("now",now);
            if(isOpButton){
                now = "0";
                console.log("hahahhhaah");
                isOpButton = false;
                count++;
                console.log("count",count);
            }

            if(isEqButton){
                result = 0;
                now = "0";
                console.log("isEqButtonia");
                isEqButton = false;
                if(count>1){
                   prevNum = 0; 
                   count = 0;
                }
                 console.log("count111",count);
            }
            console.log("end");
            return now;
            

        }
    }



   
    $(".num").click(function() {
        var curDown = $(this).val();
        var curText = $(".text").text();
        var c = getTextIsNaN(curText);
        curNum = getNum(c, curDown);

        $(".text").text(curNum);
        if(!isEqButton&&prevNum>0){
            result = eval(prevNum+val+curNum);
        }
        console.log("start",isEqButton,isOpButton);


    });


  

    $(".operation").click(function() {
        val = $(this).val();
        isOpButton = true;
        isEqButton = false;
        arr = [];
        
        arr.push(val);
        getOpStatus();
        

    });


    function getRet(outcome) {
        if (isNaN(result)) {
            $(".text").text("OVER RANGE!");
            $(".text").addClass("red");
        } else {
            if (result > 999999999999) {
                $(".text").addClass("red");
                return $(".text").text("OVER RANGE!");
            } else if (parseInt(result) === parseFloat(result)) {
                console.log("整数");
                $(".text").text(result);
            } else {
                result = result.toString();

                console.log("length", result.length);
                var len = result.length;
                if (len > 12) {
                    console.log("result", result);

                    var index = result.indexOf(".");
                    var end = result.slice(index + 1);

                    var start = result.slice(0, index);
                    if (start.length >= 12) {
                        $(".text").addClass("red");
                        return $(".text").text("OVER RANGE!");
                    } else {
                        $(".text").removeClass("red");

                        var diff = 11 - start.length;
                        result = Number(result).toFixed(diff);
                        result = result.replace(/0+$/g, '');


                    }

                } else {
                    result = Number(result);
                }
                $(".text").text(result);

            }
        }
    }
    function sum(){
        result = eval(prevNum+val+curNum);
        getRet(result);
    }

    $(".equal").click(function() {
        if(isOpButton){
            return;
        }
        // result = eval(prevNum + val + curNum);
        sum();
        console.log("result",prevNum + val + curNum);

        isEqButton = true;
        // if(!isOpButton){
        //     sum();
        // }else{
        //     curNum = 0;
        // }
       
           

    });

});
