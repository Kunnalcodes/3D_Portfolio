import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, academicScores } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const AcademicScoreCard = ({ index, title, score, subheading }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <div className='w-16 h-16 rounded-full border-4 border-white flex justify-center items-center'>
          <span className='text-white text-[18px] font-bold'>{score}</span>
        </div>

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-secondary text-[14px] text-center'>
          {subheading}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Computer Science student with a strong foundation in software development and data structures & algorithms. I work comfortably with C, C++, Python, Java, JavaScript, React, MySQL, and MongoDB, and enjoy solving problems through efficient, clean logic. I am driven by continuous learning and collaborative growth.
      </motion.p>
        
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.div variants={textVariant()} className='mt-20'>
        <h2 className={styles.sectionHeadText}>Academics Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I completed my schooling from<b> Innocent Hearts School</b>, where I built a strong foundation in academics, logical thinking, and discipline. I am currently pursuing a <b>Bachelor of Technology</b> (B.Tech) in Computer Science and Engineering at <b>GNA University</b> , where I am developing in-depth knowledge of core computer science subjects.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {academicScores.map((score, index) => (
          <AcademicScoreCard key={score.title} index={index} {...score} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
