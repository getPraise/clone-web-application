import React from "react";
import Section from "./Section";


import card1 from "../../../assets/images/cardImage/card1.avif";
import card2 from "../../../assets/images/cardImage/card2.webp";
import card3 from "../../../assets/images/cardImage/card3.webp";
import card4 from "../../../assets/images/cardImage/card4.webp";
import card6 from "../../../assets/images/cardImage/card6.webp";
import card7 from "../../../assets/images/cardImage/card7.webp";
import card8 from "../../../assets/images/cardImage/card8.webp";
import card9 from "../../../assets/images/cardImage/card9.avif";
import card10 from "../../../assets/images/cardImage/card10.webp";
import card11 from "../../../assets/images/cardImage/card11.webp";
import card12 from "../../../assets/images/cardImage/card12.webp";
import card13 from "../../../assets/images/cardImage/card13.webp";
import card14 from "../../../assets/images/cardImage/card14.webp";
import card15 from "../../../assets/images/cardImage/card15.webp";
import card16 from "../../../assets/images/cardImage/card16.webp";


const MainComponent = () => {
  const acceptPaymentsCards = [
    {
    title: "Payment Gateway",
    description: "Offer a seamless payment experience on your website or app",
    image: card1, // Add image to each card
  },
  {
    title: "Payment Button",
    description: "Effortlessly add a Pay Now button without any coding required.",
    image: card2, // Add image to each card
  },
  {
    title: "Payment Links",
    description:
      "Create and share Links Over email, text and social to accept payment instantly",
    image: card3, // Add image to each card
  },
  {
    title: "Razorpay POS",
    description: "Accept seamless in-store payments with India's best POS solutions",
    image: card4, // Add image to each card
  },
];

  const makePayoutsCards = [
    {
      title: "API & Bulk Payouts",
      description:
        "Make multiple payouts with a single click from your dashboard",
        image: card6,
    },
    {
      title: "Source to Pay",
      description:
        "Control and optimize vendor payments with an integrated payables solution",
        image: card7,
    },
    {
      title: "Payout Links",
      description:
        "Share a payout links for instant payments no bank details needed",
        image: card8,
    },
    {
      title: "Tax Payments",
      description: "Online tax payment in a single click",
      image: card9,
    },
  ];

  const startBusinessBankingCards = [
    {
      title: "Current Account",
      description:
        "Automate banking with India's top current account for startups",
        image: card10,
    },
    {
      title: "Escrow Account",
      description:
        "Automate Escrow money transfers with total safety and compliance",
        image: card11,
    },
    {
      title: "Forex Management",
      description:
        "Get effortless foreign funding management with expert support",
        image: card12,
    },
    {
      title: "Accounting Integration",
      description: "Easy integration with your accounting software",
      image: card13,
    },
  ];

  const automatePayrollCards = [
    {
      title: "Payroll for Startups",
      description:
        "Master payroll and compliance with a solution build just for startups",
        image: card14,
    },
    {
      title: "Payroll for CAs",
      description:
        "Transform payroll and compliance for your client with RazorpayX",
        image: card15,
    },
    {
      title: "Payroll for Enterprises",
      description:
        "Get India's No. 1 payroll software for enterprises with RazorpayX",
        image: card16,
    },
  ];

  const getCreditLoansCards = [
    {
      title: "Instant Settlement",
      description: "Get customer payments in your bank account instantly",
      image: card16,
    },
  ];

  return (
    <div>
       <Section
        heading="Accept Payments"
        cardsData={acceptPaymentsCards}
        showLinks={true} />
      <Section heading="Make Payouts" cardsData={makePayoutsCards}
      showLinks={false} />
      <Section heading="Start Business Banking" cardsData={startBusinessBankingCards}
      showLinks={false} />
      <Section heading="Automate Payroll" cardsData={automatePayrollCards}
      showLinks={false} />
      <Section heading="Get Credit & Loans" cardsData={getCreditLoansCards}
      showLinks={false} />
    </div>
  );
};

export default MainComponent;
