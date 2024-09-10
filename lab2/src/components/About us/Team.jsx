import React from 'react';
import '../../styles/About Us/Team.css';
import TeamImage1 from '../../image/man-in-black-suit-holding-a-calling-card-3785104.png';
import TeamImage2 from '../../image/serious-man-3760373.png';
import TeamImage3 from '../../image/man-in-white-shirt-wearing-blue-bucket-hat-6626874.png';
import TeamImage4 from '../../image/transgender-model-touching-forehead-in-neon-light-7613875.png';

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <h2>Meet our team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={TeamImage1} alt="John Smith" />
                        <h3>John Smith</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={TeamImage2} alt="Simon Adams" />
                        <h3>Simon Adams</h3>
                        <p>Designer</p>
                    </div>
                    <div className="team-member">
                        <img src={TeamImage3} alt="Paul Jones" />
                        <h3>Paul Jones</h3>
                        <p>Developer</p>
                    </div>
                    <div className="team-member">
                        <img src={TeamImage4} alt="Sarah Williams" />
                        <h3>Sarah Williams</h3>
                        <p>Marketing</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
