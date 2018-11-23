import React from 'react';
import { Card, Button, CardTitle, CardText,CardImg,state,handlcardImg,handlecardTitle,handlecardtext,deletecard,render,onClick,ButtonGroup,ButtonToolbar} from 'reactstrap';
//import Map from './Map';
            class User extends React.Component{
                t
                state={
                    task:"",
                    title:[], 
                  
                    CardTitle: "",
                    CardText:"",
                    CardImg:"",
                }
            componentDidMount() {
                    fetch('http://localhost:8001/internproject')
                    .then( res => res.json())
                    .then(data => this.setState({title: data}))//what is this??
                    .catch(err => console.log(err));
                }
            


                handleCardImg=(e) =>{
                    this.setState({CardImg:e.target.files[0].name})//here the e. target .files.name since we want to recieve only its name but there is also more
                }

                handleCardTitle=(e) =>{
                    this.setState({CardTitle:e.target.value})
                }

               handleCardtext=(e) =>{
                    this.setState({CardText:e.target.value})
                }

               



                handleSubmit=(event)=> {
                    event.preventDefault();
                    let newt= {
                       CardTitle:this.state.CardTitle,
                        CardText:this.state.CardText,
                        cardImg:this.state.CardImg,
                    }

                    fetch('http://localhost:8001/Add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newt)
                    })





                     window.location.reload();

                    /*let title =this.state.title;                       we were using it before we added into the mango db in order to push from it while now we are pushing from the mongo db
                    title.push(newt);
                    this.setState({title})*/
                  }
                  deletecard=(Card)=> {


                  /*    console.log(Card)
                  let index=this.state.title.indexOf(Card)              here we removed the delete way since we started using the delete function in the server
                    let title= this.state.title
                    title.splice(index,1)
                    this.setState({title})*/

                    fetch('http://localhost:8001/deletecard', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(Card) //it should be new t but??
                  
                    
                    })
                    window.location.reload();
                    
                    }

                    render(){
                        return(
                            <div style={{backgroundColor:"lightblue"}}>
                            <form onSubmit={this.handleSubmit}>

                             <input type="text" class="form-control" placeholder="Title" value = {this.state.CardTitle}  onChange={this.handleCardTitle}/>
            
                             <input type="text" class="form-control" placeholder="text" value = {this.state.CardText} onChange={this.handleCardtext}/>
                             <input type="file"  class="form-control" onChange={this.handleCardImg}/>
                             
                             {/*<ButtonToolbar>
                             <ButtonGroup>
                                 <Button>nature1</Button>
                                   <Button>nature2</Button>
                                       <Button>nature3</Button>
                                           <Button>nature4</Button>
                                             </ButtonGroup>
                             </ButtonToolbar>*/}
                             
                            <button class ="form-control">Add</button>
                            
                            </form>
                            <br/>
                           
                                  
                                   
                            {/* in the img we added + location and t.cardimage to bring here name */}
                              
                                    {
                              this.state.title.map( (t,index) =>//a for loop function  in order to fill the card 
                             <div key={index}> 
                                 <Card>
                                   <img style={{width: "30rem"}} src={'http://localhost:3000/' + t.cardImg} alt="Card image cap" />
                                    <CardTitle >{t.CardText}</CardTitle>
                                    <CardText>   {t.CardTitle} </CardText>   
                                 </Card>




                                 <button type="button" onClick ={() => this.deletecard(t)} class="btn btn-primary">Delete</button>
                              </div>
                                        )
                                    }

                        
                   <Card body inverse color="primary">
                    <CardImg Top width="50%" src="http://localhost:3000/nature1.png" alt="Card image cap" />
                        <CardTitle >Example</CardTitle>
                        <CardText>this Image is an Example and you cannt delete it.</CardText>
                        
                    </Card>
                   {/*   <Card body inverse color="success">
                        <CardTitle >Second</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Delete</Button>
                    </Card>
                    <Card body inverse color="info">
                        <CardTitle >third</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Deleten</Button>
                    </Card>
                    <Card body inverse color="warning">
                        <CardTitle  >fourth</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Delete</Button>
                    </Card>
                    <Card body inverse color="danger">
                        <CardTitle >Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Delete</Button>
                    </Card> */}
         
                   
                </div>
               
                )} }
            

            export default User;
           