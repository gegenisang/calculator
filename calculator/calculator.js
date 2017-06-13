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

        return newText;


    }

    function getNumIsNaN(now) {

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

   
    $(".num").click(function() {
        var curDown = $(this).val();
        var curText = $(".text").text();
        var c = getNumIsNaN(curText);
        curNum = getNum(c, curDown);

        $(".text").text(curNum);


    });


    function getOpStatus(op) {

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
        getStatus();

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
