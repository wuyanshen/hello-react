import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component{
	constructor(props){//构造方法，初始化方法
		super(props);
		this.state={
			age:props.initialAge,
			status:0
		}
		setTimeout(()=>{
			this.setState({
				status:this.state.status+1
			})
		},1000)
	}

	onMakeOlder(){
		this.setState({
			age:this.state.age+3
		})
		console.log(this);
	}

	render(){
		let content = "";
		if(true){
			content = "hello!";
		}
		console.log(this.props);
		return(
			<div className="container">
				<div className="row">
		          <div className="col-xs-1 col-xs-offset-11">
		            <h1>Home !!</h1>
		            <p>{2+2}</p>
            		<p>{"hello world"}</p>
            		<p>{content}</p>
            		<p>{true ? "正确":"错误"}</p>
            		<p>你的名字是：{this.props.name},你的年龄是：{this.state.age}</p>
            		<p>status:{this.state.status}</p>
            		<button onClick={()=>this.onMakeOlder()} className="btn btn-primary">我是按钮，快点我哟~</button>
            		<div>
            			<h4>hobbies</h4>
            			<ul>
								{this.props.user.hobbies.map((hobby,index)=><li key={index}>{hobby}</li>)}
            			</ul>
            		</div>
            		<div>
            			{this.props.children}
            		</div>
		          </div>
		        </div>
			</div>
		);
	}
}

Home.propTypes={
	name:PropTypes.string,
	age:PropTypes.number,
	user:PropTypes.object,
	children:PropTypes.element.isRequired
}