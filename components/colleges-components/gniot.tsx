// "use client"
// import ScrollProgressBar from '../progress-bar'
// import AcademicsSection from '../academic-section'
// import AwardsSection from '../award-section'
// import Footer from '../footer'
// import HeroSection from '../hero-section'
// import UniversityLogos from '../logos-section'
// import PartnershipSection from '../partnership-section'
// import SpecializationsSection from '../specialization-section'
// import TestimonialsSection from '../testimonial-section'
// import Modal from '../modal'
// import RegisterForm from '../register-form'
// import { useEffect, useState } from 'react'
// import WhatsAppSticky from '../whatsapp-button'
// import CoursesTable from '../courses-table'
// import Header from '../header'

// const GniotComponents = () => {

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalHeading, setModalHeading] = useState("");

//   // function to open modal with optional heading
//   const handleOpenForm = (headingText="") => {
//     setIsModalOpen(true);
//     setModalHeading(headingText)
//   };

//   const handleCloseForm = () => {
//     setIsModalOpen(false);
//     setModalHeading("");
//   }

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     // First show after 60 sec
//     const timeout = setTimeout(() => {
//       setIsModalOpen(true);

//       interval = setInterval(() => {
//         setIsModalOpen(true);
//       }, 60000);
//     }, 60000);

//     return () => {
//       clearTimeout(timeout);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       <ScrollProgressBar />
//       <Header  handleOpenForm={handleOpenForm}/>
//       <HeroSection />
//       <UniversityLogos />
//       <PartnershipSection  handleOpenForm={handleOpenForm}/>
//       <CoursesTable handleOpenForm={handleOpenForm}/>
//       <AcademicsSection/>
//       <AwardsSection handleOpenForm={handleOpenForm}/>
//       <SpecializationsSection  handleOpenForm={handleOpenForm}/>
//       <TestimonialsSection/>
//       <Footer/>

//             {/* Floating WhatsApp */}
//       <WhatsAppSticky phoneNumber="917696376158" />


//        <Modal isOpen={isModalOpen} onClose={() => handleCloseForm()}>
//         <RegisterForm formHeading={modalHeading}/>
//        </Modal>
//     </div>
//   )
// }

// export default GniotComponents


"use client"
import ScrollProgressBar from '../progress-bar'
import AcademicsSection from '../academic-section'
import AwardsSection from '../award-section'
import Footer from '../footer'
import HeroSection from '../hero-section'
import UniversityLogos from '../logos-section'
import PartnershipSection from '../partnership-section'
import SpecializationsSection from '../specialization-section'
import TestimonialsSection from '../testimonial-section'
import Modal from '../modal'
import RegisterForm from '../register-form'
import { useEffect, useState } from 'react'
import WhatsAppSticky from '../whatsapp-button'
import CoursesTable from '../courses-table'
import Header from '../header'
import MobileAdmissionCard from '../mobile-admission-card'

const GniotComponents
 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalHeading, setModalHeading] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

  // function to open modal with optional heading
  const handleOpenForm = (courseName = "", headingText = "") => {
    setIsModalOpen(true);
    setSelectedCourse(courseName);
    setModalHeading(headingText);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setModalHeading("Apply For GNIOT University");
    setSelectedCourse("");
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // First show after 60 sec
    const timeout = setTimeout(() => {
      setIsModalOpen(true);

      interval = setInterval(() => {
        setIsModalOpen(true);
      }, 60000);
    }, 60000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <ScrollProgressBar />
      <Header handleOpenForm={handleOpenForm}/>
      <MobileAdmissionCard handleOpenForm={handleOpenForm}/>
      <HeroSection />
      <UniversityLogos />
      <PartnershipSection handleOpenForm={handleOpenForm}/>
      <CoursesTable handleOpenForm={handleOpenForm}/>
      <AcademicsSection/>
      <AwardsSection handleOpenForm={handleOpenForm}/>
      <SpecializationsSection  handleOpenForm={handleOpenForm}/>
      <TestimonialsSection/>
      <Footer/>

            {/* Floating WhatsApp */}
      <WhatsAppSticky phoneNumber="917696376158" />


       <Modal isOpen={isModalOpen} onClose={() => handleCloseForm()}>
        <RegisterForm formHeading={modalHeading} selectedCourse={selectedCourse} />
       </Modal>
    </div>
  )
}

export default GniotComponents;

