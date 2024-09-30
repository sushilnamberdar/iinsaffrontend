import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './homepage/Whatsappbutton';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the process for registering as a news reporter on the iinsaf platform?",
      answer: "To register as a news reporter on Iinsaf, simply visit our website and navigate to the registration page. Fill out the required information, including your credentials, experience, and sample work if applicable."
    },
    {
      question: "What are the criteria for becoming a news reporter with iinsaf?",
      answer: "We welcome individuals with a background in journalism, a passion for storytelling, and a commitment to ethical reporting. Previous experience or relevant qualifications are preferred but not mandatory."
    },
    {
      question: "How does iinsaf verify the authenticity and credibility of news reporters?",
      answer: "We verify the credentials of news reporters through a thorough review process, which may include verifying past work, conducting interviews, and assessing the quality of content produced."
    },
    {
      question: "Can freelance news reporters join the iinsaf platform?",
      answer: "Yes, freelance news reporters are welcome to join iinsaf. We value diversity in our reporting team and encourage individuals from all backgrounds to contribute."
    },
    {
      question: "What types of news content are accepted on iinsaf?",
      answer: "We accept a wide range of news content, including but not limited to current events, investigative reports, human interest stories, and opinion pieces."
    },
    {
      question: "How can advertisers register and join the Iinsaf platform to promote their products or services?",
      answer: "Advertisers can register on the iinsaf platform by visiting our website and filling out the registration form for advertisers."
    },
    {
      question: "What are the criteria for advertisers to partner with iinsaf for advertising purposes?",
      answer: "We welcome advertisers who offer products or services that align with our audience and values. Advertisers must comply with our advertising guidelines and adhere to ethical standards."
    },
    {
      question: "What types of advertising formats are available for advertisers on iinsaf?",
      answer: "Advertisers can choose from various advertising formats, including display ads, sponsored content, video ads, and native advertising."
    },
    {
      question: "Is there a minimum budget requirement for advertising campaigns on iinsaf?",
      answer: "There is no minimum budget requirement for advertising campaigns on Iinsaf. Advertisers can customize their campaigns based on their budget and objectives."
    },
    {
      question: "How does iinsaf ensure that advertisements reach the desired audience effectively?",
      answer: "We utilize advanced targeting tools and algorithms to ensure that advertisements reach the relevant audience based on demographics, interests, and browsing behavior."
    },
  ];

  return (
    <>
      <div className="whatsapp-button-container left-3 bottom-2 sm:left-6 sm:bottom-10 md:left-20 md:bottom-20 lg:left-20 lg:bottom-16">
        <WhatsAppButton />
      </div>
      {/* Page Banner Section */}
      <section className="bg-blue-700 banner-img" style={{ marginTop: '0px' }}>
        <div className="container mx-auto">
          <div className="row">
            <div className="content text-center py-16">
              <h1 className="text-4xl  text-white font-bold">Faqs</h1>
              <ul className="breadcrumb flex justify-center mt-4">
                <li><Link to="/" className="text-blue-500">Home</Link></li>
                <li className="mx-2">/</li>
                <li><a href="#" className="text-blue-500">Faqs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[rgb(225,239,248)] py-8">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h1>
          <div className="bg-white shadow-lg rounded-lg">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center p-4 cursor-pointer border-b border-gray-300"
                  onClick={() => toggleAccordion(index)}
                  role="button"
                  aria-expanded={openIndex === index}
                  tabIndex={0}
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  <span className="text-xl text-blue-600">{openIndex === index ? '-' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="p-4 bg-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

    </>
  );
};

export default Faqs;
