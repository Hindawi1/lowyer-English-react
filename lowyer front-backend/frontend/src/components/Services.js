import React from "react";
import { FaRegAddressCard, FaTasks, FaClipboardCheck, FaGavel, FaBuilding, FaFileSignature, FaBalanceScale, FaHandshake, FaFileInvoice, FaComments } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      {/* Legal Services Section */}
      <section id="services">
        <div className="services-header">
          <h2>Our Legal Services</h2>
        </div>
        <div className="services-grid">
          {/* Service boxes with icons */}
          <div className="service-box">
            <FaGavel className="service-icon" />
            <h3>Arbitration</h3>
            <p>Providing alternative dispute resolution methods such as arbitration and amicable settlements.</p>
          </div>
          <div className="service-box">
            <FaBuilding className="service-icon" />
            <h3>Business & Corporate</h3>
            <p>Company formation, drafting regulations, and trademark registration services.</p>
          </div>
          <div className="service-box">
            <FaFileSignature className="service-icon" />
            <h3>Contracts & Agreements</h3>
            <p>Drafting and reviewing contracts to ensure rights and transparency.</p>
          </div>
          <div className="service-box">
            <FaBalanceScale className="service-icon" />
            <h3>Legal Consultation</h3>
            <p>Providing specialized legal advice across various legal fields.</p>
          </div>
          <div className="service-box">
            <FaHandshake className="service-icon" />
            <h3>Litigation & Defense</h3>
            <p>Representing clients in court and defending their legal rights.</p>
          </div>
        </div>
      </section>

      {/* Client Follow-up Section */}
      <section id="client-followup">
        <div className="followup-header">
          <h2>Client Follow-up</h2>
        </div>
        <div className="followup-steps">
          <div className="step-box">
            <FaRegAddressCard className="step-icon" />
            <h3>Request Reception</h3>
            <p>Collecting client information and case details.</p>
          </div>
          <div className="step-box">
            <FaTasks className="step-icon" />
            <h3>Request Analysis</h3>
            <p>Studying the case and establishing the legal action plan.</p>
          </div>
          <div className="step-box">
            <FaClipboardCheck className="step-icon" />
            <h3>Execution & Follow-up</h3>
            <p>Implementing legal procedures and providing regular follow-up with the client.</p>
          </div>
          <div className="step-box">
            <FaFileInvoice className="step-icon" />
            <h3>Case Closure</h3>
            <p>Completing all legal procedures and issuing final reports.</p>
          </div>
          <div className="step-box">
            <FaComments className="step-icon" />
            <h3>Evaluation & Feedback</h3>
            <p>Gathering client feedback to enhance future service quality.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;