import React,{render} from 'react';
function Footer(){
     return(
        <div><h1>this is our footer</h1></div>
)
 }
// class MyForm extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//     username: '',
//     age: null,
//     }; }
//     myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]: val});
//     }
//     render() {
//     return (
//     <form>
//     <h1>Hello {this.state.username} {this.state.age}</h1>
//     <p>Enter your name:</p>
//     <input type='text' name='username'
//     onChange={this.myChangeHandler} />
//     <p>Enter your age:</p>
//     <input type='text' name='age'
//     onChange={this.myChangeHandler}/>
//     </form>
//     ); }}
// render(<MyForm />, document.getElementById('root'));
   
export default Footer;