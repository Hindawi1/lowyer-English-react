import React from "react";
import aboutPic from "../assets/images/aboutpic.png"; // Ensure the path is correct

const About = () => {
  return (
    <section id="about" className="about-us-container">
      <div className="header-section">
        <div className="text-container">
          <h1 className="main-title">من نحن</h1>
          <p className="intro-text">
  منذ تأسيس <strong>مكتب المحامي محمد فؤاد بن عفيف</strong> للمحاماة والاستشارات القانونية<br />
  في جدة بالمملكة العربية السعودية بموجب ترخيص رقم (4367)،<br />
  قمنا بتقديم مجموعة متنوعة من الخدمات والاستشارات القانونية<br />
  الرائدة والشاملة لكافة القطاعات ومختلف المجالات التي نفتخر بالتعامل معهم<br />
  ونسعد بخدمة عملائنا الكرام من خلال توفير خدمات قانونية متكاملة<br />
  ومتميزة تلبي أعلى معايير الجودة وتحقق طموحات وأهداف عملائنا<br />
  وتتفوق على توقعاتهم، عبر التوظيف الأمثل للخبرة العملية الطويلة<br />
  والتراكمية وتقديم الخدمات والاستشارات القانونية بطرق مبتكرة وغير<br />
 
  تقليدية تمتاز بالريادة والابداع، وبفضل من الله أصبح لدينا عددا<br />
  العملاء المميزين والذين يثقون بالعمل معنا من أفراد أو شخصيات<br />
  .معنوية لنكون المستشارين الخاصين لأعمالهم
</p>

        </div>
        <div className="image-container">
          <img src={aboutPic} alt="Logo" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
