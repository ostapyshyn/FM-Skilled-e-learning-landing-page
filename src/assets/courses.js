import design from './svg/icon-design.svg';
import crypto from './svg/icon-crypto.svg';
import business from './svg/icon-business.svg';
import animation from './svg/icon-animation.svg';
import photography from './svg/icon-photography.svg';

const courses = [
  {
    title: 'Animation',
    text: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    image: animation,
  },
  {
    title: 'Design',
    text: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    image: design,
  },
  {
    title: 'Photography',
    text: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    image: photography,
  },
  {
    title: 'Crypto',
    text: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    image: crypto,
  },
  {
    title: 'Business',
    text: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    image: business,
  },
];
export default courses;
