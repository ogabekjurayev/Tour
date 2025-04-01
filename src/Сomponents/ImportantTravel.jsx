// import { useState } from "react";
// import { motion } from "framer-motion";
// import { X, Plus } from "lucide-react";

// const faqData = [
//   {
//     question: "THE IDEAL TIME FOR A TRIP",
//     answer:
//       "The ideal time for a trip to this oriental fairy tale is spring and autumn. The weather during this period is milder and more comfortable. These seasons must be booked at least two months in advance.",
//   },
//   {
//     question: "VISA",
//     answer:
//       "Visa requirements depend on your nationality. Check the official website.",
//   },
//   {
//     question: "SUN PROTECTION",
//     answer:
//       "Wear sunscreen, sunglasses, and a hat to protect yourself from the sun.",
//   },
//   {
//     question: "SOUVENIRS",
//     answer: "Popular souvenirs include ceramics, textiles, and dried fruits.",
//   },
//   {
//     question: "DRESS CODE",
//     answer:
//       "Wear modest and comfortable clothing, especially in religious sites.",
//   },
//   {
//     question: "CLIMATE",
//     answer:
//       "Uzbekistan has a continental climate with hot summers and cold winters.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center">
//       <div className="w-full max-w-2xl p-6">
//         <h2 className="text-center text-lg mb-4">
//           Here you will find answers to the most frequently asked questions
//         </h2>
//         {faqData.map((item, index) => (
//           <div key={index} className="border-b border-gray-700 relative">
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full text-left p-4 flex justify-between items-center"
//             >
//               <span>{item.question}</span>
//               {openIndex === index ? <X size={24} /> : <Plus size={24} />}
//             </button>
//             {openIndex === index && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="p-4 text-gray-400"
//               >
//                 {item.answer}
//               </motion.div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import plus from "../ImgSvg/+.svg";
import pluswhite from "../ImgSvg/pluswhite.svg";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ImportantTravelBig">
      <div className="ImportantTravelAll  " onClick={() => setIsOpen(!isOpen)}>
        <span className="ImportantTravel-question">{question}</span>
        <motion.img
          src={pluswhite}
          alt="Toggle FAQ"
          className="plus"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0,
        }}
        transition={{
          height: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 0.4, ease: "easeInOut" },
        }}
        className="overflow-hidden"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="important-answer"
        >
          {answer}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: isOpen ? 16 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="border-b border-gray-300"
      />
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "THE IDEAL TIME FOR A TRIP",
      answer:
        "The best times to visit this enchanting destination are during the spring and autumn. The weather in these seasons is milder and more pleasant. It’s recommended to make reservations at least two months in advance for these periods.",
    },
    {
      question: "VISA",
      answer:
        "Uzbekistan does not require a visa for citizens of the Russian Federation. Additionally, citizens from over 86 countries can enter visa-free. You can travel with just your passport.",
    },
    {
      question: "SUN PROTECTION",
      answer:
        "Make sure to bring SPF cream with a protection level of 50 or higher for your trip. Uzbekistan enjoys over 300 sunny days a year, so it's important to protect your skin. Additionally, don't forget to wear a sun hat and sunglasses for extra protection from the sun.",
    },
    {
      question: "CLIMATE",
      answer:
        "Uzbekistan has a continental climate, characterized by hot summers and cold winters, with significant temperature variations throughout the year.",
    },
    {
      question: "SOUVENIRS",
      answer:
        "For a truly memorable piece of Uzbekistan, consider taking home: exquisite ceramics, luxurious silk fabrics and carpets, finely crafted Damascus steel knives, unique artisan souvenirs, or beautifully designed traditional dresses with a modern twist. These items are made by craftspeople who have inherited their skills through generations, ensuring exceptional quality and authenticity.",
    },
    {
      question: "APPROPRIATE DRESS",
      answer:
        "While Uzbekistan is a secular country, its traditions are deeply ingrained. When going on tours, especially if you'll be visiting active mosques or religious sites, it's best to confirm the dress code with your guide. If you're entering religious buildings, make sure your shoulders and legs down to your knees are covered.",
    },
  ];

  return (
    <div>
      {" "}
      <div className="linya"></div>
      <div className="bag-img">
        <div className="container-travel">
          <h2 className="Important-travel-h2">
            Important to know before you travel
          </h2>
          <p className="Important-travel-p">
            Here you will find answers to the most frequently asked questions
          </p>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
