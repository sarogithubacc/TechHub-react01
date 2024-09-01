import React from 'react'
import './Feature.css'
import shipping from '../Assets/shipping.png'
import returns from '../Assets/return.png'
import gift from '../Assets/gift.png'
import contact from '../Assets/contact.png'
export default function Feature() {
  return (
    <div>
      <div className="features">
        <div className="feature">
            <img src={shipping} alt="" class="featureIcon" />
            <span className="featureTitle">FREE SHIPPING</span>
            <span className="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src={returns} alt="" />
            <span className="featureTitle">30 DAYS RETURN</span>
            <span className="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div class="feature">
            <img className="featureIcon" src={gift} alt="" />
            <span className="featureTitle">GIFT CARDS</span>
            <span className="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div class="feature">
            <img className="featureIcon" src={contact} alt="" />
            <span className="featureTitle">CONTACT US!</span>
            <span className="featureDesc">Keep in touch via email and support system.</span>
        </div>
    </div>

    </div>
  )
}
