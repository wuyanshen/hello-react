import React from 'react';
//这种写法是无状态的，下面两种情况需要用到无状态：
//1.无需state,即不处理用户的输入，组件的所有的数据都是依赖props传入的
//2.不需要用到生命周期函数
//这么写的好处是：
//1.不需要声明类，可以避免大量的譬如extends或者constrotor这样的代码
//2.不需要显示声名this关键字，再ES6的类声明中往往需要将函数的this关键字绑定到当前作用域，而因为函数式声明的特性，我们不需要再强制绑定
const Header =(props)=>{
	return(
		<div className="container">
	        <div className="row">
	          <div className="col-xs-1 col-xs-offset-11">
	            <h1>Header !!{props.homeLink}</h1>
	          </div>
	        </div>
	      </div>
	);
}

export default Header;