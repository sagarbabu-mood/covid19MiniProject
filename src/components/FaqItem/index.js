import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {question, answer} = faqDetails
  return (
    <li className="faq-item">
      <h1 className="faq-question">{question}</h1>
      <p className="faq-answer">{answer}</p>
    </li>
  )
}

export default FaqItem
