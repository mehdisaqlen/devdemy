import React, { useEffect } from "react";

import Container from "../components/Container";

function About() {
  return (
    <Container>
      <div className="normal-div">
        <h1>About DevDemy</h1>

        <p>
          Every individual has the potential to create change, whether in their
          life, their community, or the world. The transformative power of
          education is what unlocks that potential. Yet, access to high-quality
          education has been a privilege of the few. Back in 2012, we realized
          it was a time for a seismic shift in learning. From the tried and true
          to the leading edge. From “for some” to “for all.” By opening the
          classroom through online learning, edX empowers millions of learners
          to unlock their potential and become changemakers.
        </p>

        <h2>Our Missions</h2>
        <p>
          There are three commitments we've made to the world. We've been
          grounded by these since day one:
        </p>
        <ul>
          <li>
            Increase access to high-quality education for everyone, everywhere
          </li>
          <li> Enhance teaching and learning on campus and online </li>
          <li>Advance teaching and learning through research</li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
