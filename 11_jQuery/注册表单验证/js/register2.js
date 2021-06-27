$(function(){

    var error_name = true;
    var $name = $('#user_name');

    /*$name.click(function(){
        $(this).next().hide();
    })

    $name.blur(function(){
        fn_check_user_name();
    })
    */

    $name.click(function(){
        $(this).next().hide();
    }).blur(function(){
        fn_check_user_name();
    })



    function fn_check_user_name(){
        var val = $name.val();
        var reUser = /^\w{6,20}$/;

        // 判断输入框是否为空
        if(val==''){
            error_name = true;
            $name.next().html('输入框不能为空！').show();
            return; 
        }

        if( reUser.test(val) ){
            error_name = false;
            $name.next().hide();
        }
        else{
            error_name = true;
            $name.next().html('用户名是6到20位的数字、字母或者下划线').show();
        }
    }



})