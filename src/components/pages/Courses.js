import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './courses.css';

const Courses = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/modules');
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      setModules(response.data);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  const toggleContent = (id) => {
    setModules(modules.map(module => {
      if (module.id === id) {
        return {
          ...module,
          showContent: !module.showContent
        };
      }
      return module;
    }));
  };

  return (
    <div>
      <h1>Modules</h1>
      {modules.map(module => (
        <div key={module.id} className='module.id'>
          <h2>{module.Title}</h2>
          <p>{module.Description}</p>
          <button onClick={() => toggleContent(module.id)}>
            {module.showContent ? 'Hide Content' : 'Show Content'}
          </button>
          {module.showContent && (
            <ul>
              <li>{module.Chapter1}</li><br></br>
              <li>{module.Chapter2}</li><br></br>
              <li>{module.Chapter3}</li><br></br>
              <li>{module.Chapter4}</li><br></br>
              <li>{module.Chapter5}</li><br></br>
              <li>{module.Chapter6}</li><br></br>
              <li>{module.Chapter7}</li><br></br>
            </ul>
          )}
          <img src={module.Photos} alt={module.Title} />
        </div>
      ))}
    </div>
  );
};

export default Courses;
