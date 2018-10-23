import React from "react";
import "./GetSmarterContent.css";
import { Col, Row } from "../../components/Grid";


const GetSmarterContent = props => (

  <Col size="md-12 sm-12">
    <Row>
    <img className="getSmarterHeader animated fadeInDown" src="/images/GetMoneySmart.png" />
      <h3 className="quote animated fadeInDown" style={{color: "grey"}}>"Play the Game" - Donald Trump</h3>
      <p>
        To win at any game, you’ll have to know and understand the environment and rules.  
        An understanding of basic financial topics is crucial when navigating through your financial journey.  
        Here, you’ll be able to Get Smarter in these areas.  There are many financial education resources out there.  
        Please feel free to check out the recommended links to expand your knowledge.
      </p>
    </Row>
    <Row>
      <Col size="md-4">
        <h4 style={{color: "#1ABC9C"}}>Banking & Loans</h4>
        <p>
          Banks have many tools to help balance your income & expenses.  To accumulate more money for investing, banks will work to earn your business and money.  
          On a daily basis, they take most or all of the accumulated/deposited cash and use it for investing.  
          Banks will work with you to keep your banking account fees low or even free, in most cases.  
          The FDIC insures and guarantees that banks will not lose your money, as long as it is in a regular deposit account (checking/savings)
        </p>
        <p>
          Most banks provide Loans to help consumers make large purchases, such as home and car buying.  
          Since most people do not have enough cash on-hand to out-right purchase the things they want, sometimes loans are used to help with that.  
          The money charged to borrow this upfront cash is called interest and is usually payed through the life of the loan.  
        </p>  
      </Col>
      <Col size="md-4">
        <h4 style={{color: "#1ABC9C"}}>Credit & Debt</h4>
        <p>
          When dealing with credit, one should take great care.  It can be a very complex beast.  It is important to establish and maintain good credit and credit practices.  
          Credit will affect how much you will have to pay for loans in the future (interest rates).  Typical interest rates range from 0.01% to 30% (very high).  
          Make sure you do homework on how interest is calculated.  They vary depending on you credit, your down payment, and the length of the loan.  
          You could be paying a lot more in the long run. 
        </p>
        <p>  
          Take great caution in dealing with debt.  Only you can tell how much debt you can comfortably handle.  Today, loans are too easily available for young people.  
          Accumulating a lot of debt and taking too long to pay can have adverse effects on your credit.    
        </p>
      </Col>
      <Col size="md-4">
        <h4 style={{color: "#1ABC9C"}}>Investing</h4>
        <p>
          Investing can come in many shapes and forms.  Generally, its almost like loaning your money to an entity and having them pay you on the interest they disclose.  
          Other forms of investing are generally like placing bets on companies.  Extensive research should be done here before investing.
        </p>
        <h4 style={{color: "#1ABC9C"}}>Retirement Planning</h4>
        <p>
          Put away money so you can stop working!  There are money options.  Anytime you put money in a bank, they have to pay interest to you.  
          Anytime an entity holds money that does not belong to them, they have to pay interest to whoever it belongs to.  
          Since they know that you’ll be leaving the money with them until you retire, they usually pay higher interest rates.  
          Banks and investing companies can usually give out a lot of information about this.
        </p>
      </Col>
    </Row>
    <Row>
      <Col size="md-4">
      </Col>
      <Col size="md-4">
        <hr className="hrSmall"></hr>
        <br></br>
      </Col>
      <Col size="md-4">
      </Col>
    </Row>
    <Row>
    <img src="/images/articles.png" />
    </Row>






    
  </Col>
)

export default GetSmarterContent;
