module.exports.sendValidation = (id) => `
<style style="-webkit-font-smoothing:antialiased;">body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
.ii a[href] {
  color: #fff;
text-decoration: none;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
@media only screen and (max-width: 640px){
    body body{
      width:auto !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=full]{
      width:100% !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=mobile]{
      width:100% !important;
      padding-left:20px;
      padding-right:20px;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body [class=erase]{
      display:none;
    }
}	
@media only screen and (max-width: 640px){
    body [class=buttonScale]{
      float:none !important;
      text-align:center !important;
      display:inline-block !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image600 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image230]{
      width:230px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image298 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    table[class=image110]{
      text-align:center;
      float:none;
      width:70% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=pad30]{
      padding-left:25px !important;
      padding-right:25px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image298] img{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .h30{
      width:100% !important;
      height:30px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h15{
      width:100% !important;
      height:15px !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=sponsor]{
      text-align:center;
      float:none;
      width:80% !important;
    }
}	
@media only screen and (max-width: 640px){
    body .w10{
      width:8% !important;
      height:10px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .pad20{
      padding-left:20px !important;
      padding-right:20px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h65{
      width:100%;
      height:65px !important;
    }
}</style>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
<tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;"><!-- [if gte mso 9]>
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
          <v:fill type="tile" src="images/5a2ddcd490a50untitled-2.png" ></v:fill>
          <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
    <div style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 94.979%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center"><!-- Nav Mobile Wrapper -->
              <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                      <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="70">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; text-align: center; width: 92.5925%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td class="image200" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                              <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                                      <img class="editedImage" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-user-drag:none;height:auto;width:200px;-webkit-font-smoothing: antialiased; -webkit-user-drag: none; height: auto; width: 200px; font-family: 'Open Sans', Arial, sans-serif !important; display: block; margin-left: auto; margin-right: auto;" src="https://res.cloudinary.com/sofia-technologies/image/upload/v1616341964/dv8cdwhgcegmlsknvmon.png" alt="" width="80" height="106" border="0">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
<!-- Text -->
                      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td class="font32" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 46px; color: #ffffff; text-align: center; line-height: 56px; font-weight: bold; vertical-align: top; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                              <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff;">Welcome to Sofia 3D Store</span> 
                              <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                              <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">...Please Validate By Clicking</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="50">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center"><!-- Button Center -->
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                              <table style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 203px; height: 47px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; border-radius: 25px; padding-left: 25px; padding-right: 25px; font-weight: 400; color: #ffffff; background: #ffc845; width: 152.667px; height: 10px;" align="center" bgcolor="#FAC32E" height="41">
                                      <span style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-size: 16px; text-decoration: none; line-height: 41px;">
                                        <strong style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;" data-renderer-mark="true"><a style="text-decoration: "none";color: "white";" href="${process.env.REACT_APP_API_URL}/validate/${id}">VALIDATE</a></strong>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
<!-- End Button Center -->
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                      <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                    </td>
                  </tr>
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                      <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if gte mso 9.]>
          </v:textbox>
        </v:fill>
      </v:rect>
      <![endif]-->
  </td>
</tr>
</tbody>
</table>
`;

module.exports.sendResetLink = (email, id) => `
<style style="-webkit-font-smoothing:antialiased;">body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
.ii a[href] {
  color: #fff;
text-decoration: none;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
@media only screen and (max-width: 640px){
    body body{
      width:auto !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=full]{
      width:100% !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=mobile]{
      width:100% !important;
      padding-left:20px;
      padding-right:20px;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body [class=erase]{
      display:none;
    }
}	
@media only screen and (max-width: 640px){
    body [class=buttonScale]{
      float:none !important;
      text-align:center !important;
      display:inline-block !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image600 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image230]{
      width:230px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image298 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    table[class=image110]{
      text-align:center;
      float:none;
      width:70% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=pad30]{
      padding-left:25px !important;
      padding-right:25px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image298] img{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .h30{
      width:100% !important;
      height:30px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h15{
      width:100% !important;
      height:15px !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=sponsor]{
      text-align:center;
      float:none;
      width:80% !important;
    }
}	
@media only screen and (max-width: 640px){
    body .w10{
      width:8% !important;
      height:10px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .pad20{
      padding-left:20px !important;
      padding-right:20px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h65{
      width:100%;
      height:65px !important;
    }
}</style>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
<tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;"><!-- [if gte mso 9]>
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
          <v:fill type="tile" src="images/5a2ddcd490a50untitled-2.png" ></v:fill>
          <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
    <div style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 94.979%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center"><!-- Nav Mobile Wrapper -->
              <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                      <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="70">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; text-align: center; width: 92.5925%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td class="image200" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                              <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                                      <img class="editedImage" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-user-drag:none;height:auto;width:200px;-webkit-font-smoothing: antialiased; -webkit-user-drag: none; height: auto; width: 200px; font-family: 'Open Sans', Arial, sans-serif !important; display: block; margin-left: auto; margin-right: auto;" src="https://res.cloudinary.com/sofia-technologies/image/upload/v1616341964/dv8cdwhgcegmlsknvmon.png" alt="" width="80" height="106" border="0">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
<!-- Text -->
                      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td class="font32" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 46px; color: #ffffff; text-align: center; line-height: 56px; font-weight: bold; vertical-align: top; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                              <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff;">We're glad to have you back</span> 
                              <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                              <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">...and to help you of course</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="50">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center"><!-- Button Center -->
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                              <table style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 203px; height: 47px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; border-radius: 25px; padding-left: 25px; padding-right: 25px; font-weight: 400; color: #ffffff; background: #ffc845; width: 152.667px; height: 10px;" align="center" bgcolor="#FAC32E" height="41">
                                      <span style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-size: 16px; text-decoration: none; line-height: 41px;">
                                        <strong style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;" data-renderer-mark="true"><a style="text-decoration: "none";color: "white";" href="${process.env.REACT_APP_API_URL}/reset/${id}">RESET PASSWORD</a></strong>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
<!-- End Button Center -->
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                      <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                    </td>
                  </tr>
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                      <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if gte mso 9.]>
          </v:textbox>
        </v:fill>
      </v:rect>
      <![endif]-->
  </td>
</tr>
</tbody>
</table>
`;
