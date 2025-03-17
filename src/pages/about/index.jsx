import React from "react";
import "./about.css";

export default function About() {
    return (
        <section className="about">
            <img
                className="profile_picture"
                src="https://media.licdn.com/dms/image/v2/D4D03AQE9VR7wyzObZw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709148498054?e=1747872000&v=beta&t=YnMxdp8Vggk1WEVWOvF1uZ5zWCKkVy09UhLbx9N5ciU"
                alt="Jorge's profile picture"
            />
            <div className="about-content">
                <h2> HELLO, I'M JORGE</h2>
                <p>
                    With over 15 years of experience as a Radio Engineer, I have specialized in RAN support, fault recovery, and network optimization for Nokia, Huawei, and Ericsson equipment. Throughout my career, I have worked in demanding environments, providing expert technical support and ensuring the stability of critical networks.
                    <br /><br />
                    Recently, I have been expanding my skill set by pursuing a Full Stack Web Development course at EDIT. – Disruptive Digital Education. In this program, I am developing projects using modern technologies such as HTML, CSS, JavaScript, React, Node.js, and SQL.
                    <br /><br />
                    Combining my extensive technical background with new web development skills, I am driven to create innovative and efficient solutions, always focusing on user experience and effective problem-solving.
                </p>
            </div>
        </section>
    );
}
