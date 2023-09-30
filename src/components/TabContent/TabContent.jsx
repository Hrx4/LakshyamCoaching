import React from "react";
import TabArticle from "../TabArticle/TabArticle";

const tabData = [
  {
    id: "tabs-1",
    imgSrc: "./tabImg/choose-us-image-01.png",
    title: "Best Education",
    description:
      "Welcome to Lakshyam Coaching, the premier institute dedicated to shaping the future of aspiring students in their journey towards success in competitive exams. At Lakshyam Coaching, we specialize in providing comprehensive coaching and guidance for various entrance examinations, including JEE Mains & Advance, NEET, Olympiads etc.",
  },
  {
    id: "tabs-2",
    imgSrc: "./tabImg/choose-us-image-02.png",
    title: "Expert Faculty",
    description:
      "We have a team of young, highly qualified and experienced faculty members who are experts in their respective domains. Our faculty members possess a deep understanding of the subjects they teach and employ effective teaching methodologies to ensure conceptual clarity and application-based learning.",
  },
  {
    id: "tabs-3",
    imgSrc: "./tabImg/choose-us-image-03.png",
    title: "Personalized Attention",
    description:
      "We understand that each student has unique strengths and weaknesses. Therefore, we emphasize personalized attention and provide individual support to help students overcome their challenges. Our faculty members are always available to address students' queries, provide guidance, and offer extra assistance whenever required.",
  },
];

const TabContent = () => {
  return (
    <section className="tabs-content">
      {tabData.map((tab) => (
        <TabArticle
          key={tab.id}
          id={tab.id}
          imgSrc={tab.imgSrc}
          title={tab.title}
          description={tab.description}
        />
      ))}
    </section>
  );
};

export default TabContent;
