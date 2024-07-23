// src/App.js
import React, { useState, useEffect, useRef } from "react";
import pictures from "./assets/pictures.json";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pictures.length);
    setImageUrl(pictures[randomIndex]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageLoaded(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]);

  return (
    <div>
      <h1>Random Picture from Collection</h1>
      <p>
        Authorities handling security at the Saturday rally in Butler,
        Pennsylvania, where former President Donald Trump survived an
        assassination attempt, are pushing back on claims that Trump was denied
        requests for additional security. The US Secret Service has called the
        claim “absolutely false.” “There’s an untrue assertion that a member of
        the former President’s team requested additional security resources &
        that those were rebuffed. This is absolutely false. In fact, we added
        protective resources & technology & capabilities as part of the
        increased campaign travel tempo,” Secret Service Chief of Communications
        Anthony Guglielmi wrote in a post on X Sunday morning. The FBI also
        pushed back on the implication Saturday night. “There was no additional
        request for security that was ever denied by the FBI,” Kevin Rojek, the
        FBI special agent in charge of the Pittsburgh office, said during a news
        conference Saturday night. At least one lawmaker, Rep. Mike Waltz of
        Florida, has publicly claimed on social media that Trump’s requests for
        heightened security were rejected. Department of Homeland Security
        Secretary Alejandro Mayorkas released a statement regarding the
        shooting, where he said the DHS and Secret Service are jointly working
        with law enforcement on the investigation.
      </p>
      <pre>
        A Pennsylvania senate candidate who witnessed the attempt on former
        President Donald Trump’s life on Saturday described the scene as “very
        scary” and called on the nation to dial down political rhetoric. “The
        president went down immediately and Secret Service jumped on top of
        him,” GOP candidate Dave McCormick, who was sitting in the front row of
        Trump’s rally, told ABC Sunday morning. He later added: “An inch
        difference and the president would have been dead.” McCormick described
        standing up amid the confusion and realizing someone behind him was
        seriously injured. “It was clear that he was very, very injured and
        bleeding very badly,” he said. McCormick said that while Americans have
        a “conflict of ideas,” those conflicts should never involve physical
        violence against candidates. “We don’t need to resort, and can’t resort,
        to violence as a way of promoting political agendas. … It needs to be
        dialed back across the board,” he said.
      </pre>
      <div style={{ height: "100vh", border: "1px solid black" }}>
        <p>Scroll down to see the picture</p>
      </div>
      <div ref={imageRef} style={{ minHeight: "300px" }}>
        {imageLoaded && (
          <img
            src={imageUrl}
            alt="Random"
            style={{ width: "800px", height: "300px", objectFit: "cover" }}
            //https://www.w3schools.com/css/css3_object-fit.asp
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default App;

//I have a list of picture URL in a local file. I want to randomly display a picture from my own collection, and only start lazy loading on above the fold area as soon as a user scrolls down with react.js
