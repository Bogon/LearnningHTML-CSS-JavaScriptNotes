/*
function fnWrap() {

function fnTouzi() {
	alert('请了解一下我们的新产品！');
}

fnTouzi();
}

fnWrap();
*/

/// 上面的寫法是可能重名，可以改成下面封闭函数的形式
/// 一个；想当一个空的js语句，是合法的，防止代码压缩造成同一行
// ;(function() {

// 	function fnTouzi() {
// 		alert('请了解一下我们的新产品！');
// 	}
// 	fnTouzi();
// })();

/// 封闭函数高手写法
// ;!function() {
// 	function fnTouzi() {
// 		alert('请了解一下我们的新产品！');
// 	}
	
// 	fnTouzi();
// }();

;~function() {

	function fnTouzi() {
		alert('请了解一下我们的新产品！');
	}
	
	fnTouzi();
}();