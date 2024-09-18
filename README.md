# RealReel

**RealReel** is an advanced platform that leverages artificial intelligence to detect and display deepfake media. It uses cutting-edge techniques such as Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) to analyze video frames for inconsistencies and determine if the content is deepfaked. The website also showcases AI-generated deepfake media for user exploration.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Typewriter Effect**: A smooth typewriter animation for the site title and other content using Framer Motion.
- **Lamp Effect**: A visually stunning lamp effect for certain components, adding depth and dynamism.
- **Interactive Globe**: An interactive 3D globe for visual engagement, powered by the World component.
- **Newsletter Signup**: Email subscription form for users to stay updated.
- **Dark/Light Mode Support**: The website supports both light and dark themes for user preference.
- **Deepfake Detection**: CNN and RNN models analyze every video frame to identify deepfake content and provide results to users.
- **Model Training**: AI model training to improve deepfake detection accuracy over time.
- **Responsive Design**: The site is fully responsive and works seamlessly across different devices and screen sizes.

## Tech Stack
- **Frontend**:
  - React.js (with hooks)
  - Tailwind CSS (for UI components)
  - Framer Motion (for animations)
- **Backend**:
  - Node.js (Optional: for handling server requests)
  - Python (for AI model training and inference)
- **AI Models**:
  - CNN (Convolutional Neural Network) for frame-level image analysis
  - RNN (Recurrent Neural Network) for sequence analysis across frames
- **Styling**:
  - Tailwind CSS
  - Custom CSS
- **Email Subscriptions**:
  - (Optional) Integration with backend or third-party services like Mailchimp or Firebase.

## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 14.0)
- **npm** (or **yarn** as a package manager)
- **Python** (>= 3.7) with necessary deep learning libraries like TensorFlow or PyTorch

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/realreel.git
   cd realreel


### Usage
Once the website is running:

- **Typewriter Effect:** Explore the dynamic page title created using a smooth typewriter animation powered by Framer Motion.
- **Interactive 3D Globe:** Engage with the 3D globe, which offers an immersive, visually striking experience for users.
- **Newsletter Signup:** Sign up for the newsletter to receive updates about AI-generated content and deepfake detection technology.
- **Dark/Light Mode Support:** Switch between light and dark themes to suit your viewing preferences.
- **Deepfake Detection:** Upload a video to analyze whether it has been deepfaked. The website uses CNN and RNN models to examine inconsistencies in each frame and deliver a detailed report.
- **Model Training:** Train the CNN and RNN models with new datasets to improve detection accuracy and make the system more robust.

### Future Improvements
- **User Authentication:** Implement a login/signup system to offer personalized features and save user data.
- **Deepfake Generation:** Add the ability for users to generate their own deepfakes with uploaded content, leveraging the same AI models.
-**Improved Model Accuracy:** Continuously enhance the CNN and RNN models to improve the accuracy of deepfake detection, especially for more subtle manipulations.
-**Social Sharing:** Enable users to share the results of deepfake detection or AI-generated media directly on social media platforms.
-**Cloud Integration:** Offload the heavy lifting of AI model inference and training to cloud platforms to increase performance and scalability.


### License
This project is licensed under the MIT License. For more information, refer to the [LICENSE](#license) file included in the repository.



