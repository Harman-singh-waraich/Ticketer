import React from "react";

class ItemForm extends React.Component  {
 constructor(props){
   super(props)
 }

 onFinish = () => {

    if((this.state===null)||(this.state.type === undefined)||(this.state.price===undefined)||(this.state.name===undefined)||(this.state.description===undefined)){
      alert("please fill the form properly")
    }else{
    let price = parseInt(this.state.price)
    this.props.generateItem(this.state.type,this.state.name,price,this.state.description)
  }
};
render(){
  return (<div><section class="mbr-section mbr-section-small mbr-parallax-background mbr-after-navbar" id="form1-7" data-rv-view="23" style={{backgroundImage: "url(assets/images/generateback2-2000x1325.jpg)", paddingTop: "6rem", paddingBottom: "6rem"}}>
      <div class="mbr-overlay" style={{opacity: "0.2", backgroundColor: "rgb(92, 184, 92)"}}></div>
      <div class="container">
          <div class="row">
              <div class="col-sm-8 col-sm-offset-2" data-form-type="formoid">
                  <h2 class="mbr-section-title display-3 text-xs-center" style={{weight:"700"}}>Generate Item</h2>
                  <form onSubmit={(e)=>{e.preventDefault();this.onFinish()}}  data-form-title="Contact Form">
                      <input type="hidden" value="vPqJgzEG8OpSx8y1t6d9Lgg2QZAEVdNvw6pIc4vG7zVNpULUhRssbI1oKUNRiptQHahqyr52nH8tEDGhUtZydb0dzJ/kM7BCWRsVKLhFl5WagqDxGqU5EW5GetjF0LQr" data-form-email="true"/>
                      <div class="form-group">
                          <input type="text" class="form-control" name="name" required="" placeholder="Name of item*" onChange={(e)=>{this.setState({name:e.target.value});console.log(this.state)}} data-form-field="Name"/>
                      </div>
                      <div class="form-group">
                          <input type="text" class="form-control" name="type" required="" placeholder="Type*" onChange={(e)=>{this.setState({type:e.target.value});console.log(this.state)}} data-form-field="Email"/>
                      </div>
                      <div class="form-group">
                          <input type="tel" class="form-control" name="price" placeholder="Price" onChange={(e)=>{this.setState({price:e.target.value});console.log(this.state)}} data-form-field="Phone"/>
                      </div>
                      <div class="form-group">
                          <textarea class="form-control" name="description" rows="7" placeholder="Description" onChange={(e)=>{this.setState({description:e.target.value});console.log(this.state)}}data-form-field="Message"></textarea>
                      </div>
                      <div class="text-xs-right"><button type="submit" class="btn btn-secondary-outline">Generate</button></div>
                  </form>
              </div>
          </div>
      </div>
  </section>
  <section class="mbr-section mbr-section-small mbr-footer mbr-parallax-background" id="contacts1-8" data-rv-view="14" style={{backgroundImage: "url(assets/images/photo-3.jpg)", paddingTop: "3rem", paddingBottom: "1.5rem"}}>
      <div class="mbr-overlay" style={{backgroundColor: "rgb(60, 60, 60)", opacity: "0.8"}}></div>
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-md-3">
                  <div><span class="mbri-globe mbr-iconfont mbr-iconfont-contacts1"></span></div>
              </div>
              <div class="col-xs-12 col-md-3">
                  <p></p>
              </div>
              <div class="col-xs-12 col-md-3">
                  <p><strong>Contacts</strong><br/>
  Email: support@mobirise.com<br/>
  Phone: +1 (0) 000 0000 001<br/>
  Fax: +1 (0) 000 0000 002</p>
              </div>
              <div class="col-xs-12 col-md-3"><strong>Links</strong><ul><li>Github</li><li>Mobirise</li></ul></div>
          </div>
      </div>
  </section></div>
  );
};
}
export default ItemForm;
