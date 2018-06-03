$(document).ready(function(){
	var input = $('.main').find('input[name = '账户']');
	var password = $('main').find('input[name = '密码']');
	var confirm = $('main').find('input[name = '确认密码']');
	var name = $('main').find('input[name = '名字']');
	var theName = $('main').find('input[name = '昵称']');
	var phoneNumber = $('main').find('input[name = '手机号']');
	var email = $('main').find('input[name = '邮箱']');

	var firstRight = $('.right:eq(0)');
	var secondRight = $('.right:eq(1)');
	var thirdRight = $('.right:eq(2)');

	var firstWrong = $('.wrong:eq(0)');
	var secondWrong = $('.wrong:eq(1)');

	var firstEmail = $('.pleaseEmail')

	input.change(function(){
		firstRight.css('display','block');
	})
})