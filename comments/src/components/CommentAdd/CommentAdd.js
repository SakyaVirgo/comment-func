import React,{Component , PropTypes} from 'react';/*
 *  添加评论组件
 */

export default class CommentAdd extends Component{

    static propTypes = {
        addComment :　PropTypes.func
    }

    add = ()=>{
        //收集用户输入的信息
        const username = this.refs.username.value.trim();
        const content = this.refs.content.value.trim();
        //检查是否正常输入，若非法则提示结束
        if(!username || !content){
            alert("请检查输入内容！")
            return
        }
        //封装为comment对象
        const comment = {
            username,
            content
        }
        //调用addComment添加
        this.props.addComment(comment)
        //移出清理数据
        this.refs.username.value = '';
        this.refs.content.value = '';
    }

    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="username"  />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}