import React from "react";

const skills = [
  { color: "warning", title: "Html" },
  { color: "primary", title: "Css" },
  { color: "secondary", title: "React" },
  { color: "success", title: "Github" }
];

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='modal-content text-center'>
          <div className='modal-header'>
            <h4 className='modal-title' style={{ margin: "0 auto" }}>
              More About
              <span style={{ color: "crimson" }} className='ml-1'>
                Serhii
              </span>
            </h4>
          </div>
          <div className='modal-body'>
            <img
              src='https://freeeman.netlify.app/img/portrait.jpg'
              alt='avatar'
              width='140'
              height='140'
              className='avatar'
            />
            <h3 className='media-heading'>Popov Serhii</h3>
            <h6>
              <strong>freeman23@bigmir.net</strong>
            </h6>
            <h6>
              <a href='https://github.com/Freeman2333' target='_blank'>
              https://github.com/Freeman2333
              </a>
            </h6>

            {skills.map(skill => (
              <span className={`badge badge-${skill.color} p-2 m-1`}>
                {skill.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;