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
        $(".text").text(prevNum);
        if (prevNum === "") {
            prevNum = 0;
        }
        curNum = prevNum;
    });

    function getNum(nowText, val) {

        var hasDot = false;
        // var newText = nowText;
        if (nowText === prevNum) {
            nowText = "";
        }
        var newText = nowText;
        if (val === "." && nowText.indexOf(".") !== -1) {
            hasDot = true;
        }
        if (nowText === "0" && val !== ".") {
            newText = val;
        } else {
            newText = nowText + val;
        }

        if (hasDot) {
            newText = "0" + nowText;
        }
        if (newText.length > 12) {

            return;
        }


        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        return newText;


    }

    function getNumIsNaN(now) {
        isOpButton = false;
        if (!isOpButton) {
            $(".text").removeClass("red");
            console.log("isOpButton_start",isOpButton);
            now = "";
            result = 0;
         
            count = 0;
            console.log("5555555555555555");
            return now;
        }
        if (isNaN(now)) {
            $(".text").removeClass("red");
            now = "";
            result = 0;
            isOpButton = false;
            count = 0;
            return now;
            exp = "";
            console.log("777777777777");
            isEqButton = false;
            return now;
        } else {
            
          console.log("8888888888");
            return now;

        }
    }

    // if(isEqButton||isOpButton) {
        
    //     $(".text").removeClass("red");
    //     now = "";
    //     result = 0;
    //     console.log("999999_result",result);
    //     count = 0;
    //     isOpButton = false
    //     isEqButton = false;
    //     console.log("count_101010101",count);
    //     console.log("666666666");
    //     return now;
    //   }
   
    $(".num").click(function() {
        var curDown = $(this).val();
        var curText = $(".text").text();

        console.log("curText",curDown,curText);
        var c = getNumIsNaN(curText);
          console.log("ccccccccccccc",c);
        // if (curDown === ".") {
          if(curDown==="."){
            curNum = getNum("0", curDown);
            console.log("3333333333",curDown,curNum);
        } else{
            curNum = getNum(c, curDown);
            console.log("c_cur",c,curDown);
            console.log("444444444444");
        }

        if(!isEqButton){
            if(arr.length>=1){
              val =  arr.slice(-1);
            }
            
            if(prevNum >0){
               result =eval(prevNum+val+curNum);

               console.log(result,"hahhaha",prevNum+val+curNum);
            }
        }
       
        console.log("arr_start", arr);
        
        

        
        

        $(".text").text(curNum);


    });


    function getStatus(op) {

        isOpButton = true;
        
        if (count <= 1 && result === 0) {
            prevNum = curNum;
            console.log("ddddddd");
        } else {
            prevNum = result;
            console.log("fffffffff");
        }

        curNum = "0";

        console.log("prevNum", prevNum);
        $(".text").text(prevNum);

    }


    $(".operation").click(function() {
        val = $(this).val();
        arr = [];
        count++;
        arr.push(val);
        console.log("arr_end", arr);
        getStatus();

        

        console.log(prevNum, count, result, val,curNum,"end");


        
        // if(count>=1&&prevNum===curNum&&result===0){
        //     result = prevNum+curNum;
        //     return $(".text").text(result);
        // }


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

    $(".equal").click(function() {
      console.log("000000000000000");
        result = eval(prevNum + val + curNum);
        console.log("567687989");
        isEqButton = true;
        getRet(result);
           

    });

});
