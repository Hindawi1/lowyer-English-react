import React from "react";
import { FaRegAddressCard, FaTasks, FaClipboardCheck, FaGavel, FaBuilding, FaFileSignature, FaBalanceScale, FaHandshake, FaFileInvoice, FaComments } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      {/* قسم خدماتنا القانونية */}
      <section id="services">
        <div className="services-header">
          <h2>خدماتنا القانونية</h2>
        </div>
        <div className="services-grid">
          {/* صناديق الخدمات مع الأيقونات */}
          <div className="service-box">
            <FaGavel className="service-icon" />
            <h3>التحكيم</h3>
            <p>توفير الوسائل البديلة لحل المنازعات مثل التحكيم والتسويات الودية.</p>
          </div>
          <div className="service-box">
            <FaBuilding className="service-icon" />
            <h3>قطاع الأعمال والشركات</h3>
            <p>خدمات تأسيس الشركات، إعداد اللوائح، وتسجيل العلامات التجارية.</p>
          </div>
          <div className="service-box">
            <FaFileSignature className="service-icon" />
            <h3>العقود والاتفاقيات</h3>
            <p>إعداد ومراجعة العقود لضمان الحقوق وتحقيق الشفافية.</p>
          </div>
          <div className="service-box">
            <FaBalanceScale className="service-icon" />
            <h3>الاستشارات القانونية</h3>
            <p>تقديم استشارات قانونية متخصصة في مختلف المجالات القانونية.</p>
          </div>
          <div className="service-box">
            <FaHandshake className="service-icon" />
            <h3>التقاضي والدفاع</h3>
            <p>تمثيل العملاء في المحاكم والدفاع عن حقوقهم القانونية.</p>
          </div>
        </div>
      </section>

      {/* قسم المتابعة مع العميل */}
      <section id="client-followup">
        <div className="followup-header">
          <h2>المتابعة مع العميل</h2>
        </div>
        <div className="followup-steps">
          <div className="step-box">
            <FaRegAddressCard className="step-icon" />
            <h3>استقبال الطلب</h3>
            <p>جمع معلومات العميل وتفاصيل القضية.</p>
          </div>
          <div className="step-box">
            <FaTasks className="step-icon" />
            <h3>تحليل الطلب</h3>
            <p>دراسة القضية ووضع خطة العمل القانونية.</p>
          </div>
          <div className="step-box">
            <FaClipboardCheck className="step-icon" />
            <h3>التنفيذ والمتابعة</h3>
            <p>تنفيذ الإجراءات القانونية وتقديم المتابعة المنتظمة مع العميل.</p>
          </div>
          <div className="step-box">
            <FaFileInvoice className="step-icon" />
            <h3>إغلاق القضية</h3>
            <p>استكمال جميع الإجراءات القانونية وإصدار التقارير النهائية.</p>
          </div>
          <div className="step-box">
            <FaComments className="step-icon" />
            <h3>التقييم والتغذية الراجعة</h3>
            <p>الحصول على آراء العملاء لتحسين جودة الخدمات المستقبلية.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
