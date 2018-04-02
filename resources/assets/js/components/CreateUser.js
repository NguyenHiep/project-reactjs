import React from 'react'
import ReactDom from 'react-dom'

export default class User extends React.Component{

	constructor(){
		super();
		this.state = {
			data:  []
		}
	}
	componentWillMount(){
		let $this = this;

		axios.get('/api/users').then(response => {
			$this.setState({
				data: response.data
			})
		}).catch( error => {
			console.log(error)
		})

	}

	render() {
		return (
			<div>
				<h2>Add new user</h2>
				<form className="form-horizontal" action="/action_page.php">
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="name">Name:</label>
						<div className="col-sm-10">
							<input type="email" className="form-control" id="name" placeholder="Enter Name" />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="email">Email:</label>
						<div className="col-sm-10">
							<input type="email" className="form-control" id="email" placeholder="Enter email" />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" id="pwd" placeholder="Enter password" />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<div className="checkbox">
								<label><input type="checkbox"/> Remember me</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-default">Submit</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

ReactDom.render(<CreateUser/>, document.getElementById('app'));