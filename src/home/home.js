import React from 'react'
import classes from './BackgroundVideo.module.css';
const vidBack = require("./vidBack.mp4")
class Home extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return <div>
    <section className={classes.Container}  >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={vidBack} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>

            <div class="container">
                <div class="row">
                    <div class="col-md-8">

                        <h1 class="mbr-section-title display-1">Ticketer</h1>
                        <p class="lead">A Blockchain-based learning and redeeming app.</p>
                        <div class="mbr-buttons--left"><a class="btn btn-lg btn-info" onClick={this.props.explore}>Explore</a> </div>
                    </div>
                </div>
            </div>
            <a class="mbr-arrow" href="#msg-box4-d"><span class="mbri-down mbr-iconfont"></span></a>
            </div>
        </section>

    <section class="mbr-section mbr-section-nopadding" id="msg-box4-d" data-rv-view="3" style={{backgroundColor: "rgb(255, 255, 255)", paddingTop: "6rem", paddingBottom: "3rem"}}>

        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-9 mbr-table-cell-lg image-size" style={{width: "13%"}}>
                    <div class="mbr-figure"><img src="assets/images/mbr-1280x1920.jpg"/></div>
                </div>
                <div class="col-xs-12 col-lg-3 mbr-inner-padding text-xs-center mbr-table-cell-lg">
                    <h3 class="mbr-section-title display-4">Learn And Teach</h3>

                    <div class="lead"><p>With Ticketer you can educate yourself and others to earn redeemable Tokens!</p></div>
                    <div><a class="btn btn-lg btn-black-outline btn-black" href="page1.html#content5-c">Let's Go</a></div>
                </div>

            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section-nopadding" id="msg-box4-c" data-rv-view="6" style={{backgroundColor: "rgb(255, 255, 255)", paddingTop: "3rem", paddingBottom: "6rem"}}>

        <div class="container">
            <div class="row">

                <div class="col-xs-12 col-lg-3 mbr-inner-padding text-xs-center mbr-table-cell-lg">
                    <h3 class="mbr-section-title display-4">Redeem Items</h3>

                    <div class="lead"><p>Tokens you earn can be redeemed in Redeem store!</p><p><br/>/</p></div>
                    <div><a class="btn btn-lg btn-black-outline btn-black" onClick={this.props.redeem}>Store</a></div>
                </div>
                <div class="col-xs-12 col-lg-9 mbr-table-cell-lg image-size" style={{width: "25%"}}>
                    <div class="mbr-figure"><img src="assets/images/joel-filipe-ju9vazdgmzs-unsplash-1400x1336.jpeg"/></div>
                </div>
            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section-nopadding" id="msg-box4-g" data-rv-view="9" style={{backgroundColor: "rgb(255, 255, 255)", paddingTop: "0rem", paddingBottom: "0rem"}}>

        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-9 mbr-table-cell-lg image-size" style={{width: "20%"}}>
                    <div class="mbr-figure"><img src="assets/images/mbr-1400x930.jpg"/></div>
                </div>
                <div class="col-xs-12 col-lg-3 mbr-inner-padding text-xs-center mbr-table-cell-lg">
                    <h3 class="mbr-section-title display-4">Create</h3>

                    <div class="lead"><p>Create items that can be then redeemed.</p><p><br/></p></div>
                    <div><a class="btn btn-lg btn-secondary-outline" onClick={this.props.generate}>Create</a></div>
                </div>

            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section-small" id="social-buttons2-e" data-rv-view="12" style={{backgroundColor: "rgb(255, 248, 224)", paddingTop: "0rem", paddingBottom: "0rem"}}>


        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h2 class="mbr-section-title h1">Get In Touch</h2>
                </div>
                <div class="col-sm-8 text-xs-right">       <a class="btn btn-social socicon-bg-linkedin" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/mobirise"><i class="socicon socicon-linkedin"></i></a> </div>
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
    </section>
            </div>
  }
}
export default Home;
