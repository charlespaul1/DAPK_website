import Cards from "../components/cards"
import Bill from '../assets/bill.jpg'
import kc from '../assets/kc.jpg'
import mj from '../assets/mj.jpg'
import './About.css'
const About = () => {
  const persons = [
    {
      image: Bill,
      name: 'Omwami Bill',
      position: 'Party President',
    },
    {
      image: kc,
      name: 'Kere Joseph',
      position: 'Deputy President',
    },
    {
      image: mj,
      name:'Kuya Likobe',
      position: 'Secretary General',
    },
  ]
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="section_description">
      <div className="section-overview">
        <h2>Party Overview</h2>
        <p>Democratic Action Coalition Party is driven by the vision of a just and inclusive society, where every citizen can prosper and contribute to the nation`s progress. By upholding democratic principles, advocating for social justice, and pursuing our goals, we aim to build a brighter future for all.</p>
      </div>
      <div className="section-vision">
        <h2>Party Vision</h2>
        <p>To create a harmonious and progressive nation that upholds democratic values, fosters social justice, and enhances the well-being of all its citizens. By pursuing this vision, we aim to build a brighter future for generations to come</p>
      </div>
      </div>

      <h2 className="our-leaders">Our Leaders</h2>
        <Cards persons={persons} />
        <div className="membership-support">
        <div className="section-membership">
          <h2>Party Membership</h2>
          <p>
          By joining the Democratic Action Coalition Party, you become an integral part of a vibrant political movement that strives for positive change. Your membership allows you to actively contribute, shape policies, and work towards a more inclusive, just, and prosperous society. Together, we can make a difference and build a better future for all.
          Register as a member today and join us in our journey to build a better future for all.
          </p>
          <a href='#register'>
          <button>Register</button>
        </a>
        </div>
        <div className="support">
          <h2>Party Support</h2>
          <p>Donate today and be a part of our movement for change. Together, we can build a society that upholds democratic values, champions social justice, and ensures opportunities for every individual to thrive.
Your contribution matters. Join us in shaping a brighter future for our nation by making a donation today. Thank you for your support!</p>
<a href='#donate'>
          <button>Donate</button>
        </a>
        </div>
        </div>
    </div>
  )
}

export default About
