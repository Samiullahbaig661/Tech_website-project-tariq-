import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  {
    name: 'Luqman',
    position: 'Frontend Developer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUzsQfIdsYY1F1mLTS7BbVTrWC4CQqYtILg&s',
    bio: 'Haseeb is a highly skilled full-stack developer with expertise in both frontend and backend technologies. He has hands-on experience in building dynamic web applications using React.js, Next.js, Node.js, and MongoDB. ',
    skills: ['React', 'Redux', 'CSS'],
    email: 'luqman@example.com',
    linkedin: 'https://linkedin.com/in/luqman',
    github: 'https://github.com/luqman'
  },
  {
    name: 'Sami',
    position: 'Backend Developer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUzsQfIdsYY1F1mLTS7BbVTrWC4CQqYtILg&s',
    bio: 'Sami is a passionate backend developer with a strong foundation in building scalable server-side applications and RESTful APIs. With a deep understanding of Node.js, Express, and MongoDB, he ensures that every part of the backend system.',
    skills: ['Node.js', 'MongoDB', 'Express'],
    email: 'sami@example.com',
    linkedin: 'https://linkedin.com/in/sami',
    github: 'https://github.com/sami'
  },
  {
    name: 'Areeba',
    position: 'UI/UX Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUzsQfIdsYY1F1mLTS7BbVTrWC4CQqYtILg&s',
    bio: 'Areeba is a creative UI/UX designer with an eye for detail and a deep understanding of user-centered design principles. She specializes in crafting visually appealing interfaces that not only look beautiful but also provide intuitive user experiences.',
    skills: ['Figma', 'Illustrator', 'UX Research'],
    email: 'areeba@example.com',
    linkedin: 'https://linkedin.com/in/areeba',
    github: 'https://github.com/areeba'
  }
];

const teamSlice = createSlice({
  name: 'team',
  initialState, // 👈 yahan sirf `initialState` likho
  reducers: {}
});


export default teamSlice.reducer;
