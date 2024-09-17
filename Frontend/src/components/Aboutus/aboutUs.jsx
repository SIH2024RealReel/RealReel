
import React from 'react';
import './aboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="aboutus">
    <div className="about-us-container">
      <h1 id="id1">About Us</h1>
      <p>
        <strong>Project Name: RealReel</strong><br />
        We are <strong>"We don’t Byte"</strong>, a passionate team working on creating AI/ML-based solutions to detect face-swap deep fake videos. Our project, RealReel, aims to address the growing concern of deep fake media by developing a reliable detection system.
      </p>
      
      <h2 id="id1">Motivations</h2>
      <p>
        The rise of deep fake technology poses significant threats to digital content authenticity and public trust. With advancements in AI, deep fakes have become increasingly sophisticated, making it difficult to distinguish real from fake content. Our motivation stems from the need to safeguard the integrity of digital media, ensuring that false information does not spread unchecked.
      </p>

      <h2 id="id1">Technologies Used</h2>
      <ul>
        <li><strong>Convolutional Neural Networks (CNNs):</strong> For detecting inconsistencies in facial features, expressions, and movements.</li>
        <li><strong>Recurrent Neural Networks (RNNs) & LSTMs:</strong> To analyze video frame sequences for temporal anomalies.</li>
        <li><strong>Capsule Networks:</strong> For identifying discrepancies in facial pose and texture.</li>
        <li><strong>Adversarial Training:</strong> Using GANs to improve the detection of deep fakes.</li>
        <li><strong>Audio-Visual Analysis:</strong> Detecting mismatches between lip movements and speech.</li>
        <li><strong>Blockchain Technology:</strong> Ensuring content authenticity through immutable records.</li>
        <li><strong>Frequency Analysis:</strong> Analyzing the frequency domain of images/videos to detect anomalies.</li>
      </ul>

      <h2 id="id1">The Idea Behind RealReel</h2>
      <p>
        Our approach combines various techniques like CNNs, RNNs, and audio-visual inconsistencies to detect fake content. By analyzing facial features, movements, and ambient sounds, our model identifies the subtle cues of manipulation. We also use blockchain technology to ensure the authenticity of media files, offering a robust, multi-layered solution to deep fake detection.
      </p>

      <h2 id="id1">Team Members</h2>
      <ul>
        <li><strong>Trishank Kaushik (Team Leader):</strong> Leading the project with a focus on AI/ML integration.</li>
        <li><strong>Amrit Raj:</strong> Contributing to model development and implementation.</li>
        <li><strong>Arpita Agrahari:</strong> Working on data processing and performance optimization.</li>
        <li><strong>Pareedula H V Sai Krishna:</strong> Specializing in AI/ML architecture and system integration.</li>
        <li><strong>Peoush Chakraborty:</strong> Focused on front-end development and user interface design.</li>
        <li><strong>Pratyush Tiwary:</strong> Responsible for back-end development and system infrastructure.</li>
      </ul>
    </div>
    </div>
  );
};

export default AboutUs;
