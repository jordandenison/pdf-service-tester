const html = `<html><head>
<title>Invoice</title>
<style>
      @page { margin: 0 }
      html, body {
          font-family: "proxima nova", Helvetica, sans-serif
      }
      .orderId {
          margin-right: 1rem;
          font-weight: bold;
      }
      .balanceHeader {
          font-weight: bold;
      }
      .orderDate {
          margin-right: 1rem;
      }
      .invoice {
          display: block;
          width: 8.5in;
          margin-bottom: 5%;
          page-break-after: always;
      }
      .full {
          width: 40%;
          margin-left: 5%;
      }
      .facName {
          margin-top: 20px;
          display: inline-block;
          text-align: left;
          font-size: 18px;
          font-weight: bold;
      }
      .facInfo {
          display: inline-block;
          text-align: left;
      }
      .logodiv {
          text-align: left;
          width: 50%;
          float: right;
      }
      .logo {
          max-width: 100px;
      }
      .customerName {
          text-align: center;
          text-transform: uppercase;
      }
      .remittableSection {
          margin-top: 60px;
          margin-left: 120px;
          position: relative;
      }
      .customerAddress1 {
          margin: 60px 0 0 120px;
          font-size: 16px;
      }
      .customerAddress2 {
          margin: 0 0 0 120px;
          font-size: 16px;
      }
      .customerAddress3 {
          margin: -30px 0 70px 120px;
          font-size: 10px;
      }
      .remittanceInfo {
          position: absolute;
          top: -116px;
          right: 80px;
          display: inline-block;
          vertical-align: top;
      }
      .fillIn {
          text-decoration: underline;
      }
      .barcode {
          display: block;
          text-align: center;
      }
      .orderContainer {
          text-align: center;
      }
      .orders {
          width: 80%;
          display: inline-block;
          text-align: left;
      }
      .order {
          margin-top: 1.5rem;
      }
      .itemContainer {
          text-align: right;
          margin-top: .5rem;
          margin-bottom: 1.5rem;
      }
      .ticketHeader {
          text-align: left;
          display: inline-block;
          width: 90%;
          font-weight: bold;
          margin-bottom: .5rem;
      }
      .items {
          width: 90%;
          display: inline-block;
          text-align: left;
          margin-bottom: 1.5rem;
      }
      .item {
          width: 100%;
      }
      .notes {
          margin-left: 40px;
      }
      .subtotal {
          width: 90%;
          display: inline-block;
          text-align: left;
      }
      .paidDiv {
          width: 90%;
          display: inline-block;
          text-align: left;
          margin-top: 1%;
      }
      .quantity, .label {
          margin-right: 1rem;
      }
      .upcharge {
        margin-left: 40px;
        margin-right: 1rem;
      }
      .price {
        float: right;
      }
      .paid {
        float: right;
        font-weight: bold;
        font-size: 18px;
        text-transform: capitalize;
      }
      .payment {
        text-align: left;
        margin-top: 2rem;
        margin-right: 10%;
        width: 30%;
        float: right;
      }
      .payment > div {
        margin-bottom: 2%;
      }
      .footer {
          text-align: center;
          font-size: 16px;
          margin-top: 150px;
          clear: both;
      }
</style>
</head>
<body>
    
    <div class="invoice">
        <div class="logodiv">
            <img class="logo" src="https://s3-us-west-2.amazonaws.com/starchup-apps/com.starchup.starchup/logoHD.png" alt="Logo">
        </div>
        <div class="full facName">Starchup Cleaner</div>
        <div class="full facInfo">153 W North Ave</div>
        <div class="full facInfo">Chicago, IL 60610</div>
        <div class="full facInfo">(312) 248-9313</div>
        <div class="customerAddress1">TO: Jordan Denison2</div>
        <div class="customerAddress2">2451 North Sawyer Avenue</div>
        <div class="customerAddress2">Chicago, IL 60647</div>
        <div class="remittableSection">
            <div class="remittanceInfo">
                <div>Customer ID: </div>
                <div>Statement Date: </div>
                
                <div>Amount Due: $6.73</div>
                <div>Amount Enclosed: $<span class="fillIn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
            </div>
        </div>
        <div class="customerAddress3">Please remit top of invoice with payment.</div>
        <div class="orderContainer">
            
            <div class="orders">
                
                <span class="orderId">Order Number 1053</span>
                <span class="orderid">Jordan Denison2</span>
                <span class="orderDate"></span>
                <div class="itemContainer">
                    
                    <div class="orderTickets">
                        
                        <div class="ticket">
                            <div class="ticketHeader">Ticket #10531</div>
                            <div class="items">
                                
                                <!-- The item itself. -->
                                <div class="item">
                                    <span class="quantity">3</span>
                                    <span class="label">
                                        Wash &amp; Fold
                                        
                                        
                                        
                                    </span>
                                    <span class="price">$6.00</span>
                                    
                                    
                                </div>
                                <!-- Item upcharges, as item lines. -->
                                
                                
                            </div>
                        </div>
                        

                        
                        
                    </div>
                    
                    <div class="subtotal">
                        <span class="label">Subtotal:</span>
                        <span class="price">$6.00</span>
                    </div>
                    
                    
                    
                    
                    <div class="subtotal">
                        <span class="label">Tax Man Cometh For::</span>
                        <span class="price">$0.61</span>
                    </div>
                    
                    
                    <div class="subtotal">
                        <span class="label">Environmental Fee:</span>
                        <span class="price">$0.12</span>
                    </div>
                    
                    
                    
                    
                    
                </div>
                
            </div>
            <div class="payment">
                <div>
                    <span class="label">Subtotal:</span>
                    <span class="price">$6.00</span>
                </div>
                
                
                
                
                
                <div>
                    <span class="label">Tax:</span>
                    <span class="price">$0.61</span>
                </div>
                
                
                <div>
                    <span class="label">Env Fees:</span>
                    <span class="price">$0.12</span>
                </div>
                
                
                
                <div>
                    <span class="label">Total Due:</span>
                    <span class="price">$6.73</span>
                </div>
            </div>
            <div class="footer">Thank you for your business!</div>
        </div>
    </div>
    

</body></html>`


const html2 = `<html>
<head>
  <meta charset="utf-8">
  <title>The HTML5 Herald</title>
</head>
<body>
  <h1>PDF TEST</h1>
</body>
</html>`

const html3 = '<html><head><meta charset="utf-8"><title>The HTML5 Herald</title></head><body><h1>PDF TEST</h1></body></html>'

const html4 = 'test'

var rp = require('request-promise')
var fs = require('fs')

var options = {
    method: 'POST',
    uri: 'http://localhost:3012/api/pdf/generate',
    // uri: 'http://localhost:3012/test',
    body: {
        html: html3
    },
    json: true
};

rp(options)
    .then(function (parsedBody) {
        fs.writeFileSync('test.pdf', parsedBody, "binary") // The third param here can be changed. Binary seems to have the best result so far. This could be an improper test though.
        // POST succeeded...
    })
    .catch(function (err) {
        console.log('err ', err)
        // POST failed...
    });