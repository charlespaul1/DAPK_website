import Accordion from '../components/Accordion';
import './Donate.css'
const Donate = () => {
  const items = [
    { title: 'How to donate', content: 'Use the pay bill above to make your donations' },
    { title: 'How can I get involved with your political party?', content: 'volunteer network, attending party events & meetings, contributing to policy discussions, or even considering candidacy for public office.' },
    { title: "What is your political party's mission or vision?'", content: "Our party's mission is to create a society based on principles of equality, justice, and prosperity for all citizens. We envision a future where every individual has access to opportunities and can contribute to shaping a better nation" },
  ];
  const paybillNumber = '123456';
  const accountName = 'DAC';
  const bankName = 'Bank of Africa';
  return (
    <div className='donate-faq'>
      <h1 className='heading'>Donation</h1>
      <h1>Help the Party grow by Donating here</h1>
      <div className="donate-container">
      <h2>Donation Details</h2>
      <p>Paybill Number: {paybillNumber}</p>
      <p>Account Name: {accountName}</p>
      <p>Bank Name: {bankName}</p>
      
      </div>
      <div className="faq">
        <h2>Frequently asked questions</h2>
      <Accordion items={items} />
     
      </div>
      
    </div>
  )
}

export default Donate
